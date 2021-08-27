import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.footercontainer}>
            <div className={classes.mapcontact}>
                <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Amakom%20Traffic%20Light&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
                <br />
                <div className={classes.locationcontact}>
                    <h4 className={classes.amakom}>Location : Amakom near the traffic light</h4>
                    <h4 className={classes.amakom}>Call us on 03220005922 / 0243639994</h4>
                </div>
            </div>
            <div className={classes.cright}>
                &copy;2021 Copyright:CSBT.com <small className={classes.textmuted}>
                    
                    Havens Software Development
                    </small>
            </div>
        </div>
    )
}

export default Footer
