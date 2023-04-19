import React, { useContext } from 'react';
import { setAuthToken } from '../../api/auth';
import { AuthContext } from '../../context/authProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <p className='text-center'><small>social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSingIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;