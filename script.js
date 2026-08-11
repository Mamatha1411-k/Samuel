let enteredPass = "";
const correctPass = "3029"; // Updated passcode

function pressNum(num) {
    if (enteredPass.length < 4) {
        enteredPass += num;
        document.getElementById("passcode-display").innerText = "• ".repeat(enteredPass.length);
    }
}

function checkPass() {
    if (enteredPass === correctPass) {
        // Play audio securely after interaction
        const audio = document.getElementById("bg-music");
        audio.play().catch(error => console.log("Audio autoplay restricted"));
        
        goToScreen("screen-wanna-see");
    } else {
        goToScreen("screen-wrong");
    }
    enteredPass = "";
}

function goToScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

function moveNo() {
    const btnNo = document.getElementById("btn-no");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}
