var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var weather = document.querySelector('#weather')
 
apik = "76f59a5ff3bd295292bbb8f3475442f9"



function convertion(val){
    return (val - 273).toFixed(2)
}

    btn.addEventListener('click', function(){



        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())

        .then(data => {
            console.log(data)

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
          
            weather.innerHTML=`
            <div class="row"> 
              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon"/>
            </div>
            <div>
              <h2>${convertion(data.main.temp)} °C</h2>
              <h4> ${data.weather[0].main} </h4>
            </div>
            `;
        })

//Now the condition must be added that what if you do not input anything in the input box.
        .catch(err => {
          weather.innerHTML = `
            <div class="row"> 
              <h4>The City you have entered does no exist!</h4>
            </div>`
        })
    })
//If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.
