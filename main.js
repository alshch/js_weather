
function onLoad() {
    const host = 'https://weatherapi-com.p.rapidapi.com/forecast.json?';
    
    for (let i = 0; i < 4; i++) {
      var url = '';

      switch (i) {
        case 0:
          url = host + 'q=Moscow&days=3&lang=RU';
          break;
        case 1:
          url = host + 'q=Vologda&days=3&lang=RU';
          break;
        case 2:
          url = host + 'q=Cherepovets&days=3&lang=RU';
          break;
        case 3:
          url = host + 'q=Voronezh&days=3&lang=RU';
          break;
      }
      fetchData(url); 
    }
  }
  
  async function fetchData(url) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY, //define in settings.js
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
        
      let row = document.getElementById('weather').insertRow();

      row.appendChild(document.createElement('td')).innerHTML = result.location.name;
      row.appendChild(document.createElement('td')).innerHTML = result.current.temp_c + "°C";
      row.appendChild(document.createElement('td')).innerHTML = result.current.humidity + "%";
      row.appendChild(document.createElement('td')).innerHTML = result.current.condition.text +
      '<img src=' + result.current.condition.icon + '>';
    } catch (error) {
      console.error(error);
    }
  }