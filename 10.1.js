function openNav(type) {
    let sidenav = document.getElementById(type);
  
    if (type === 'push' || type === 'pushOpacity') {
      sidenav.style.width = '250px';
      sidenav.classList.add('open');
    } else if (type === 'overlay' || type === 'overlayNoAnimation') {
        sidenav.style.width = '20%'; 
        sidenav.classList.add('open');
      } else {
        sidenav.style.width = '100%';
      }
  }
  
  function closeNav(type) {
    let sidenav = document.getElementById(type);
    sidenav.style.width = '0';
    sidenav.classList.remove('open');
  }
  