const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const cameraIcon = document.getElementById('cameraIcon');
const micIcon = document.getElementById('micIcon');

// Trigger search on Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    performSearch(searchInput.value.trim());
  }
});

// Trigger search on magnify icon click
searchIcon.addEventListener('click', () => {
  performSearch(searchInput.value.trim());
});

function performSearch(query) {
  if (query) {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = googleUrl;
  }
}

// Camera icon functionality (simulate Google Lens-like search)
cameraIcon.addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.onchange = () => {
    const file = fileInput.files[0];
    if (file) {
      // Redirect to Google Images search with upload
      const googleLensUrl = "https://images.google.com/searchbyimage?image_content=" + encodeURIComponent(file.name);
      window.location.href = googleLensUrl;
    }
  };
  fileInput.click();
});

// Microphone icon functionality
micIcon.addEventListener('click', () => {
  alert("Voice input coming soon! 🐱🎤");
});
