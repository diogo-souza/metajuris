import React from 'react'
import './ContactStyles.css'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Contact = () => {

    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Digite seu nome' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Digite seu email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Como podemos te ajudar?' />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                <FloatingWhatsApp
                    phoneNumber="905366030997"
                    accountName="Metajuris"
                    statusMessage="Online"
                    chatMessage="Conte-nos como podemos te ajudar?"
                    placeholder="Digite aqui..."
                    styles={
                        {
                            color: "#dfac1c",
                            backgroundcolor: "#dfac1c",
                        }
                    }
                    buttonStyle={
                        {
                            color: "#dfac1c",
                        }
                    }
                    chatboxStyle={
                        {
                            color: "#dfac1c",
                        }
                    }
                />
            </div>
        </div>
    )
}

export default Contact