import React from 'react'
import './WhatsappButtonStyles.css'
import whatsapp from '../../assets/whatsapp.png'

const WhatsappButton = () => {
    return (
        <div className="btn-whatsapp">
            <a href="aaaa" target="_blank">
                <img src={whatsapp} alt="" width="100"
                    height="100" />
            </a>
        </div>
    )
}

export default WhatsappButton