import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import {
  IoLogoFacebook,
  IoMenu,
  IoClose,
  IoLogoInstagram
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
            src="/assets/images/logo-secretaria.svg"
            alt="Logo Secretaria da Cultura de Várzea Alegre"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </a>
      </Link>
      <button type="button" onClick={handleButton}>
        {viewMenu ? <IoClose size={36} /> : <IoMenu size={36} />}
      </button>
      <div className={viewMenu ? 'collapse show' : 'collapse'}>
        <nav>
          <ul className="menu_links">
            <li>
              <Link href="/como">
                <a>Como Funciona?</a>
              </Link>
            </li>
            <li>
              <Link href="/parceiros">
                <a>Parceiros</a>
              </Link>
            </li>
            <li>
              <Link href="/politica/">
                <a>Política de Privacidade</a>
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
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export { MenuTop }
