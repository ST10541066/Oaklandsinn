// Booking Form Validation

const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const guests = parseInt(document.getElementById('guests').value, 10);
        const messageField = document.getElementById('message').value.trim();

        const formMessage = document.getElementById('formMessage');

        formMessage.textContent = '';
        formMessage.style.color = 'red';

        // Required fields check
        if (name === '' || email === '' || phone === '' || !guests) {
            formMessage.textContent = 'Please fill in all required fields.';
            return;
        }

        // Guests validation
        if (!Number.isInteger(guests) || guests < 1 || guests > 80) {
            formMessage.textContent =
                'Number of guests must be between 1 and 80.';
            return;
        }

        // Success message
        formMessage.style.color = 'green';
        formMessage.textContent =
            'Booking submitted successfully! We will contact you shortly.';

        bookingForm.reset();
    });
}



// FAQ Accordion

const accordionButtons = document.querySelectorAll('.accordion-button');

if (accordionButtons.length > 0) {
    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const content = button.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
}

// Booking Form Validation

const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const guests = parseInt(document.getElementById('guests').value, 10);

        const formMessage = document.getElementById('formMessage');

        formMessage.textContent = '';
        formMessage.style.color = 'red';

        // Validation
        if (name === '' || phone === '' || isNaN(guests)) {
            formMessage.textContent =
                'Please complete all required fields.';
            return;
        }

        if (!Number.isInteger(guests) || guests < 1 || guests > 80) {
            formMessage.textContent =
                'Number of guests must be between 1 and 80.';
            return;
        }

        formMessage.style.color = 'green';
        formMessage.textContent =
            'Booking enquiry submitted successfully!';

        bookingForm.reset();
    });
}

// Service Search

const searchInput = document.getElementById('serviceSearch');
const serviceCategories = document.querySelectorAll('.services-category');
const searchMessage = document.getElementById('searchMessage');

if (searchInput) {
    searchInput.addEventListener('keyup', function () {

        const searchTerm = searchInput.value.toLowerCase();
        let matches = 0;

        serviceCategories.forEach(function (category) {

            const text = category.textContent.toLowerCase();

            if (text.includes(searchTerm)) {
                category.style.display = 'block';
                matches++;
            } else {
                category.style.display = 'none';
            }
        });

        if (searchTerm === '') {
            searchMessage.textContent = '';
        } else if (matches === 0) {
            searchMessage.textContent = 'No matching services found.';
        } else {
            searchMessage.textContent =
                matches + ' service section(s) found.';
        }
    });
}