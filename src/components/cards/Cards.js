import React from 'react'
import './CardsStyles.css'
import direitocivil from '../../assets/direitocivil.png'
import direitobancario from '../../assets/direitobancario.png'
import direitoempresarial from '../../assets/direitoempresarial.jpeg'
import processosadministrativos from '../../assets/processosadministrativos.jpg'
import direitotrabalhista from '../../assets/direitotrabalhista.jpg'

const Cards = () => {
  return (
    <>
      <div className='cards'>
        <div className="container">
          <h2 className='titleText'>ÁREAS DE ATUAÇÃO</h2>

          <div className='containerThreeCards'>
            <div className='card'>
              <img className='imgDif' src={direitocivil} alt="Direito Civil"></img>
              <div className='intro'>
                <h1 className='h1Dif'>Direito Civil</h1>
                <p className='pDif'>Ramo do <span className='spanDif'>direito</span>  que tem como objetivo determinar as regras e condutas que pessoas físicas e jurídicas devem ter em sociedade.</p>
              </div>
            </div>

            <div className='card'>
              <img className='imgDif' src={direitobancario} alt="Direito Civil"></img>
              <div className='intro'>
                <h1 className='h1DifCard2'>Direito Bancário</h1>
                <p className='pDif'>Ramo do <span className='spanDif'>direito</span>  que tem por objetivo determinar, regularizar e supervisionar as regras e normas para instituições bancárias e financeiras.</p>
              </div>
            </div>


            <div className='card'>
              <img className='imgDif' src={direitoempresarial} alt="Direito Civil"></img>
              <div className='intro'>
                <h1 className='h1DifCard3'>Direito Empresarial</h1>
                <p className='pDif'>Ramo do <span className='spanDif'>direito</span>  que tem como objetivo cuidar o exercício da atividade econômica organizada de fornecimento de bens ou serviços, a chamada empresa.</p>
              </div>
            </div>
          </div>

          <div className='containerLastCards'>
            <div className='card'>
              <img className='imgDif' src={direitotrabalhista} alt="Direito Civil"></img>
              <div className='introLastCards'>
                <h1 className='h1DifCard3'>Direito Trabalhista</h1>
                <p className='pDif'>Ramo do <span className='spanDif'>direito</span>  que é responsável por regular a relação jurídica entre trabalhadores e empregadores, baseado nos princípios e leis trabalhistas.</p>
              </div>
            </div>

            <div className='card'>
              <img className='imgDif' src={processosadministrativos} alt="Direito Civil"></img>
              <div className='introLastCards'>
                <h1 className='h1DifCard5'>Processos Administrativos</h1>
                <p className='pDif'><span className='spanDif'>Processo administrativo</span>  são atividades da Administração, interligadas entre si, que visa a alcançar determinado efeito final previsto em lei trata-se do modo como a Administração Pública toma suas decisões, seja por iniciativa de um particular, seja por iniciativa própria.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cards