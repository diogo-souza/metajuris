import React, { useRef } from "react";
import "./ContactStyles.css";
import emailjs from "@emailjs/browser";
import WhatsappButton from "../whatsappButton/whatsappButton";

const Contact = () => {
  const form = useRef();
  let recover = "";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "xxxx",
        "xxxx",
        form.current,
        "xxxx"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          recover = result.text;
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //
  return (
    <div className="contact">
      <div className="containerContact">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <h1 className="h1Contact">
              <span>Fale</span> Conosco
            </h1>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                name="user_name"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                name="user_email"
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                rows="10"
                placeholder="Como podemos te ajudar?"
                name="message"
              />
            </div>
            <button type="submit" value="Send">
              Enviar
            </button>
            {recover === "OK"
              ? console.log("Email enviado")
              : console.log("Email NAO enviado")}
          </form>
        </div>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default Contact;
