import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Contrast, Eye, Palette, Sun, Moon } from 'lucide-react';

type ContrastMode = 'normal' | 'high' | 'enhanced' | 'inverted';

interface ContrastSettings {
  mode: ContrastMode;
  colorBlindFriendly: boolean;
  reducedMotion: boolean;
}

export default function ContrastToggle() {
  const [settings, setSettings] = useState<ContrastSettings>({
    mode: 'normal',
    colorBlindFriendly: false,
    reducedMotion: false
  });

  const [isOpen, setIsOpen] = useState(false);

  // Simple announcement function for screen readers
  const announce = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only absolute -top-full';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  };

  // Load saved settings on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings(parsedSettings);
        applyContrastMode(parsedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Check for system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    if (prefersReducedMotion || prefersHighContrast) {
      const systemSettings = {
        ...settings,
        reducedMotion: prefersReducedMotion,
        mode: prefersHighContrast ? 'high' as ContrastMode : settings.mode
      };
      setSettings(systemSettings);
      applyContrastMode(systemSettings);
    }
  }, []);

  // Apply contrast mode to document
  const applyContrastMode = (newSettings: ContrastSettings) => {
    const root = document.documentElement;
    
    // Remove existing contrast classes
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-enhanced', 'contrast-inverted');
    root.classList.remove('colorblind-friendly', 'reduced-motion');
    
    // Apply new contrast mode
    root.classList.add(`contrast-${newSettings.mode}`);
    
    if (newSettings.colorBlindFriendly) {
      root.classList.add('colorblind-friendly');
    }
    
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    }

    // Set CSS custom properties for contrast ratios
    switch (newSettings.mode) {
      case 'high':
        root.style.setProperty('--contrast-multiplier', '1.5');
        root.style.setProperty('--bg-opacity', '0.95');
        break;
      case 'enhanced':
        root.style.setProperty('--contrast-multiplier', '1.8');
        root.style.setProperty('--bg-opacity', '1');
        break;
      case 'inverted':
        root.style.setProperty('--contrast-multiplier', '2');
        root.style.setProperty('--bg-opacity', '1');
        break;
      default:
        root.style.setProperty('--contrast-multiplier', '1');
        root.style.setProperty('--bg-opacity', '0.8');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const updateSettings = (newSettings: Partial<ContrastSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    applyContrastMode(updated);
    
    // Announce changes to screen readers
    if (newSettings.mode) {
      const modeNames = {
        normal: 'Normal contrast',
        high: 'High contrast',
        enhanced: 'Enhanced contrast',
        inverted: 'Inverted colors'
      };
      announce(`Contrast mode changed to ${modeNames[newSettings.mode]}`);
    }
    
    if (newSettings.colorBlindFriendly !== undefined) {
      announce(
        `Color blind friendly mode ${newSettings.colorBlindFriendly ? 'enabled' : 'disabled'}`
      );
    }
    
    if (newSettings.reducedMotion !== undefined) {
      announce(
        `Reduced motion ${newSettings.reducedMotion ? 'enabled' : 'disabled'}`
      );
    }
  };

  const contrastModes = [
    {
      value: 'normal' as ContrastMode,
      label: 'Normal Contrast',
      description: 'Standard color scheme',
      icon: <Eye className="w-4 h-4" />
    },
    {
      value: 'high' as ContrastMode,
      label: 'High Contrast',
      description: 'Increased contrast for better visibility',
      icon: <Contrast className="w-4 h-4" />
    },
    {
      value: 'enhanced' as ContrastMode,
      label: 'Enhanced Contrast',
      description: 'Maximum contrast with bold colors',
      icon: <Sun className="w-4 h-4" />
    },
    {
      value: 'inverted' as ContrastMode,
      label: 'Inverted Colors',
      description: 'Light text on dark backgrounds',
      icon: <Moon className="w-4 h-4" />
    }
  ];

  const getCurrentModeIcon = () => {
    const current = contrastModes.find(mode => mode.value === settings.mode);
    return current?.icon || <Eye className="w-4 h-4" />;
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="relative border-gray-600 hover:border-blue-400 transition-colors"
          aria-label="Accessibility contrast settings"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            {getCurrentModeIcon()}
            <span className="hidden sm:inline text-sm">Contrast</span>
            {(settings.colorBlindFriendly || settings.reducedMotion) && (
              <div className="w-2 h-2 bg-blue-400 rounded-full absolute -top-1 -right-1" />
            )}
          </motion.div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        className="w-72 bg-gray-900/95 backdrop-blur-sm border-gray-700" 
        align="end"
        sideOffset={8}
      >
        <DropdownMenuLabel className="text-white font-semibold px-3 py-2">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-blue-400" />
            Accessibility Settings
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-gray-700" />
        
        {/* Contrast Mode Selection */}
        <div className="px-3 py-2">
          <p className="text-sm font-medium text-gray-300 mb-3">Contrast Mode</p>
          {contrastModes.map((mode) => (
            <motion.div
              key={mode.value}
              whileHover={{ x: 2 }}
              className={`flex items-start gap-3 p-2 rounded cursor-pointer transition-colors ${
                settings.mode === mode.value 
                  ? 'bg-blue-600/20 border border-blue-400/30' 
                  : 'hover:bg-gray-800/50'
              }`}
              onClick={() => updateSettings({ mode: mode.value })}
            >
              <div className={`mt-1 ${settings.mode === mode.value ? 'text-blue-400' : 'text-gray-400'}`}>
                {mode.icon}
              </div>
              <div className="flex-1">
                <div className={`font-medium text-sm ${
                  settings.mode === mode.value ? 'text-blue-300' : 'text-white'
                }`}>
                  {mode.label}
                  {settings.mode === mode.value && (
                    <span className="ml-2 text-xs px-2 py-0.5 bg-blue-500 rounded-full">Active</span>
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{mode.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <DropdownMenuSeparator className="bg-gray-700" />

        {/* Additional Options */}
        <div className="px-3 py-2 space-y-2">
          <motion.div
            whileHover={{ x: 2 }}
            className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
              settings.colorBlindFriendly ? 'bg-green-600/20 border border-green-400/30' : 'hover:bg-gray-800/50'
            }`}
            onClick={() => updateSettings({ colorBlindFriendly: !settings.colorBlindFriendly })}
          >
            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
              settings.colorBlindFriendly 
                ? 'bg-green-500 border-green-500' 
                : 'border-gray-400'
            }`}>
              {settings.colorBlindFriendly && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-white rounded-sm"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-white">Color Blind Friendly</div>
              <div className="text-xs text-gray-400">Enhanced color differentiation</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: 2 }}
            className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
              settings.reducedMotion ? 'bg-purple-600/20 border border-purple-400/30' : 'hover:bg-gray-800/50'
            }`}
            onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
          >
            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
              settings.reducedMotion 
                ? 'bg-purple-500 border-purple-500' 
                : 'border-gray-400'
            }`}>
              {settings.reducedMotion && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-white rounded-sm"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-white">Reduce Motion</div>
              <div className="text-xs text-gray-400">Minimize animations and effects</div>
            </div>
          </motion.div>
        </div>

        <DropdownMenuSeparator className="bg-gray-700" />

        {/* Reset Button */}
        <div className="px-3 py-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => updateSettings({ mode: 'normal', colorBlindFriendly: false, reducedMotion: false })}
          >
            Reset to Default
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}