document.addEventListener("DOMContentLoaded", function () {
    function setupModal(modalNumber) {
        const openBtn = document.getElementById(`openModal${modalNumber}`);
        const closeBtn = document.getElementById(`closeModal${modalNumber}`);
        const modal = document.getElementById(`modal${modalNumber}`);
    
        openBtn.addEventListener("click", () => {
            modal.classList.add("open");
        });
    
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
        });
    
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("open");
            }
        });
    }

    for (let i = 1; i <= 4; i++) {
        setupModal(i);
    }
});
