var frameList = document.getElementById("frame1");
var button1 = document.getElementById("frame1-btn");

var frameCampaing = document.getElementById("frame2");
var button2 = document.getElementById("frame2-btn");

var frameAnalytics = document.getElementById("frame3");
var button3 = document.getElementById("frame3-btn");

button1.onclick = function() {
    frameList.style.display = "block";
    frameCampaing.style.display = "none";
    frameAnalytics.style.display = "none"; 
}  

button2.onclick = function() {
    frameCampaing.style.display = "block";
    frameList.style.display = "none";
    frameAnalytics.style.display = "none"; 
}  

button3.onclick = function() {
    frameAnalytics.style.display = "block";
    frameList.style.display = "none";
    frameCampaing.style.display = "none"; 
}  