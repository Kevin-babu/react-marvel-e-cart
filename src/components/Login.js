import React from 'react'

export default function Login() {
  return (
    <div className='login'>
        <form className='login-form'>
        <h1>Login</h1>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
            <button className="btn btn-primary login-btn">Submit</button>
        </form>
    </div>
  )
}
