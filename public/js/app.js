function updateSliderValue() {
    let sliderVal = document.getElementById('sliderValue');
    let slider = document.getElementById('passlen');
    sliderVal.innerText = slider.value;
}

updateSliderValue();

let slider = document.getElementById('passlen');
slider.oninput = function () {
    updateSliderValue();
};

function generatePass(e) {

    e.preventDefault();
    let length = document.getElementById('passlen').value;
    let incLower = document.getElementById('incLower').checked;
    let incUpper = document.getElementById('incUpper').checked;
    let incNum = document.getElementById('incNum').checked;
    let incSpecial = document.getElementById('incSpec').checked;
    let passOut = document.getElementById('generatedPass');

    let sliderVal = document.getElementById('sliderValue');
    let slider = document.getElementById('passlen');
    slider.oninput = function () {
        sliderVal.innerText = this.value;
    }

    passOut.addEventListener('click', () => {
        navigator.clipboard.writeText(passOut.value);
        window.alert('text copied');
    })

    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let special = "!@#$%^&*()<>[]-_";

    let incChar = "";

    if (incLower) {
        incChar += lower;
    }
    if (incUpper) {
        incChar += upper;
    }
    if (incNum) {
        incChar += num;
    }
    if (incSpecial) {
        incChar += special;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += incChar.charAt(Math.floor(Math.random() * incChar.length));
    }
    passOut.value = password;
}