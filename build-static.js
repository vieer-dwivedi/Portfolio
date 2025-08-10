#!/usr/bin/env node

import { build } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildForCloudFront() {
  try {
    console.log('🚀 Building static site for CloudFront deployment...');
    
    // Build the application
    await build({
      root: path.resolve(__dirname, 'client'),
      base: './', // Use relative paths for CloudFront
      build: {
        outDir: path.resolve(__dirname, 'dist/public'),
        emptyOutDir: true,
        sourcemap: false,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              animations: ['framer-motion'],
              ui: ['@radix-ui/react-dialog', '@radix-ui/react-accordion'],
              icons: ['lucide-react', 'react-icons'],
              routing: ['wouter'],
              query: ['@tanstack/react-query']
            },
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name.split('.');
              const ext = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                return `assets/images/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js'
          }
        },
        chunkSizeWarningLimit: 1000,
        target: 'es2015'
      }
    });

    // Copy CloudFront configuration files
    const distPublic = path.resolve(__dirname, 'dist/public');
    
    // Create error pages for CloudFront
    const errorPage = await fs.readFile(path.join(distPublic, 'index.html'), 'utf-8');
    await fs.writeFile(path.join(distPublic, '404.html'), errorPage);
    await fs.writeFile(path.join(distPublic, '403.html'), errorPage);

    // Create CloudFormation template
    const cloudformationTemplate = {
      AWSTemplateFormatVersion: '2010-09-09',
      Description: 'DevOps Engineer Portfolio - CloudFront Distribution',
      Resources: {
        S3Bucket: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: 'devopsengineer-xyz-static-site',
            WebsiteConfiguration: {
              IndexDocument: 'index.html',
              ErrorDocument: '404.html'
            },
            PublicReadPolicy: {
              PolicyDocument: {
                Statement: [{
                  Effect: 'Allow',
                  Principal: '*',
                  Action: 's3:GetObject',
                  Resource: 'arn:aws:s3:::devopsengineer-xyz-static-site/*'
                }]
              }
            }
          }
        },
        CloudFrontDistribution: {
          Type: 'AWS::CloudFront::Distribution',
          Properties: {
            DistributionConfig: {
              Origins: [{
                Id: 'S3Origin',
                DomainName: 'devopsengineer-xyz-static-site.s3.amazonaws.com',
                CustomOriginConfig: {
                  HTTPPort: 80,
                  HTTPSPort: 443,
                  OriginProtocolPolicy: 'redirect-to-https'
                }
              }],
              DefaultCacheBehavior: {
                TargetOriginId: 'S3Origin',
                ViewerProtocolPolicy: 'redirect-to-https',
                Compress: true,
                CachePolicyId: '4135ea2d-6df8-44a3-9df3-4b5a84be39ad'
              },
              CustomErrorResponses: [
                {
                  ErrorCode: 404,
                  ResponseCode: 200,
                  ResponsePagePath: '/index.html'
                },
                {
                  ErrorCode: 403,
                  ResponseCode: 200,
                  ResponsePagePath: '/index.html'
                }
              ],
              Enabled: true,
              DefaultRootObject: 'index.html',
              PriceClass: 'PriceClass_All',
              HttpVersion: 'http2'
            }
          }
        }
      }
    };

    await fs.writeFile(
      path.join(distPublic, 'cloudformation.json'),
      JSON.stringify(cloudformationTemplate, null, 2)
    );

    // Create deployment instructions
    const deploymentInstructions = `# CloudFront Deployment Instructions

## Upload to S3
1. Create an S3 bucket: devopsengineer-xyz-static-site
2. Upload all files from dist/public/ to the bucket
3. Enable static website hosting
4. Set index.html as index document
5. Set 404.html as error document

## CloudFront Setup
1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Configure custom error pages:
   - 404 -> /index.html (200)
   - 403 -> /index.html (200)
4. Enable compression
5. Set cache policy for optimal performance

## Domain Setup (devopsengineer.xyz)
1. Add CNAME record pointing to CloudFront distribution
2. Configure SSL certificate in AWS Certificate Manager
3. Add custom domain to CloudFront distribution

## Performance Optimizations Applied
- Code splitting with lazy loading
- Image optimization and lazy loading
- Gzip compression enabled
- Browser caching headers
- CDN edge locations globally
- HTTP/2 enabled

## Files Ready for Deployment
- Static HTML, CSS, JS files
- Lazy-loaded components
- CloudFront-compatible routing
- SEO-optimized pages
- Responsive images
`;

    await fs.writeFile(
      path.join(__dirname, 'DEPLOYMENT.md'),
      deploymentInstructions
    );

    console.log('✅ Static build complete!');
    console.log('📁 Files ready in: dist/public/');
    console.log('📖 Deployment instructions: DEPLOYMENT.md');
    console.log('🌍 Optimized for CloudFront deployment');

  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildForCloudFront();