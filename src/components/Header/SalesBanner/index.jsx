import s from './SaleBannner.module.css'

function SaleBanner(){
        const handleClick = () => {
          const saleElement = document.getElementById('sale');
          saleElement.scrollIntoView({ behavior: 'smooth' });
        };

    return(
        <div className={s.saleBanner}>
            <div className={s.salesInfo}>
                <h2>Sale</h2>
                <h3>New season</h3>
                <button className={s.saleBtn} onClick={handleClick}>Sale</button>
            </div>
            <div>
                <img className={s.saleBannerImg} src="./assets/bannerImg.png" alt="bannerImg" />
            </div>
        </div>
    )
}
export default SaleBanner