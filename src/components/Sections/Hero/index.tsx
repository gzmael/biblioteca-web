/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Script from 'next/script'

import { Container, Content } from './styles'

const Hero = () => (
  <Container id="hero">
    <Content>
      <div className="texts">
        <h1>Cupons de Descontos para todas as manias!</h1>
        <div className="buttons">
          <a href="https://google.com">
            <Image
              src="/assets/images/google-play.png"
              alt="Google Play Button"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </a>
          <a href="https://apple.com">
            <Image
              src="/assets/images/apple-store.png"
              alt="Apple Store Button"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </a>
        </div>
      </div>
      <div className="device">
        <motion.span
          className="cart"
          animate={{ right: [-34, -30, -34], y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img src="/assets/icons/cart.svg" alt="Shop Cart" />
        </motion.span>
        <img src="/assets/images/device.png" alt="Phone Device" />
        <motion.span
          className="tag"
          animate={{
            left: [-34, -30, -34],
            y: [-8, 5, -8],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <img src="/assets/icons/tag.svg" alt="Price Tag" />
        </motion.span>
        <motion.span
          className="piggy"
          animate={{ left: [0, 10, 0], y: [-5, 0, -5] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <img src="/assets/icons/piggy.svg" alt="Piggy Bank" />
        </motion.span>
        <motion.span
          className="burguer"
          initial={{ scale: 1.2 }}
          animate={{ right: [-34, -30, -34], y: [-5, 0, -5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img src="/assets/icons/burguer.svg" alt="Burguer" />
        </motion.span>
      </div>
    </Content>
    <canvas className="orb_canvas" />
    <Script type="module" src="./js/orbs.js" />
  </Container>
)

export { Hero }
