import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center">
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Grid pattern background */}
        <motion.path
          d="M6 6H26V26H6V6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Connected nodes */}
        <motion.circle cx="11" cy="11" r="2" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
        <motion.circle cx="21" cy="11" r="2" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />
        <motion.circle cx="16" cy="16" r="2" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
        <motion.circle cx="11" cy="21" r="2" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
        <motion.circle cx="21" cy="21" r="2" fill="currentColor" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} />

        {/* Connection lines */}
        <motion.path
          d="M11 11L16 16M21 11L16 16M11 21L16 16M21 21L16 16"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.svg>
      <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
        GridLinkX
      </span>
    </div>
  );
}