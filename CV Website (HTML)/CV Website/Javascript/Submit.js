let submit = document.getElementById("submit");
submit.onclick = function(){
alert("submit");

};
let s = document.getElementById("submit");
s.insertAdjacentHTML("beforeend", "<br/><strong> You have submitted your enquiry.</strong>");