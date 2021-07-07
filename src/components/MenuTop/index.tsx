import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp
} from 'react-icons/io5'

import { Container } from './styles'

const MenuTop = () => {
  const [viewMenu, setViewMenu] = useState(false)

  const handleButton = () => {
    setViewMenu(prev => !prev)
  }
  return (
    <Container>
      <Link href="/">
        <a className="logo">
          <Image
            src="/assets/logo-h.svg"
            alt="Logo Desconto Mania"
            layout="fill"
          />
        </a>
      </Link>
      <button type="button" onClick={handleButton}>
        {viewMenu ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <div className={viewMenu ? 'collapse show' : 'collapse'}>
        <nav>
          <ul className="menu_links">
            <li>
              <Link href="/termos">
                <a>Como Funciona?</a>
              </Link>
            </li>
            <li>
              <Link href="/politica/">
                <a>Parceiros</a>
              </Link>
            </li>
            <li>
              <Link href="/politica/">
                <a>Fale Conosco</a>
              </Link>
            </li>
          </ul>
          <ul className="social_links">
            <li>
              <a href="https://facebook.com">
                <IoLogoFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <IoLogoInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <IoLogoWhatsapp size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export { MenuTop }
