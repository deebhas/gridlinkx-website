import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center">
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Base hexagonal shape */}
        <motion.path
          d="M20 5L35 13V27L20 35L5 27V13L20 5Z"
          stroke="url(#hexGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Inner grid structure */}
        <motion.path
          d="M20 5V20M35 13L20 20M5 13L20 20"
          stroke="url(#gridGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Computing nodes */}
        <motion.circle cx="20" cy="5" r="2.5" fill="url(#nodeGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} />
        <motion.circle cx="35" cy="13" r="2.5" fill="url(#nodeGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }} />
        <motion.circle cx="35" cy="27" r="2.5" fill="url(#nodeGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
        <motion.circle cx="20" cy="35" r="2.5" fill="url(#nodeGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} />
        <motion.circle cx="5" cy="27" r="2.5" fill="url(#nodeGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
        <motion.circle cx="5" cy="13" r="2.5" fill="url(#nodeGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />

        {/* Central node */}
        <motion.circle cx="20" cy="20" r="3" fill="url(#centerGradient)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />

        {/* Gradients */}
        <defs>
          <linearGradient id="hexGradient" x1="5" y1="5" x2="35" y2="35">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="gridGradient" x1="5" y1="5" x2="35" y2="35">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <radialGradient id="nodeGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </radialGradient>
          <radialGradient id="centerGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0284c7" />
          </radialGradient>
        </defs>
      </motion.svg>
      <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
        GridLinkX
      </span>
    </div>
  );
}