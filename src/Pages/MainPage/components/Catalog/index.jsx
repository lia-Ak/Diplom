import CategoryList from '../../../../components/CategoryList'
import s from './Catalog.module.css'
import { Link } from 'react-router-dom'

function Catalog(){
    return(
        <div className={s.catalog}>
            <div className={s.catalogInfo}>
                <h2 className={s.catalogH2}>Catalog</h2>
                <Link to={'/categories'}><button className={s.allCategBtn}>All categories</button></Link>
            </div>
            <CategoryList/>
        </div>
    )
}
export default Catalog