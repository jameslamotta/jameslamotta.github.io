// Should be used in scripts placed after the Optimize or GTM
// installation or the initialization of the dataLayer variable.

// Not required if the Google Analytics gtag implementation is used.
window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);}



function implementExperimentCopy(value) {
  if (value ==  '0') {
    document.getElementById("section2").innerHTML = "(Original) Jaime Perujo testing site";
  } else if (value == '1') {
    document.getElementById("section2").innerHTML = "Copy 1: Jaime's personal LAB :)";
  } else if (value == '2') {
    document.getElementById("section2").innerHTML = "Copy 2: This is a test, it will be self-destroyed in 3,2,1...";
  }
}

function implementExperimentTheme(value) {
  if (value ==  '0') {
    // Same theme as original
  } else if (value == '1') {
    document.getElementById("logo").src="images/logo.jpg";
    document.getElementById("image1").src="images/selva1.jpg";
    document.getElementById("image2").src="images/selva2.jpg";
  } else if (value == '2') {
    document.getElementById("logo").src="images/logo.jpg";
    document.getElementById("image1").src="images/selva1.jpg";
    document.getElementById("image2").src="images/selva2.jpg";
  }
}




gtag('event', 'optimize.callback', {
    name: 'NRLruprYTsCigOEgkwVGqA',
    callback: implementExperimentCopy, implementExperimentTheme,
 });
