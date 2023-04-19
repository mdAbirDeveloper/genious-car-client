import React, { useContext, useState } from 'react';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/authProvider/AuthProvider';
import SocialLogin from '../../shared/socialLogin/SocialLogin';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [errors, setErrors] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess('user Login success fully');
                const currentuser = {
                    email: user.email
                }
                console.log(currentuser)
                // get jwt token 
                fetch('https://genius-car-sercver.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(currentuser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // local storage is the easyest but not the best place to store jwt token 
                    localStorage.setItem('genius-token', data.token);
                    navigate(from, {replace: true});
                })                
            })
            .catch(error => {
                const message = error.message;
                setErrors(message);
                console.log(error);
            })
    }

    return (
        <div className="hero my-10">
            <div className="hero-content grid gap-20 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div>
                                {
                                    success ? <p className='text-green-600'>{success}</p>
                                        :
                                        <p className='text-red-600'>{errors}</p>
                                }

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                        <div className=' my-3'>
                            <p>New to genius Car ? <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;