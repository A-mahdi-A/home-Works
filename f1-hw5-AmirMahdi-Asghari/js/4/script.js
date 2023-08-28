const data = new XMLHttpRequest();
data.open("get", "https://goweather.herokuapp.com/weather/Curitiba")
data.send();
console.log(data);
data.onload = function () {
    const response = this.responseText;
    console.log(JSON.parse(response))
}