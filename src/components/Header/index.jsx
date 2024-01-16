import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.css'
import SaleBanner from './SalesBanner'
import { useSelector } from 'react-redux'
import { selectCartItemCount } from '../../store/cartReducer'
import { useState } from 'react'
import {ReactComponent as CartIcon} from '../../assets/cartIcon.svg'
import {ReactComponent as Logo} from '../../assets/logo.svg'

function Header(){
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const cartItemCount = useSelector(selectCartItemCount)
    return(
        <nav>
            <div className={s.navContainer}>
                <div className={s.logoDiv}>
                    <Link to={'/'}><Logo/></Link>
                    <Link to={'/categories'}><button className={s.catalogBtn}>Catalog</button></Link>
                    
                </div>
            
                <div className={s.navbar_right}>
                <ul className={s.navbar_links}>
                    <Link to={'/'} onClick={() => setActiveLink('/')}>
                        <li className={location.pathname === '/' ? s.activeLink : ''}>Main Page</li>
                    </Link>
                    <Link to={'/allProducts'} onClick={() => setActiveLink('/allProducts')}>
                        <li className={location.pathname === '/allProducts' ? s.activeLink : ''}>All products</li>
                    </Link>
                    <Link to={'/allSales'} onClick={() => setActiveLink('/allSales')}>
                        <li className={location.pathname === '/allSales' ? s.activeLink : ''}>All sales</li>
                    </Link>
                </ul>

                    
                    <div className={s.navbar_mobile} onClick={toggleNavbar}>
                        <div className={s.navbar_togle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                        <ul className={`${s.navbar} ${navbarOpen ? s.open : ''}` }>
                            <Link to={'/'}><li>Main Page</li></Link>
                            <Link to={'/allProducts'}><li>All products</li></Link>
                            <Link to={'/allSales'}><li>All sales</li></Link>
                        </ul>
                    </div>
                    
                    <Link to={'/cart'}>
                        <div className={s.cartBtn}>
                            <CartIcon/>
                            <span className={s.cartProductCount}>{cartItemCount}</span>
                        </div>
                    </Link>
                </div>
            </div>
            {isHomePage && <SaleBanner/>}
        </nav>
    )
}
export default Header