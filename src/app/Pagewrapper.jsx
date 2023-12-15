"use client"
import React from 'react'
import {motion,AnimatePresence} from "framer-motion"

const Pagewrapper = ({children}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.5}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
      
  )
}

export default Pagewrapper