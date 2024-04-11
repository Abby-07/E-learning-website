document.addEventListener('DOMContentLoaded', function() {
    const menuBarBtn = document.getElementById('menuBarBtn');
    const menuItems = document.getElementById('menuItems');
  
    menuBarBtn.addEventListener('click', function() {
        alert("I GOT CLICKED!")
      menuItems.classList.toggle('show-menu');
    });
  });