document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('personal-info-form');
    const steps = document.querySelectorAll('.step');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (validateForm(name, email, phone)) {
            alert('Form submitted successfully!');
            // Move to the next step
            updateStep(1);
        }
    });

    function validateForm(name, email, phone) {
        if (!name) {
            alert('Name is required.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^\+\d{1,3}-\d{1,4}-\d{6,10}$/;
        return phonePattern.test(phone);
    }

    function updateStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
});