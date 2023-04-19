export const setAuthToken = (user) => {
    const currentuser = {
        email: user.email
    }
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
        })
}