
import './contactLogos.css'

export function ContactLogos() {
    return (
        <div>
            <div className="contactLogos">
                <a href="https://wa.me/9720542503225" target="_blank" rel="noreferrer">
                    <img src={'/imgs/logos/whatsapp.svg'} width={60} height={60} alt={'whatsApp'} />
                </a>
                <a href="/files/cvEdenHazani.pdf" target="_blank">
                    <img src={'/imgs/logos/cvPage.svg'} width={60} height={60} alt={'cvPage'} />
                </a>
                <a href="https://www.linkedin.com/in/eden-hazani-963082163/" target="_blank" rel="noreferrer">
                    <img src={'/imgs/logos/linkedIn.svg'} width={60} height={60} alt={'linkedIn'} />
                </a>
            </div>
        </div>
    )
}