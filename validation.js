document.getElementById('submitBtn').addEventListener('click', validateForm);
document.getElementById('clearBtn').addEventListener('click', clearErrors);

function validateForm() {
  clearErrors(); // reset styles before each validation
  let isValid = true;

  // Username
  const username = document.getElementById('username').value.trim();
  const usernameLabel = document.getElementById('label-username');
  const usernameRegex = /^[a-z0-9]{4,12}$/;
  if (username === '') {
    usernameLabel.classList.add('error');
    isValid = false;
  } else if (!usernameRegex.test(username)) {
    usernameLabel.classList.add('warning');
    isValid = false;
  }

  // Email
  const email = document.getElementById('email').value.trim();
  const emailLabel = document.getElementById('label-email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.(net|com|org|edu)$/;
  if (email === '') {
    emailLabel.classList.add('error');
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailLabel.classList.add('warning');
    isValid = false;
  }

  // Phone
  const phone = document.getElementById('phone').value.trim();
  const phoneLabel = document.getElementById('label-phone');
  const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
  if (phone === '') {
    phoneLabel.classList.add('error');
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    phoneLabel.classList.add('warning');
    isValid = false;
  }

  // Password
  const password = document.getElementById('password').value;
  const passwordLabel = document.getElementById('label-password');
  const passwordRegex = /^[A-Za-z0-9_]{9,}$/; // basic: at least 9 chars
  if (password === '') {
    passwordLabel.classList.add('error');
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    passwordLabel.classList.add('warning');
    isValid = false;
  } else {
    // BONUS validation
    const bonusRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9_]).{9,}$/;
    if (!bonusRegex.test(password)) {
      console.warn('Password does not meet bonus requirements (not penalized).');
    }
  }

  // Confirm Password
  const confirmPassword = document.getElementById('confirmPassword').value;
  const confirmLabel = document.getElementById('label-confirmPassword');
  if (confirmPassword === '') {
    confirmLabel.classList.add('error');
    isValid = false;
  } else if (confirmPassword !== password) {
    alert('Passwords do not match');
    confirmLabel.classList.add('warning');
    isValid = false;
  }

  // Gender
  const genderLabel = document.getElementById('label-gender');
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  if (!genderChecked) {
    genderLabel.classList.add('error');
    isValid = false;
  }

  // Age
  const age = document.getElementById('age').value;
  const ageLabel = document.getElementById('label-age');
  if (age === '') {
    ageLabel.classList.add('error');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
  }
}

function clearErrors() {
  const labels = document.querySelectorAll('label');
  labels.forEach(label => {
    label.classList.remove('error', 'warning');
  });
}
