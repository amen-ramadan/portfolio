function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



document.addEventListener('mousemove', (e) => {
  const cursorFollower = document.querySelector('.cursor-follower');
  
  cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
