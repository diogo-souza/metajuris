import React from 'react'
import './CardsStyles.css'
import direitocivil from '../../assets/direitocivil.png'
import direitobancario from '../../assets/direitobancario.png'
import direitoempresarial from '../../assets/direitoempresarial.png'
import processosadministrativos from '../../assets/processosadministrativos.png'
import direitotrabalhista from '../../assets/direitotrabalhista.png'

const Cards = () => {

  return (
    <>
      <div className='cards'>

        <div class="containerText">
          <h1 className='h1Dif'>ÁREAS DE ATUAÇÃO</h1>
        </div>

        <div class="containerCards">

          <div class="card">
            <h3 class="title">Direito Civil</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <img className='imgDif' src={direitocivil} alt="Direito Civil"></img>
          </div>

          <div class="card">
            <h3 class="title">Direito Bancário</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <img className='imgDif' src={direitobancario} alt="Direito Bancário"></img>
          </div>

          <div class="card">
            <h3 class="title">Direito Trabalhista</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <img className='imgDif' src={direitotrabalhista} alt="Direito Trabalhista"></img>
          </div>

          <div class="card">
            <h3 class="title">Direito Empresarial</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <img className='imgDif' src={direitoempresarial} alt="Direito Empresarial"></img>
          </div>

          <div class="card">
            <h3 class="title">Processos Administrativos</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <img className='imgDif' src={processosadministrativos} alt="Processos ADM"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
