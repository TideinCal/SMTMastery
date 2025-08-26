import { motion } from "framer-motion"

export default function EnterLeft({ children, duration = 0.5, className }) {
  return (
    <motion.div
      initial={{ x: -200, rotate: -10, opacity: 0 }}
      whileInView={{ x: 0, rotate: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, type: "spring", ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
