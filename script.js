


function weatherUpdate(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35867d2a327558e20ecbdd512213b910&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('location').innerText = data.name;
            document.getElementById('weather').innerText = data.weather[0].main;
            document.getElementById('image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(error => console.log(error));
}

weatherUpdate('Dhaka');















const loadData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=dhaka&appid=32ba0bfed592484379e51106cef3f204`)
        .then(res => res.json())
        .then(data => {

            console.log(data.list)

            var listItems = data.list.map(function (item) {
                return `<div class="swiper-slide">${item.main.temp}</div>`;
            })
            //   document.querySelector('.swiper-wrapper').innerHTML = listItems;
            document.querySelector('.swiper-wrapper').innerHTML = listItems.join('');

        })
}

loadData();



// for slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

