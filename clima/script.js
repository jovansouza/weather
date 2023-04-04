const apikey = "22abaa27602063daef2c17d76e96fa7b";
const apicountryurl="https://flagcdn.com/16x12/.png";

const cityinput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityelement = document.querySelector("#city");
const tempelement = document.querySelector("#temperature span");
const descelement = document.querySelector("#description ");
const weathericonelement = document.querySelector("#weahter icon");
const countryelement = document.querySelector("#country");
const umidityelement = document.querySelector("#umidity span");
const windelement = document.querySelector("#wind span");

//funções
const getweatherdata = async(city) =>{

    const apiweatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&untis=metric&appid=${apikey}&lang=pt_br`;

    const res = await fetch(apiweatherurl);
    const data = await res.json();

    return data;
};

const showweatherdata = async (city) => {
  const data = await getweatherdata(city);

  cityelement.innerText = data.nome
};

//eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityinput.value;

    showweatherdata(city);
});