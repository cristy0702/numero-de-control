document.getElementById('controlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    
    const controlNumber = document.getElementById('controlNumber').value;
    const errorMessage = document.getElementById('error-message');
    
    // Validar que el número de control sea exactamente de 8 dígitos
    
    if (/^2084\d{4}$/.test(controlNumber)) {
        errorMessage.style.display = 'none';
        alert('Número de control válido');
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'El número de control debe iniciar con 2084.';
    }
});