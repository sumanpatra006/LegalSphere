let qabox = document.querySelectorAll('.q_a');

qabox.forEach(qa => {
    let icon = qa.querySelector('.icon');
    let answer = qa.querySelector('.answer')

    qa.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
});

// firebase authentication 

let userCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let userInfo = JSON.parse(sessionStorage.getItem("user-info"));


let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds"))
        window.location.href = 'login.html'

    else {

        let msgHEad = document.getElementById('msg');
        msgHEad.innerText = `Welcome ${userInfo.firstname + " " + userInfo.lastname}!`;
    }
}