import ProductList from '../../../../components/ProductList'
import s from './HomePageSale.module.css'

function HomePageSale(){
    return(
        <div className={s.homePageSale} id={'sale'}>
            <h2 className={s.homePageSaleH2}>Sale</h2>
            <ProductList/>
        </div>
    )
}
export default HomePageSale