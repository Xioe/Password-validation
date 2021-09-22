const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 4;


const showMsg = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = "Masz bardzo dobre haslo";
        p.style.color = 'lime';
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.textContent = "Masz dobre haslo";
        p.style.color = 'orange';
    } else {
        p.textContent = "Masz slabe haslo";
        p.style.color = 'tomato';
    }
}

pass.addEventListener('keyup', showMsg)