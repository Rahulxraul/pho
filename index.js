var tablinks = document.getElementsByClassName("tab-links")
var tabcontens = document.getElementsByClassName("tab-content")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    } for (tabconten of tabcontens) {
        tabconten.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL =
    "https://script.google.com/macros/s/AKfycbyOmY1ABcwUUXBfyo1OKRhOD4WF2JMhzx6fc8mLzLIa_mB-UdRmJjZ6iXh9_SR4qYWn/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Message Sent Succesfully";
            setTimeout(function () {
                msg.innerHTML = ""

            }, 5000)
            form.reset()
        })
        .catch((error) => console.error("Error!", error.message));
});
