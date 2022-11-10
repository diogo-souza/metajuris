import React from 'react'
import emailIcon from '../../assets/email.png'
import facebookIcon from '../../assets/facebook.png'
import whatsappIcon from '../../assets/whatsappBlue.png'
import instagramIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <h2>Metajuris</h2>
                    </div>
                </div>
                <form>
                    <h3>Encontre nossos especialistas</h3>
                    <input type="email" placeholder='Digite seu email' />

                    <a href="mailto:digsuk360@gmail.com">
                        <img src={emailIcon} alt="database" className='mail-icon' />
                    </a>

                    <div className="social-group">
                        <a href="https://www.instagram.com/metajuris_/" target="_blank" rel="noreferrer">
                            <img src={facebookIcon} alt="database" className='social-icon' />
                        </a>

                        <a href="https://www.instagram.com/metajuris_/" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="database" className='social-icon' />
                        </a>

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