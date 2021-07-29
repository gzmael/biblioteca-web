import React, { useEffect, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronUp } from 'react-icons/fi'
import { animateScroll } from 'react-scroll'
import tw from 'twin.macro'

import { ButtonScroll } from './styles'

const ToTop: React.FC = () => {
  const [lastY, setLastY] = useState(0)
  const [isView, setIsView] = useState(false)
  const variants = {
    show: {
      opacity: [0, 0.25, 0.5, 1],
      bottom: [0, 25, 27, 25]
    },
    hidden: {
      opacity: [1, 5, 0.25, 0],
      bottom: [25, 27, 25, 0]
    }
  }

  useEffect(() => {
    function updateScroll() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const posY = (winScroll / height) * 100
      setLastY(posY)
      setIsView(posY >= 10 && posY <= 99)
    }
    window.addEventListener('scroll', updateScroll, false)
    return () => {
      window.removeEventListener('scroll', updateScroll, false)
    }
  }, [lastY])
  return (
    <AnimatePresence>
      {isView && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          css={[tw`fixed right-4 z-20`]}
        >
          <ButtonScroll
            type="button"
            onClick={() =>
              animateScroll.scrollToTop({
                duration: 500
              })
            }
          >
            <FiChevronUp size={24} />
          </ButtonScroll>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { ToTop }
