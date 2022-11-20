import React from 'react'
import emailIcon from '../../assets/email.png'
import whatsappIcon from '../../assets/whatsappBlue.png'
import instagramIcon from '../../assets/instagram.png'
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="containerFooter">
                <div className="top">
                    <div className="logo-footer">
                        <h2 className='h2Footer'>Metajuris</h2>
                    </div>
                </div>
                <form>
                    <h3 className='h3Footer'>Encontre nossos especialistas</h3>
                    <input type="email" placeholder='Digite seu email' />

                    <a className='aFooter' href="mailto:digsuk360@gmail.com">
                        <img src={emailIcon} alt="database" className='mail-icon' />
                    </a>

                    <div className="socialGroup">

                        <a href="https://api.whatsapp.com/send?phone=5581994084785&text=" target="_blank" rel="noreferrer">
                            <img src={whatsappIcon} alt="database" className='social-icon' />
                        </a>

                        <a href="https://www.instagram.com/metajuris_/" target="_blank" rel="noreferrer">
                            <img src={instagramIcon} alt="database" className='social-icon' />
                        </a>
                    </div>
                </form >
            </div >
            <div className='endereco'>
                <p>Rua do Chacon, nº 274, Salas 416/417, Empresarial Casa Forte Corporate, Poço da Panela, Recife/PE</p>
            </div>
        </div >
    )
}

export default Footer