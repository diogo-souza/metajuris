import React from 'react';
import './HeroStyles.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="content">
          <h2><span className='spanGold'>NOSSA</span>  HISTÓRIA</h2>
          <p>O MetaJuris é um Coletivo de advogados
            empenhados em entregar soluções inovadoras e
            práticas à realidade de seus clientes. Com
            profissionais com mais de 25 (vinte e cinco) anos de
            experiência nas ciências jurídicas, o escritório
            atende a públicos variados entregando soluções
            jurídicas de caráter preventivo e estratégias de
            atuação no Contencioso.</p>
          <div>
            <button className='btnGold'>Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero