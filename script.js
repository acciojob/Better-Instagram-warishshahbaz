document.addEventListener('DOMContentLoaded', function() {
  let draggedItem = null;

  document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', function() {
      draggedItem = this;
      setTimeout(() => {
        this.style.display = 'none';
      }, 0);
    });

    item.addEventListener('dragend', function() {
      setTimeout(() => {
        this.style.display = 'block';
        draggedItem = null;
      }, 0);
    });

    item.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    item.addEventListener('drop', function() {
      if (draggedItem !== null && draggedItem !== this) {
        const temp = this.style.backgroundImage;
        this.style.backgroundImage = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = temp;
      }
    });
  });
});
