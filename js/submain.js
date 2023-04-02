//Popover in Information Icon
    let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    });





    // window.addEventListener("scroll", ()=> {
    //     let nav = document.querySelector("nav");
    //     nav.classList.toggle("sticky", window.scrollY > 0)
    // })