const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
    toggleIcon.classList.toggle("fa-solid");
    toggleIcon.classList.toggle("fa-regular");
    document.body.classList.toggle("dark-mode");
});

// smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const skillsCards = document.querySelectorAll(".skill");

window.addEventListener("scroll", () => {
  skillsCards.forEach((card) => {
    const cardPos = card.getBoundingClientRect().top;
    if (cardPos < window.innerHeight - 50) {
      card.style.transform = "translateY(-6px)";
    }
  });
});
