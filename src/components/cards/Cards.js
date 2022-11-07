import React from 'react'
import './CardsStyles.css'
import direitocivil from '../../assets/direitocivil.png'
import direitobancario from '../../assets/direitobancario.png'
import direitoempresarial from '../../assets/direitoempresarial.jpeg'
import processosadministrativos from '../../assets/processosadministrativos.jpg'
import direitotrabalhista from '../../assets/direitotrabalhista.jpg'

import direitocivillogo from '../../assets/direitocivil-logo.jpg'
import direitobancarilogo from '../../assets/direitobancario-logo.jpg'
import direitoempresariallogo from '../../assets/direitoempresarial-logo.jpeg'
import processosadm from '../../assets/processosadm-logo.jpg'
import direitotrabalhistalogo from '../../assets/direitotrabalhista-logo.jpg'

const Cards = () => {
  return (
    <>
      <div className='card'>
        <div className="container">
          <div className="content">
            <h2><span className='spanSpecial'>Áreas de Atuação</span> </h2>
            <div class="line-1"></div>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />

            <div class="first cardFirst">
              <img class="card-profile-img" src={direitocivil} alt="" />
              <div class="card-description-bk"></div>
              <div class="card-logo">
                <img src={direitocivillogo} alt="" />
              </div>
              <div class="card-description">
                <p>DIREITO CIVIL PREVENTIVO, CONSULTIVO E <p className='breakLine'>CONTENCIOSO</p></p>
              </div>
              <div class="card-btn">
                <a href="https://metajuris.herokuapp.com/">Saiba mais</a>
              </div>
            </div>

            <div class="second cardSecond">
              <img class="card-profile-img" src={direitotrabalhista} alt="" />
              <div class="card-description-bk"></div>
              <div class="card-logo">
                <img src={direitotrabalhistalogo} alt="" />
              </div>
              <div class="card-description">
                <p>DIREITO TRABALHISTA CONSULTIVO E CON-<p className='breakLine'>TENCIOSO</p></p>
              </div>
              <div class="card-btn">
                <a href="https://metajuris.herokuapp.com/">Saiba mais</a>
              </div>
            </div>

            <div class="third cardThird">
              <img class="card-profile-img" src={direitoempresarial} alt="" />
              <div class="card-description-bk"></div>
              <div class="card-logo">
                <img src={direitoempresariallogo} alt="" />
              </div>
              <div class="card-descriptionCard3">
                <p>DIREITO EMPRESARIAL CONSULTIVO</p>
              </div>
              <div class="card-btn">
                <a href="https://metajuris.herokuapp.com/">Saiba mais</a>
              </div>
            </div>

            <div class="fourth cardFourth">
              <img class="card-profile-img" src={direitobancario} alt="" />
              <div class="card-description-bk"></div>
              <div class="card-logo">
                <img src={direitobancarilogo} alt="" />
              </div>
              <div class="card-descriptionCard4">
                <p>DIREITO BANCÁRIO</p>
              </div>
              <div class="card-btn">
                <a href="https://metajuris.herokuapp.com/">Saiba mais</a>
              </div>
            </div>

            <div class="fifth cardFifth">
              <img class="card-profile-img" src={processosadministrativos} alt="" />
              <div class="card-description-bk"></div>
              <div class="card-logo">
                <img src={processosadm} alt="" />
              </div>
              <div class="card-descriptionCard5">
                <p>ACOMPANHAMENTO E ATUAÇÃO EM<p className='breakLineCard5'>PROCESSOS ADMINISTRATIVOS</p></p>
              </div>
              <div class="card-btn">
                <a href="https://metajuris.herokuapp.com/">Saiba mais</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Cards