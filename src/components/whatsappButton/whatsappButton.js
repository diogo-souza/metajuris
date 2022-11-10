import React from 'react'
import './whatsappButtonStyles.css'
import whatsappimg from '../../assets/whatsapp.png'

const whatsappButton = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=5581994084785&text=" class="btn-whatsapp-pulse" target="_blank" rel="noreferrer">
            <img width="80" height="80" src={whatsappimg} alt="Whatsapp"></img>
        </a>
    )
}

export default whatsappButton