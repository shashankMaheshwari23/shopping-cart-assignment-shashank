import './Register.css'
const Signup = () => {
    return (
        <div className="row m-t-5">
            <div className="col-md-6 d-flex m-t-5">
                <div>
                    <h1>Signup</h1>
                    <p>We do not share your personal details with anyone.</p>
                </div>
            </div>
            <div className="col-md-6 form-login">
                <form>
                    <div>
                        <label for="fname" className="form-label field-label">First Name</label>
                        <input type="text" placeholder="First Name" id="fname" className="form-control field-input" />
                    </div>
                    <div className="m-t-5">
                        <label for="lname" className="form-label field-label">Last Name</label>
                        <input type="text" placeholder="Last Name" id="lname" className="form-control field-input" />
                    </div>
                    <div className="m-t-5">
                        <label for="email" className="form-label field-label">Email</label>
                        <input type="email" placeholder="Email" id="email" className="form-control field-input" />
                    </div>
                    <div className="m-t-5">
                        <label for="password" className="form-label field-label">Password</label>
                        <input type="password" placeholder="Password" id="password" className="form-control field-input" />
                    </div>
                    <div className="m-t-5">
                        <label for="cPassword" className="form-label field-label">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" id="cPassword" className="form-control field-input" />
                    </div>
                    <div className="m-t-5">
                        <button className="login-btn">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup