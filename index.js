var numberOfDrumButt = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButt; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got Clicked");
    });
}