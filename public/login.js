const usernameTxt = document.querySelector('#username');
const passwordTxt = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', async () => {
    const username = usernameTxt.value;
    const password = passwordTxt.value;
    const response = await postData('http://localhost:3000/api/auth/login', { username, password });
    if (response.status == 'success') {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', username);
        const resp = await getData('http://localhost:3000/api/users/view-users');
        console.log('resp: ', resp);
        // window.location.href = resp.url;
        //  document.querySelector('body').innerHTML = resp;
    }
});


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        redirect: "follow"
    });
    return response.json();
}

async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
        },
        redirect: "follow"
    });
    return response;
}