let qabox = document.querySelectorAll('.q_a');

qabox.forEach(qa => {
    let icon = qa.querySelector('.icon');
    let answer = qa.querySelector('.answer')

    qa.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
});