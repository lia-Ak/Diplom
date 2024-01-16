import s from './NotFoundPage.module.css'

function NotFoundPage(){
    return(
        <div className={s.error}>
            <img className={s.errorPic} src="./assets/error-404.jpg" alt="404" />
        </div>
        
    )
}
export default NotFoundPage