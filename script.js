document.addEventListener("DOMContentLoaded", function() {
    const draggables = document.querySelectorAll('.drag');

    let dragSrcEl = null;

    function handleDragStart(e) {
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); 
        }
        e.dataTransfer.dropEffect = 'move'; 
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over'); 
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); 
        }
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    function handleDragEnd(e) {
        draggables.forEach(function (drag) {
            drag.classList.remove('over');
        });
    }

    draggables.forEach(function (drag) {
        drag.addEventListener('dragstart', handleDragStart, false);
        drag.addEventListener('dragenter', handleDragEnter, false);
        drag.addEventListener('dragover', handleDragOver, false);
        drag.addEventListener('dragleave', handleDragLeave, false);
        drag.addEventListener('drop', handleDrop, false);
        drag.addEventListener('dragend', handleDragEnd, false);
    });
});
