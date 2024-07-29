function updateClock() {
    const now = new Date();
    const offset = 0; 
    const brasiliaTime = new Date(now.getTime() + offset * 60 * 60 * 1000);

    const hours = brasiliaTime.getHours();
    const minutes = brasiliaTime.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    document.getElementById('clock').textContent = `${formattedHours}:${formattedMinutes} ${period}`;
}

setInterval(updateClock, 1000);


updateClock();


