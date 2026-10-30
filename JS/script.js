// Oaklandsinn - Booking form validation
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault

const name = document.getElementById('name').value.trim();
    const email = document.getElementById('phone').value.trim();
    const checkin = document.getElementById('guests').value;
    
    const message = document.getElementById('message').value.trim();

    if (name === '' || phone === '' || guests ===  0) {
        message.textContent = 'Please fill in all required fields.';
        message.style.color = 'red';
        return;
    } 

    if (name.length < 2) {
        message.textContent = 'Name must be at least 2 characters long.';
        message.style.color = 'red';
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        message.textContent = 'Please enter a valid 10-digit phone number.';
        message.style.color = 'red';
        return;
    }

    if (! Number.isInterger(guests) // guests <= 1 // guests > 80) {
        message.textContent = 'Please enter a valid number of guests (1-80).';
        message.style.color = 'red';
        return;
    }

    message.textContent = 'Booking submitted successfully!';
    message.style.color = 'green';
    bookingForm.reset();
  });


// Oaklands inn - Services search 
const serviceSearch = document.getElementById('serviceSearch');
const serviceCategories = document.querySelectorAll('.services-category');
const searchMessage = document.getElementById('searchMessage');

if (serviceSearch) {
  serviceSearch.addEventListener('input', function() {
    const searchTerm = serviceSearch.value.toLowerCase();
    let found = 0;

    serviceCategories.forEach(function category) {
        const categoryText = category.textContent.toLowerCase();
        if (categoryText.includes(searchTerm)) {
            category.style.display = 'block';
            found++;
        } else {
            category.style.display = 'none';
        }
    });

    if (found === 0) {
        searchMessage.textContent = 'No services found matching your search.';
    } else {
        searchMessage.textContent = '';
    }
});
}

// Oaklands inn - Image gallery lightbox
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
if (lightbox && lightboxImage && lightboxClose) {
  galleryImages.forEach(function(image) {
    image.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
  });
  lightboxClose.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
  });

  // Oaklands inn - FAQ accordion
    const faqItems = document.querySelectorAll('.accordion-button');
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