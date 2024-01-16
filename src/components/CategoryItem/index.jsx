
import s from './CategoryItem.module.css'

function CategoryItem({elem}){
    const baseURL = "http://localhost:3333";
    const imageURL = baseURL + elem.image;
    const divStyle = {
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return(
        <div className={s.categoryItem}>
            <div className={s.categoryItemImg} alt={elem.title} style={divStyle}></div>
            <p className={s.categoryItemTitle}>{elem.title}</p>
        </div>
    )
}
export default CategoryItem