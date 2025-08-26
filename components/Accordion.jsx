import { motion, AnimatePresence } from "framer-motion"

export default function Accordion({ i, expanded, setExpanded, title, body }) {
  const isOpen = i === expanded

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#EEEEEE" : "#AD242A", color: isOpen ? "#3e3e3e" : "#ad242a" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="cursor-pointer py-4 lg:py-5 px-7 lg:px-8 rounded-xl text-sm sm:text-[15px] md:text-base"
      >
        <motion.h2 className="flex justify-between items-center">
          <div className={`${isOpen ? "text-brand-red" : "text-brand-white"} font-bold`}>{title}</div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 34"
              width="20"
              height="34"
              fill="none"
              className={`${isOpen ? "rotate-90" : ""} ml-4 w-2 object-contain`}
            >
              <path
                stroke={isOpen ? "#3e3e3e" : "#eee"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="m3 3 14 14L3 31"
              ></path>
            </svg>
          </div>
        </motion.h2>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                collapsed: { height: 0 },
                open: { height: "auto" },
              }}
              transition={{ duration: 0.5, type: "spring", ease: "linear" }}
              className="overflow-hidden pr-[42px] sm:pr-11 lg:pr-12"
            >
              <motion.div variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }} transition={{ duration: 0.5 }}>
                <p className="mt-4 md:mt-[15px] text-[#626262] overflow-hidden">{body}</p>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
