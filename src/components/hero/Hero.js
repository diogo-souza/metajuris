import React from "react";
import "./HeroStyles.css";
import WhatsappButton from "../whatsappButton/whatsappButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="contentHero">
          <h2 className="h2Hero">
            <span className="spanGold">NOSSA</span> HISTÓRIA
          </h2>
          <p>
            O MetaJuris é um Coletivo de advogados empenhados em entregar
            soluções inovadoras e práticas à realidade de seus clientes. Com
            profissionais com mais de 25 (vinte e cinco) anos de experiência nas
            ciências jurídicas, o escritório atende a públicos variados
            entregando soluções jurídicas de caráter preventivo e estratégias de
            atuação no Contencioso.
          </p>
          <div>
            <a
              href="https://www.instagram.com/metajuris_/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btnGold">Saiba mais</button>
            </a>
          </div>
        </div>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default Hero;
