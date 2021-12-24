import './Register.css'
const Login = () => {
    return (
        <div className="row m-t-5">
            <div className="col-md-6 d-flex m-t-5">
                <div>
                    <h1>Login</h1>
                    <p>Get access to your Orders. Wishlist and Recommendations</p>
                </div>
            </div>
            <div className="col-md-6 form-login">
                <form>
                    <div>
                        <label for="email" className="form-label field-label">Email</label>
                        <input type="email" placeholder="Email" id="email" className="form-control field-input" />
                    </div>
                    <div className="m-t-5">
                        <label for="password" className="form-label field-label">Password</label>
                        <input type="password" placeholder="Password" id="password" className="form-control field-input" />
                    </div>
                    <div className="m-t-5">
                        <button className="login-btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login