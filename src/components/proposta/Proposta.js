import React from 'react'
import './PropostaStyles.css'
import WhatsappButton from "../whatsappButton/whatsappButton";
import { Link } from 'react-router-dom';

const Cloud = () => {
    return (
        <div className='proposta'>
            <div className="containerPropostaTela">
                <div className="contentPropostaTela">
                <h2><span>PROPOSTA</span> </h2>
                    <p>Nossa missão é ofertar aos clientes um atendimento
                        ágil, com respostas imediatas às necessidades que
                        surjam no dia-a-dia Empresarial ou de Pessoas
                        Físicas.
                        <br /><br />
                        Trabalhamos com transparência junto ao cliente,
                        informando de todos os passos do processo, com
                        objetivo do cliente ter um breve resumo do que
                        ocorre ou o que vai ser proposto e obrigatoriamente
                        a assinatura de contrato de prestação de serviço,
                        como estabelecido pela Estatuto da OAB.
                        <br /><br />
                        O nosso compromisso é entregar a solução jurídica
                        apropriada à necessidade de cada cliente, atento
                        sempre às peculiaridades dos casos.
                        <br /><br />
                        <strong>Entre em contato através dos nossos canais de
                            comunicação e solicite uma proposta amoldada a
                            sua necessidade.</strong>
                    </p>
                    <div>
                        <Link to="/contact">
                            <button>Fale Conosco</button>
                        </Link>
                    </div>
                </div>
            </div>
            <WhatsappButton />
        </div>
    )
}

export default Cloud