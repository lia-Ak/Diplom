
function Map(){
    return(
        <div className="map">
            <iframe width="100%" height="525px" frameBorder={0} scrolling="no" marginWidth={0} marginHeight={0} src="https://maps.google.com/maps?width=100%25&amp;height=525px&amp;hl=en&amp;q=+(Tel-Ran.de)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.maps.ie/population/">Calculate population in area</a>
            </iframe>
        </div>
    )
}
export default Map