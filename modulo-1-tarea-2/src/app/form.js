const form = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const mailInput = document.querySelector('#email');
const resultMessage = document.querySelector('#resultMessage');

function validarRegistro(event) {
    event.preventDefault();

    let nombre = nameInput.value.trim();
    let edad = Number(ageInput.value);
    let email = mailInput.value.trim();

    resultMessage.classList.remove('success-message', 'error-message');

    if (!nombre) {
        resultMessage.textContent = '⚠️ Por favor, ingresa tu nombre antes de continuar.';
        resultMessage.classList.add('error-message');
        return;
    }

    if (!edad || isNaN(edad)) {
        resultMessage.textContent = '⚠️ Ingresa una edad válida.';
        resultMessage.classList.add('error-message');
        return;
    }

    if (edad < 0 || edad > 120) {
        resultMessage.textContent = '⚠️ Por favor ingresa una edad realista.';
        resultMessage.classList.add('error-message');
        return;
    }

    if (edad >= 18) {
        resultMessage.textContent = `✅ Felicidades, ${nombre}. Ya tienes acceso al evento. Enviamos a ${email} los detalles de la reserva. ¡Salud! 🍷`;
        resultMessage.classList.add('success-message');
    } else {
        resultMessage.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de 18 años para participar.`;
        resultMessage.classList.add('error-message');
    }
}

form.addEventListener('submit', validarRegistro);