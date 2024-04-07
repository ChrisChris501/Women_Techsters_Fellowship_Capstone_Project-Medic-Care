import React from 'react'

function LogIn() {
  return (
    <div>
      <div className="wrapper">
      <div className="container">
        <div className="login-container">
          <form>
            <span style={{ color: '#007D79', fontWeight: '700', fontSize: 'large', fontFamily: 'Times New Roman', fontWeight: 'bolder', alignItems: 'center' }}>Welcome back, <br /> Login to account</span>
            <input type="text" placeholder="Unique id" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <i className='bx bx-hide eye-icon'></i>
            <div className="checkbox">
              <input type="checkbox" id="signupCheck" />
              <label htmlFor="signupCheck">Remember me</label>
            </div>

            <button className="form_btn">Login</button>

            <div className="line"></div>

            <div className="media-options">
              <a href="#" className="field facebook">
                <i className="fa-brands fa-facebook" style={{ marginRight: '20px', fontSize: '20px' }}></i>
                <span>Sign in with Facebook</span>
              </a>
              <a href="#" className="field google">
                <i className="fab fa-google fa-3x" style={{ marginRight: '21px', fontSize: '20px' }}></i>
                <span> Sign in with Google</span>
              </a>
            </div>
          </form>
        </div>
        <div className="medi-safe-container">
          <p>Go back to homepage</p>
          <i className="fa-solid fa-arrow-left"></i>
          <img src="/images/Signup Screens.png" style={{ height: '250px', paddingLeft: '100px' }} alt="Signup Screens" />
          <h1>Medic-Safe</h1>
          <img src="/images/Knowledge Sharing.png" style={{ height: '35px', paddingLeft: '240px', marginTop: '80px', transform: 'translateX(-50%)' }} alt="Knowledge Sharing" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default LogIn