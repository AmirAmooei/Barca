const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const hourElement = document.querySelector('#hour')
const minuteElement = document.querySelector('#minute')
const secondElement = document.querySelector('#seconds')

setInterval(() => {
    const myTime = new Date()

    let hour = myTime.getHours()
    let minute = myTime.getMinutes()
    let second = myTime.getSeconds()

    if (second < 10) {
        second = '0' + second
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if (hour < 10) {
        hour = '0' + hour
    }

    hourElement.textContent = hour
    minuteElement.textContent = minute
    secondElement.textContent = second

}, 1000)

