import Map from '../Map'
import s from './Footer.module.css'
import {ReactComponent as WhatsAppIcon} from '../../assets/whatsApp.svg'
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg'
function Footer(){
    return(
        <div className={s.footer}>
            <div className={s.infoArea}>
                <div className={s.contact}>
                    <h2>Contact</h2>
                    <h3><a href="tel:+491717788661">+49 171 778 86 61</a></h3>
                    <div className={s.socNetIcons}>
                        <div className={s.insta}>
                            <a href="https://www.instagram.com/startainstitute/"><InstagramIcon/></a>
                            <label>Instagram</label>
                        </div>
                        <div className={s.whatsapp}>
                            <a href="https://www.whatsapp.com/"><WhatsAppIcon/></a>
                            <label>WhatsApp</label>
                        </div>
                    </div>
                </div>
                <div className={s.address}>
                    <h3>Address</h3>
                    <a href="https://tel-ran.de/">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                    <label>Working Hours:</label>
                    <h5>24 hours a day</h5>
                </div>
            </div>
            <Map/>
        </div>
    )
}
export default Footer