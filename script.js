let headercount = 0;
function check() {
  let check = document.getElementById('burger');
  let headerslider = document.getElementById('headerslider');
  if (headercount % 2 == 0) {
    headerslider.style.left = '0%';
    headercount++;
  } else {
    console.log('false');
    headerslider.style.left = '-70%';
    headercount++;
  }
}
