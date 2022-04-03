
// document.getElementById('search-btn').addEventListener('click', () => {
//     const inputLocation = document.getElementById('input-location').value;
//     weatherUpdate(inputLocation);
// })

// function weatherUpdate(city) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35867d2a327558e20ecbdd512213b910&units=metric`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             document.getElementById('temperature').innerText = data.main.temp;
//             document.getElementById('location').innerText = data.name;
//             document.getElementById('weather').innerText = data.weather[0].main;
//             document.getElementById('image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//         })
//         .catch(error => console.log(error));
// }

// weatherUpdate('Dhaka');











// const loadWeather = () => {
//     const weatherDatas = document.createElement('div');

//     document.getElementById("demo").appendChild(weatherDatas);

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=dhaka&appid=32ba0bfed592484379e51106cef3f204`)
//         .then(res => res.json())
//         .then(data => {
//             const datas = data.list;
//             console.log(datas);
//             weatherDatas.innerHtml = `${datas.map(function(item){
//                 return `
//                 <div class="weather-status text-white text-center">
//                     <img id="image" src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
//                     <h1 id="location">Weather</h1>
//                     <h3><span id="temperature">${item.main.temp}</span>&deg;C</h3>
//                     <h1 id="weather" class="lead"></h1>
//                 </div>
//                 `
//             })}`

//         })
// }

// loadWeather();




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
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

