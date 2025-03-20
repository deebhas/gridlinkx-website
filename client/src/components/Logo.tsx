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
        {/* 3D Cube Framework */}
        <motion.path
          d="M22 4L40 14V30L22 40L4 30V14L22 4Z"
          stroke="url(#cubeGradient)"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Inner Network Structure */}
        <motion.path
          d="M22 4V22M40 14L22 22M4 14L22 22"
          stroke="url(#networkGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Data Flow Lines */}
        <motion.path
          d="M22 22C26 22 30 20 32 18M22 22C18 22 14 20 12 18M22 22C22 26 20 30 18 32M22 22C22 18 20 14 18 12"
          stroke="url(#flowGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        />

        {/* Resource Nodes */}
        <motion.circle cx="22" cy="4" r="2.5" fill="url(#nodeGradient1)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
        <motion.circle cx="40" cy="14" r="2.5" fill="url(#nodeGradient2)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} />
        <motion.circle cx="40" cy="30" r="2.5" fill="url(#nodeGradient3)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
        <motion.circle cx="22" cy="40" r="2.5" fill="url(#nodeGradient1)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
        <motion.circle cx="4" cy="30" r="2.5" fill="url(#nodeGradient2)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
        <motion.circle cx="4" cy="14" r="2.5" fill="url(#nodeGradient3)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} />

        {/* Central Computing Hub */}
        <motion.circle 
          cx="22" 
          cy="22" 
          r="4" 
          fill="url(#centerGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8 }}
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="cubeGradient" x1="4" y1="4" x2="40" y2="40">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient id="networkGradient" x1="4" y1="4" x2="40" y2="40">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>

          <linearGradient id="flowGradient" x1="12" y1="12" x2="32" y2="32">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <radialGradient id="nodeGradient1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>

          <radialGradient id="nodeGradient2" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </radialGradient>

          <radialGradient id="nodeGradient3" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#06b6d4" />
          </radialGradient>

          <radialGradient id="centerGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </radialGradient>
        </defs>
      </motion.svg>
      <span className="ml-3 text-xl font-bold text-gradient">
        GridLinkX
      </span>
    </div>
  );
}