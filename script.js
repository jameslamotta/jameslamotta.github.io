// Should be used in scripts placed after the Optimize or GTM
// installation or the initialization of the dataLayer variable.

// Not required if the Google Analytics gtag implementation is used.
window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);}

function implementExperimentA(value) {
  if (value ==  '0') {
    document.getElementById("section2").innerHTML = "Hello World!";
  } else if (value == '1') {
    document.getElementById("section2").innerHTML = "holaaaaa 2222 !";
  } else if (value == '2') {
    document.getElementById("section2").innerHTML = "holaaaa 33333 !";
  }
}

gtag('event', 'optimize.callback', {
    name: 'NRLruprYTsCigOEgkwVGqA',
    callback: implementExperimentA
 });
