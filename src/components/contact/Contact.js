import React from 'react'
import WhatsappButton from '../whatsappButton/WhatsappButton'
import './ContactStyles.css'

const Contact = () => {

    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Fale</span> Conosco</h1>
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
                    <WhatsappButton />
                </div>
            </div>
        </div>
    )
}

export default Contact