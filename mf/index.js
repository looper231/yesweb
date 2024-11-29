document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');

  // Add event listeners to all screenshots
  document.querySelectorAll('.screenshot').forEach((img) => {
    img.addEventListener('click', () => {
      modal.classList.add('open');
      modalImage.src = img.src;

      // Add no-scroll class
      document.body.classList.add('no-scroll');
    });
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  // Close the modal when clicking outside the image
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('open');

    // Remove no-scroll class after transition ends
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
    }, 300); // Match the duration of the CSS transition
  }
});
