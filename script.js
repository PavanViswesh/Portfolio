// Smooth scroll for nav buttons
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animate skill bars when in view
window.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".skill-bar div");
  const triggerPoint = window.innerHeight;
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < triggerPoint) {
      const width = skill.parentElement.dataset.width;
      skill.style.width = width;
    }
  });
});
