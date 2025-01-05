// Get elements
const playButton = document.getElementById('playButton');
const videoModal = document.getElementById('videoModal');
const closeButton = document.getElementById('closeButton');
const videoPlayer = document.getElementById('videoPlayer');

// Open the modal and play the video
playButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  videoModal.style.display = 'flex'; // Show the modal
  videoPlayer.play(); // Start playing the video
});

// Close the modal and stop the video
closeButton.addEventListener('click', function() {
  videoModal.style.display = 'none'; // Hide the modal
  videoPlayer.pause(); // Pause the video
  videoPlayer.currentTime = 0; // Reset the video to the start
});

// Close the modal if user clicks outside the video
window.addEventListener('click', function(event) {
  if (event.target === videoModal) {
    videoModal.style.display = 'none'; // Hide the modal
    videoPlayer.pause(); // Pause the video
    videoPlayer.currentTime = 0; // Reset the video to the start
  }
});