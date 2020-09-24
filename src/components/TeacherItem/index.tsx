import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1184061918824292354/zYNBkOrm_400x400.png" alt="Wagner Rigoli da Rosa" />
                <div>
                    <strong>Wagner Rigoli da Rosa</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhroes tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong> R$ 62,50</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem