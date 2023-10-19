let c1 = document.getElementById("k1");
let c2 = document.getElementById("k2");
let c3 = document.getElementById("k3");
let c4 = document.getElementById("k4");
let c5 = document.getElementById("k5");
let txt = document.getElementById("text");
let div = document.getElementById("scale");
let txt2 = document.getElementById("text2");
let sg = document.getElementById("sn/lg");
let tid = document.getElementById("trainerid");

// let dd = document.getElementById("dropdown");

var i=0;
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    c1.style.left = value * 0.12 + "px";
    c2.style.right = value * 0.12 + "px";
    txt.style.marginTop = value * 0.39 + "px";
    c3.style.left = value * 0.03 + "px";  
    c4.style.bottom = value * 0.03 + "px";
    c5.style.right = value * 0.03 + "px";
    // if(value>2500){
    // tid.style.top = value * 0.3 + "px";
    // }
})

function signin(){
  document.getElementById("dropdown").classList.toggle("show");
}

function signout(){
  // alert(document.cookie);
  var temp = document.cookie;
  var temp1 = temp.split("; ");
  document.cookie = "LoggedIn=false";
  alert("Please Log in Again");
  window.location.href = "index.html";
  // location.reload();
}

function myfunc(){
  window.location = "#dd";
}

function check(){

  // document.cookie = "LoggedIn=false";
  // alert(document.cookie);
  temp = document.cookie;
  temp1 = temp.split("; ");
  // alert(temp1);
  if(temp1[3]==="LoggedIn=false" || temp==="LoggedIn=false")
  { 
    alert("Please Log In");
    window.location.href = "index.html";
  }
}

function twitter(){
  window.open('https://twitter.com/musclemaniacstv', '_blank');
}

function yt() {
  window.open('https://www.youtube.com/c/MuscleManiacs','_blank');
}

function facebook(){
  window.open('https://www.facebook.com/p/Muscle-Maniac-Studio-100070841589913/','_blank');
}

function insta(){
  window.open('https://www.instagram.com/musclemaniacsgym/?hl=en','_blank');
}

function playstore(){
  window.open('https://play.google.com/store/apps/details?id=ie.zappy.fennec.musclemaniacs','_blank');
}