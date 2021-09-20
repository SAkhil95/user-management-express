const nameTxt = document.querySelector('#name');
const industryTxt = document.querySelector('#industry');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', async () => {
    const name = nameTxt.value;
    const industry = industryTxt.value;

    const response = await postData('http://localhost:3000/api/users/add-user', { name, industry });
    console.log('response: ', response);
    if (response.status == 'success') {
        window.location.href = 'http://localhost:3000/users';
    }
});

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
        },

        body: JSON.stringify(data)
    });
    return response.json();
}