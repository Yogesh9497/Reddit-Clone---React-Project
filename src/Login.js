import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from './redux/reducer/auth'

function Login() {
  const {users} = useSelector((state)=>state.reddit_user)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginHandle=(e)=>{
    e.preventDefault()
    setLoading(true)
    const checkUser = users.filter(
      (item) =>
        (item.email &&
          item.email.toLowerCase().includes(email.toLowerCase())) ||
        (item.phone && item.phone.toLowerCase().includes(email.toLowerCase()))
    );
    if(checkUser.length!==0){
      if(checkUser[0].password===password){
        dispatch(login({name:checkUser[0].name,email:checkUser[0].email,pic:checkUser[0].pic}))
        setLoading(false);
        toast.success("Login successfully");
        navigate('/')
      }else{
        setLoading(false);
        toast.error("That's not the right password.");
      }
    }else{
      setLoading(false);
      toast.error(
        "Couldn’t find a reddit account associated with this email or phone. Try again!."
      );
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <img
              src="https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png"
              alt=""
              className="img-fluid"
              width={"110px"}
            />
          </Link>
        </div>
      </nav>
      <div className='mt-2 text-center'>
        <h6>To login in reddit please fill the email and password as given below</h6>
        <h4>Email: <span>user@gmail.com</span></h4>
        <h4>Password: <span>user</span></h4>
      </div>
      <section className='mt-5'>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <h1>Sign in</h1>
                <p>Stay updated on your professional world</p>
                <form className="was-validated" onSubmit={loginHandle}>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required
                    />
                    <label htmlFor="floatingInput">Email or Phone</label>
                    <div className="invalid-feedback">
                      Please enter an email address or phone number
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <div className="invalid-feedback">
                      Please enter a password.
                    </div>
                  </div>
                  {/* <a href="" className="nav-link text-primary fw-bold mt-2">
                    Forgot password?
                  </a> */}
                  {!loading ? (
                    <button
                      className="btn btn-primary w-100 rounded-pill mt-3 p-3"
                      type="submit"
                    >
                      <strong>Sign in</strong>
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary w-100 rounded-pill mt-3 p-3"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                  )}
                </form>
                <p className="d-flex mt-3">
                  New to Reddit?{" "}
                  {/* <a href="" className="nav-link text-primary fw-bold ms-1">
                    Join now
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login