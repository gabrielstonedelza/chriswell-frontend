import classes from './Success.module.css'

const Success = () => {
    return (
        <div className={classes.successcontainer}>
            <div className={classes.successtext}>
                <h2>Thank you for your registration</h2>
                <p>Please check your email</p>
            </div>
        </div>
    )
}

export default Success
