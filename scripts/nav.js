/* Open when clicking/tapping the logo */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when clicking/tapping the close words */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 

/* Change colour wordmark when scrolling */
window.onscroll = () => {
  const nav = document.querySelector('#logoColoured');
  if(this.scrollY <= 600) nav.className = 'logo'; else nav.className = 'scroll';
};

/* Change words in header and nav when hovering */
const logoNav = document.getElementById("logoColoured");
logoNav.onmouseover = function () {
  logoNav.innerHTML = "Timothy D'hoe menu";
};
logoNav.onmouseout = function () {
  logoNav.innerHTML = "Timothy D'hoe studio";
  title.innerHTML = "";
};

const navWork = document.getElementById("navWork");
navWork.onmouseover = function () {
  navWork.innerHTML = "Lemme see some";
};
navWork.onmouseout = function () {
  navWork.innerHTML = "Work";
  title.innerHTML = "";
};

const navStudio = document.getElementById("navStudio");
navStudio.onmouseover = function () {
  navStudio.innerHTML = "What we do";
};
navStudio.onmouseout = function () {
  navStudio.innerHTML = "Studio";
  title.innerHTML = "";
};

const navContact = document.getElementById("navContact");
navContact.onmouseover = function () {
  navContact.innerHTML = "Let's start creating";
};
navContact.onmouseout = function () {
  navContact.innerHTML = "Contact";
  title.innerHTML = "";
};

const navInstagram = document.getElementById("navInstagram");
navInstagram.onmouseover = function () {
  navInstagram.innerHTML = "Say Hi!";
};
navInstagram.onmouseout = function () {
  navInstagram.innerHTML = "@timothydhoe";
  title.innerHTML = "";
};