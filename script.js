function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function downloadPDF() {
  const link = document.createElement('a');
  link.href = './assets/ilyas-EL-HAQYQY.pdf';
  link.download = 'ilyas-EL-HAQYQY.pdf'; 
  link.click();
}