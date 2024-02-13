document.addEventListener('DOMContentLoaded', () => {
  const pictures = document.querySelectorAll('.image');

  let draggedItem = null;

  pictures.forEach(picture => {
    picture.addEventListener('dragstart', () => {
      draggedItem = picture;
      setTimeout(() => {
        picture.style.display = 'block';
      }, 0);
    });

    picture.addEventListener('dragend', () => {
      setTimeout(() => {
        draggedItem.style.display = 'block';
        draggedItem = null;
      }, 0);
    });
  });

  document.addEventListener('dragover', e => {
    e.preventDefault();
  });

  document.addEventListener('dragenter', e => {
    e.preventDefault();
  });

  document.addEventListener('drop', e => {
    e.preventDefault();
    if (draggedItem) {
      draggedItem.style.display = 'block';
      if (e.target.classList.contains('image')) {
        e.target.parentNode.insertBefore(draggedItem, e.target);
      } else if (e.target.classList.contains('flex')) {
        e.target.appendChild(draggedItem);
      }
    }
  });
});