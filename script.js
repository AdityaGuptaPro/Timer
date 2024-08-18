let countdownInterval;
let targetDate;

function startCountdown() {
    const targetDateInput = document.getElementById('targetDate');
    const targetDateValue = targetDateInput.value;

    if (!targetDateValue) {
        alert('Please select a target date.');
        return;
    }

    targetDate = new Date(targetDateValue).getTime();
    const countdownElement = document.getElementById('timer');
    countdownElement.style.color = '#ffffff'; // Set default color

    countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Countdown expired';
            countdownElement.style.color = '#f44336';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    const countdownElement = document.getElementById('timer');
    countdownElement.innerHTML = '';
    countdownElement.style.color = '#ffffff'; // Reset color
    // Reset input value only if the countdown was already started
    if (targetDate) {
        document.getElementById('targetDate').value = new Date(targetDate).toISOString().slice(0, 16);
        targetDate = null; // Reset targetDate variable
    }
}

function showSelectedDateTime() {
    const selectedDateTime = document.getElementById('selectedDateTime');
    selectedDateTime.innerText = `Selected Date & Time: ${document.getElementById('targetDate').getAttribute('data-value')}`;
    selectedDateTime.style.display = 'block';
}

function updateSelectedDateTime() {
    const targetDateInput = document.getElementById('targetDate');
    const selectedDateTime = new Date(targetDateInput.value).toLocaleString();
    targetDateInput.setAttribute('data-value', selectedDateTime);
}