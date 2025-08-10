import { motion } from "framer-motion";

interface FloatingIcon {
  icon: string;
  color: string;
  size: string;
  duration: number;
  delay: number;
  radius: number;
}

const orbitalIcons: FloatingIcon[] = [
  { icon: "fab fa-aws", color: "text-orange-500", size: "text-2xl", duration: 20, delay: 0, radius: 180 },
  { icon: "fab fa-microsoft", color: "text-blue-500", size: "text-2xl", duration: 15, delay: -5, radius: 180 },
  { icon: "fab fa-google", color: "text-green-500", size: "text-2xl", duration: 18, delay: -10, radius: 180 },
  { icon: "fas fa-dharmachakra", color: "text-blue-600", size: "text-2xl", duration: 22, delay: -15, radius: 180 },
  { icon: "fab fa-docker", color: "text-blue-400", size: "text-2xl", duration: 16, delay: -8, radius: 180 },
  { icon: "fab fa-python", color: "text-yellow-500", size: "text-2xl", duration: 19, delay: -12, radius: 180 },
  { icon: "fab fa-js-square", color: "text-yellow-400", size: "text-2xl", duration: 17, delay: -6, radius: 180 },
  { icon: "fas fa-server", color: "text-gray-600", size: "text-2xl", duration: 21, delay: -3, radius: 180 },
];

const backgroundFloatingIcons: FloatingIcon[] = [
  { icon: "fab fa-aws", color: "text-orange-300", size: "text-8xl", duration: 6, delay: 0, radius: 0 },
  { icon: "fab fa-microsoft", color: "text-blue-300", size: "text-7xl", duration: 4, delay: 1, radius: 0 },
  { icon: "fab fa-google", color: "text-green-300", size: "text-7xl", duration: 5, delay: 2, radius: 0 },
  { icon: "fab fa-docker", color: "text-blue-300", size: "text-8xl", duration: 4.5, delay: 1.5, radius: 0 },
  { icon: "fas fa-dharmachakra", color: "text-purple-300", size: "text-6xl", duration: 7, delay: 0.5, radius: 0 },
  { icon: "fab fa-python", color: "text-yellow-300", size: "text-7xl", duration: 5.5, delay: 2.5, radius: 0 },
];

export function OrbitalIcons() {
  return (
    <div className="absolute inset-0 w-64 h-64 mx-auto">
      {orbitalIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "linear",
            delay: icon.delay,
          }}
        >
          <motion.div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${icon.color} absolute bg-white/90 shadow-2xl border border-gray-200 backdrop-blur-sm`}
            style={{
              left: "50%",
              top: "50%",
              marginLeft: `${icon.radius}px`,
              marginTop: "-28px",
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              ease: "linear",
              delay: icon.delay,
            }}
            whileHover={{ scale: 1.3, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
          >
            <i className={`${icon.icon} ${icon.size}`}></i>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function BackgroundFloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        animate={{ y: [-30, 30, -30], rotate: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <i className="fab fa-aws text-orange-300 text-8xl"></i>
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 opacity-10"
        animate={{ y: [30, -30, 30], rotate: [0, -360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <i className="fab fa-microsoft text-blue-300 text-7xl"></i>
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 opacity-10"
        animate={{ y: [-25, 25, -25], rotate: [0, 180, 360] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <i className="fab fa-google text-green-300 text-7xl"></i>
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 opacity-10"
        animate={{ y: [25, -25, 25], rotate: [0, -180, -360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <i className="fab fa-docker text-blue-300 text-8xl"></i>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-5 opacity-10"
        animate={{ y: [-20, 20, -20], rotate: [0, 90, 180] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <i className="fas fa-dharmachakra text-purple-300 text-6xl"></i>
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-5 opacity-10"
        animate={{ y: [15, -15, 15], rotate: [0, -90, -180] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <i className="fab fa-python text-yellow-300 text-7xl"></i>
      </motion.div>
    </div>
  );
}