document.getElementById('search-btn').addEventListener('click', () => {
    const inputLocation = document.getElementById('input-location').value;
    loadData(inputLocation);
    weatherUpdate(inputLocation);
})


function weatherUpdate(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35867d2a327558e20ecbdd512213b910&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('location').innerText = data.name;
            document.getElementById('weather').innerText = data.weather[0].main;
            document.getElementById('image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('pressure').innerText = data.main.pressure;
            document.getElementById('wind').innerText = data.wind.speed;
        })
        .catch(error => console.log(error));
}

weatherUpdate('Dhaka');















const loadData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=32ba0bfed592484379e51106cef3f204`)
        .then(res => res.json())
        .then(data => {


            var listItems = data.list.map(function (item) {
                let temperature = item.main.temp;
                const time = ((item.dt_txt).slice(11, -3));
                const date = ((item.dt_txt).slice(0,10));
                console.log(date);

                temperature = Math.round(temperature)
                return `<div class="swiper-slide">
                <div class="d-flex justify-content-between"><h6>${date}</h6>
                <h6>${time}</h6></div>
                <h4>${temperature-273}&deg;C</h4>
                </div>`;
            })
              document.querySelector('.swiper-wrapper').innerHTML = listItems;
            document.querySelector('.swiper-wrapper').innerHTML = listItems.join('');

        })
}

loadData('Dhaka');



// for slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    centeredSlides: false,
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

