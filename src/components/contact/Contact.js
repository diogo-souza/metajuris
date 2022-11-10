import React, { useRef } from 'react'
import './ContactStyles.css'
import emailjs from '@emailjs/browser';
import WhatsappButton from "../whatsappButton/whatsappButton";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_rt9l2jb",
                "template_62jf44c",
                form.current,
                "ySfyoPtcLFVlO1jGF"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    //
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <h1><span>Fale</span> Conosco</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Digite seu nome' name="user_name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Digite seu email' name="user_email" />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Como podemos te ajudar?' name="message" />
                        </div>
                        <button type="submit" value="Send">Enviar</button>
                    </form>
                </div>
                <WhatsappButton />
            </div>
        </div>
    )
}

export default Contact