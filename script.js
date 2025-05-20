
function fadeTo(nextId) {
  document.querySelectorAll('.screen').forEach(div => div.classList.add('hidden'));
  setTimeout(() => {
    document.getElementById(nextId).classList.remove('hidden');
  }, 1000);
}

window.onload = () => {
  setTimeout(() => {
    fadeTo('loader');
    setTimeout(() => {
      fadeTo('profile-select');
    }, 2000);
  }, 3000);
};

function selectProfile(name) {
  localStorage.setItem('currentProfile', name);
  fadeTo('loader');
  setTimeout(() => {
    fadeTo('main-menu');
  }, 2000);
}

function showSection(id) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showMedia(type) {
  document.getElementById('media-title').innerText = type === 'serie' ? '8Bit Crew: La Serie' : '8Bit Crew: La película';
  fadeTo('media-view');
}

function backToMenu() {
  fadeTo('main-menu');
}

function goToProfiles() {
  fadeTo('profile-select');
}

function goToLogin() {
  fadeTo('login');
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === '8bitcrewcuentafake@gmail.com' && password === '8btest') {
    fadeTo('loader');
    setTimeout(() => {
      fadeTo('profile-select');
    }, 2000);
  } else {
    document.getElementById('login-error').innerText = 'Correo o contraseña incorrectos.';
  }
}
