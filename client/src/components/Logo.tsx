import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center">
      <motion.svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Globe Base Circle */}
        <motion.circle
          cx="22"
          cy="22"
          r="20"
          stroke="url(#globeGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Latitude Lines */}
        <motion.path
          d="M2 22h40 M6 12h32 M6 32h32"
          stroke="url(#latitudeGradient)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Longitude Curves */}
        <motion.path
          d="M22 2C28 8 28 36 22 42M12 4C18 12 18 32 12 40M32 4C26 12 26 32 32 40"
          stroke="url(#longitudeGradient)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Network Nodes */}
        <motion.circle cx="12" cy="12" r="2" fill="url(#nodeGradient1)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} />
        <motion.circle cx="32" cy="12" r="2" fill="url(#nodeGradient2)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
        <motion.circle cx="22" cy="22" r="3" fill="url(#centerGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
        <motion.circle cx="12" cy="32" r="2" fill="url(#nodeGradient3)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
        <motion.circle cx="32" cy="32" r="2" fill="url(#nodeGradient1)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} />

        {/* Network Connections */}
        <motion.path
          d="M12 12L22 22M32 12L22 22M12 32L22 22M32 32L22 22"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="globeGradient" x1="2" y1="2" x2="42" y2="42">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>

          <linearGradient id="latitudeGradient" x1="0" y1="22" x2="44" y2="22">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="longitudeGradient" x1="22" y1="2" x2="22" y2="42">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="connectionGradient" x1="12" y1="12" x2="32" y2="32">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>

          <radialGradient id="nodeGradient1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </radialGradient>

          <radialGradient id="nodeGradient2">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </radialGradient>

          <radialGradient id="nodeGradient3">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </radialGradient>

          <radialGradient id="centerGradient">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </radialGradient>
        </defs>
      </motion.svg>
      <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-teal-500 to-blue-500">
        GridLinkX
      </span>
    </div>
  );
}