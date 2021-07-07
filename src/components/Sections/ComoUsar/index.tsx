import React from 'react'

import Device from '../../../../public/assets/icons/device.svg'
import Discon from '../../../../public/assets/icons/discon.svg'
import Fire from '../../../../public/assets/icons/fire.svg'
import Heart from '../../../../public/assets/icons/heart.svg'
import Money from '../../../../public/assets/icons/money2.svg'
import QrCode from '../../../../public/assets/icons/qr-code.svg'
import { Container, Content, Header, Grid } from './styles'

const ComoUsar = () => {
  return (
    <Container id="como-usar">
      <Content>
        <Header>
          <h2>Como usar o Desconto Mania</h2>
        </Header>
        <Grid>
          <li>
            <div className="icon">
              <Device />
            </div>
            <div className="texts">
              <h4>Baixe o Aplicativo</h4>
              <p>Baixe gratuitamente o nosso app na App Store e Google Play.</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <Money />
            </div>
            <div className="texts">
              <h4>Cashback Exclusivos</h4>
              <p>Receba dinheiro de volta durante o pagamento.</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <QrCode />
            </div>
            <div className="texts">
              <h4>Lojas Físicas e Online</h4>
              <p>Valide os cupons pelos QR Codes e apresente ao atendente.</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <Heart />
            </div>
            <div className="texts">
              <h4>Favorite Marcas</h4>
              <p>Favorite sua marca preferida e receba as notificações</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <Discon />
            </div>
            <div className="texts">
              <h4>Extrato de Economias</h4>
              <p>Veja todos os descontos que já ganhou no app.</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <Fire />
            </div>
            <div className="texts">
              <h4>Descontos Imperdíveis</h4>
              <p>Saiba quais são os descontos mais quentes no momento.</p>
            </div>
          </li>
        </Grid>
      </Content>
    </Container>
  )
}

export { ComoUsar }
