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

let guidecount = 0;
function guide() {
  let stringlist = [
    'Seamless Auto Bookings Navigate Vellore with Ease',
    'Trustworthy and Verified Drivers: Your Journey, Your Confidence!',
    'Automate Vellore: Affordable Rides, Unbeatable Prices!',
    'Automate Vellore: Where Trust Drives Every Journey.',
  ];
  let colorlist = ['#5D3FD3', '#FFE948', '#3CDC56', '#FFE948'];
  let imagelist = [
    'assets/headerimage.png',
    'assets/guide2.jpg',
    'assets/guide3.jpg',
    'assets/guide4.jpg',
  ];
  let guidepage = document.getElementById('guide');
  let guidetext = document.getElementById('guidetext');
  let guideimage = document.getElementById('guideimage');
  if (guidecount <= 3) {
    guidetext.innerText = stringlist[guidecount];
    guidepage.style.backgroundColor = colorlist[guidecount];
    guideimage.src = imagelist[guidecount];
    guidecount++;
  } else {
    guidepage.style.display = 'none';
  }
}
