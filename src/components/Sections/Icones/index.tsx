import React from 'react'

import { motion, Variants } from 'framer-motion'
import { IoChevronDown } from 'react-icons/io5'
import { useInView } from 'react-intersection-observer'
import { animateScroll } from 'react-scroll'

import Money from '../../../../public/assets/icons/money.svg'
import Pin from '../../../../public/assets/icons/pin.svg'
import SaleTag from '../../../../public/assets/icons/sale-tag.svg'
import Cart from '../../../../public/assets/icons/shopping-cart.svg'
import { Button, Container, Header, Icons } from './styles'

const Icones = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    delay: 300
  })
  const variants: Variants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.75,
        ease: 'easeOut',
        duration: 0.3
      }
    }),
    hidden: { opacity: 0, y: -10 }
  }

  function handleScroll() {
    animateScroll.scrollMore(320)
  }

  return (
    <>
      <Container id="icones" ref={ref}>
        <Button type="button" onClick={handleScroll}>
          <IoChevronDown size={24} />
        </Button>
        <Header>
          <h2>Jeito rápido e prático de economizar</h2>
          <span>Descubra locais com cashback nas compras</span>
        </Header>
        <Icons>
          <motion.li
            custom={0}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
          >
            <div className="icon">
              <Pin />
            </div>
            <div className="texts">
              <h4>Descubra locais próximo</h4>
              <p>Utilize seu GPS para buscar cupons</p>
            </div>
          </motion.li>
          <motion.li
            custom={1}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
          >
            <div className="icon">
              <Cart />
            </div>
            <div className="texts">
              <h4>Lojas físicas e Online</h4>
              <p>Nos principais estabelecimentos</p>
            </div>
          </motion.li>
          <motion.li
            custom={2}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
          >
            <div className="icon">
              <Money />
            </div>
            <div className="texts">
              <h4>Cashback nas compras</h4>
              <p>Consiga dinheiro de volta ao comprar</p>
            </div>
          </motion.li>
          <motion.li
            custom={3}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
          >
            <div className="icon">
              <SaleTag />
            </div>
            <div className="texts">
              <h4>Economize muito mais</h4>
              <p>Descontos imperdíveis a cada loja</p>
            </div>
          </motion.li>
        </Icons>
      </Container>
    </>
  )
}

export { Icones }
