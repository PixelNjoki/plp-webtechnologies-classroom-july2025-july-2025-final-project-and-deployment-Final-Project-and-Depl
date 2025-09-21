/* ====== NAV TOGGLE (mobile) ====== */
const nav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    // toggle 'open' class to show/hide nav links on small screens
    nav.classList.toggle('open');
  });
}

/* ====== SIMPLE ANIMATIONS & UI HELPERS ====== */
/* small helper to add a temporary class for CSS animation */
function flash(element) {
  element.classList.add('flash');
  setTimeout(() => element.classList.remove('flash'), 600);
}

/* If there's a hero button, add a click animation */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    flash(btn);
  });
});

/* ====== CONTACT FORM VALIDATION ====== */
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // stop normal submit

    // Simple validation
    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length < 2) {
      formFeedback.textContent = 'Please enter your full name (at least 2 characters).';
      formFeedback.style.color = 'red';
      return;
    }

    // basic email regex (simple student-level)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formFeedback.textContent = 'Please enter a valid email address.';
      formFeedback.style.color = 'red';
      return;
    }

    if (message.length < 10) {
      formFeedback.textContent = 'Message must be at least 10 characters.';
      formFeedback.style.color = 'red';
      return;
    }

    // If all good show success (in a real site you'd send to server)
    formFeedback.textContent = 'Thanks! Your message was sent (demo).';
    formFeedback.style.color = 'green';

    // reset form (optional)
    contactForm.reset();
  });
}

/* ====== OPTIONAL: small interactive card flip (student-level) ====== */
/* This is simple: when a .card is clicked, toggle a .flipped class */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');
  });
});
