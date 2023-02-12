var nextScreen = localStorage.getItem("nextScreen");

setTimeout(switchScreen(), 5000);

function switchScreen() {
    window.location = nextScreen;
}