Oaklands inn - Booking form validation

const bookinform = document.getElementById('bookingForm');
if (bookinform) {
  bookinform.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get information entered by the vistor
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const guests = document.getElementById('guests').value;
     const guests = document.getElementById('formMessage').value;

     // Check that all information is provided
    if (!name || !phone || !guests) {
      document.getElementById('formMessage').textContent = 'Please fill in all required fields.';
      return;
      message.style.color = 'red';
      return;
    }

    // Check that the name contains atleast two characters
    if (name.length < 2) {
      document.getElementById('formMessage').textContent = 'Name must be at least 2 characters long.';
      return;
      message.style.color = 'red';
      return;
    }

    // Check phone number
    if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
      document.getElementById('formMessage').textContent = 'Please enter a valid phone number.';
      return;
      message.style.color = 'red';
      return;
    }

    //check number of guests
    if (! Number.isInteger(guests) || guests < 1 || guests > 10) {
        document.getElementById('formMessage').textContent = 'Number of guests must be between 1 and 10.';
        message.style.color = 'red';
        return;
    }

    // If all validations pass, submit the form 
    bookinform.submit();
  };
}


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