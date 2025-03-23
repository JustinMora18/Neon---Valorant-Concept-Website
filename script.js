document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // Declara la variable header
    
    function setupModal(modalNumber) {
        const openBtn = document.getElementById(`openModal${modalNumber}`);
        const closeBtn = document.getElementById(`closeModal${modalNumber}`);
        const modal = document.getElementById(`modal${modalNumber}`);
    
        openBtn.addEventListener("click", () => {
            modal.classList.add("open");
            header.style.zIndex = "-2"; // Baja el z-index del header
        });
    
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
            header.style.zIndex = "999"; // Restaura el z-index del header
        });
    
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("open");
                header.style.zIndex = "1000";
            }
        });
    }
    
    for (let i = 1; i <= 4; i++) {
        setupModal(i);
    }
});
