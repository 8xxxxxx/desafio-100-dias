// Characters used to generate the password
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";

// Function to generate the password
function generatePassword(length) {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Event listeners
document.getElementById('generate').addEventListener('click', function() {
  const length = document.getElementById('length').value;
  const password = generatePassword(length);
  document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  alert("Password copied to clipboard: " + passwordField.value);
});
