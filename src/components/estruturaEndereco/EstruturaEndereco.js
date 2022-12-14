import React from "react";
import "./EstruturaEndereco.css";
import WhatsappButton from "../whatsappButton/whatsappButton";
import { Link } from "react-router-dom";

const Recovery = () => {
  return (
    <div className="recovery">
      <div className="containerRecovery">
        <div className="contentRecovery">
          <h2 className="h2Recovery">
            <span>Estrutura e</span> Endereço
          </h2>
          <p>
            Contamos com uma estrutura confortável e aconchegante no coração do
            Poço da Panela, na Rua do Chacon, nº 274, Salas 416/417.
            <br />
            <br />
            Onde dispusemos de 03 (três) salas para atendimento e uma Sala de
            Reunião. O escritório detém ainda servidores de última geração com
            sistema de backup diário que protege todas as informações do
            escritório, sistema de Digitalização e arquivamento de processos em
            alta velocidade e sistemas integrados de Automação Jurídica e
            Acompanhamento Processual, favorecendo controles de prazos e
            andamentos dos processos.
          </p>
          <div>
            <Link to="/">
              <button>Saiba mais</button>
            </Link>
          </div>
        </div>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default Recovery;
