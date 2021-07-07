import React from 'react'

import Money from '../../../../public/assets/icons/money.svg'
import Pin from '../../../../public/assets/icons/pin.svg'
import SaleTag from '../../../../public/assets/icons/sale-tag.svg'
import Cart from '../../../../public/assets/icons/shopping-cart.svg'
import { Container, Header, Icons } from './styles'

const Icones = () => {
  return (
    <Container id="icones">
      <Header>
        <h2>Jeito rápido e prático de economizar</h2>
        <span>Descubra locais com cashback nas compras</span>
      </Header>
      <Icons>
        <li>
          <div className="icon">
            <Pin />
          </div>
          <div className="texts">
            <h4>Descubra locais próximo</h4>
            <p>Utilize seu GPS para buscar cupons</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <Cart />
          </div>
          <div className="texts">
            <h4>Lojas físicas e Online</h4>
            <p>Nos principais estabelecimentos</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <Money />
          </div>
          <div className="texts">
            <h4>Cashback nas compras</h4>
            <p>Consiga dinheiro de volta ao comprar</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <SaleTag />
          </div>
          <div className="texts">
            <h4>Economize muito mais</h4>
            <p>Descontos imperdíveis a cada loja</p>
          </div>
        </li>
      </Icons>
    </Container>
  )
}

export { Icones }
