import colorNames from 'daisyui/src/colors/colorNames';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/authProvider/AuthProvider';


const Register = () => {
    const {creatUser} = useContext(AuthContext);
    const [success , setSuccess] = useState('');
    const [errors , setErrors] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        creatUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setSuccess('user signUp success fully');
            setAuthToken(user);
        })
        .catch(error => {
            const err = error.message;
            setErrors(err)
        })
    }
    return (
        <div className="hero my-10">
            <div className="hero-content grid gap-20 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name='name' placeholder="email" className="input input-bordered" />
                        </div>
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
                            {
                                 success?   <p className='text-green-600'>{success}</p>
                                 :
                                <p className='text-red-600'>{errors}</p>
                                }
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="SignUp" className="btn bg-pink-600" />
                        </div>
                        <div className=' my-3'>
                            <p>Already Have an Account ? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;