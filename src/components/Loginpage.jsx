import React from "react"
function Loginpage() {
    return (
        <div className='container'>
            <div class="box">
                <div class="arrow-right">

                    {/* ths area for blue triangle  */}

                </div>
            </div>
            <div
                className="box-login">
                <div className="heading">
                    <h1>Tika<span>Rx</span></h1>
                    <p>Rx Management System</p>
                </div>
                <h1>Login</h1>
                <div className="user-password">
                    <div > <label for="user_id">User ID</label></div>
                    <input type="text" name="user_id" />
                </div>
                <div className="user-password">
                    <div> <label for="password">Password</label></div>
                    <input type="text" name="password" />
                </div>

                <div className="forgot">
                    <div className="check-box">
                        <input id="rememberMe" type="checkbox" value="lsRememberMe" />
                        <label for="rememberMe">Remember me</label>
                    </div>
                    <p>forgot User ID/password</p>
                </div>

                <button>Login</button>

            </div>
            <div class="box">
                {/* ths area for blue triangle  */}
            </div>
        </div>
    )
}

export default Loginpage
