import s from './MainPage.module.css'
import Catalog from './components/Catalog'
import DiscountBanner from './components/DicountBanner'
import HomePageSale from './components/HomePageSale'


function MainPage(){
    return(
        <div className={s.mainPage}>
            <Catalog/>
            <DiscountBanner/>
            <HomePageSale/>
        </div>
    )
}
export default MainPage