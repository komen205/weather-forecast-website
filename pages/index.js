import Head from 'next/head'
import { useEffect, useState } from 'react';
import WeatherWidget from '../components/WeatherWidget';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [coords, setCoords] = useState('');
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    async function ipgrab() {
      const api = '5629d244e09540b1837e660ee924bb48';
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${api}`;
      const response = await fetch(url);
      const data = await response.json();
      const dataObject = {
        coords: {
          latitude: data.latitude,
          longitude: data.longitude,
        }, city: data.city
      }
      return dataObject;
    }

  
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    ipgrab().then(response => {
      success(response);
    }).catch(error => {
      navigator.geolocation.getCurrentPosition(success,error,options);
    });

  }, []);

  async function success(pos) {
    try {
      var crd = pos.coords;
      const api = '271ada6100b3009346e7b3f5276ad6bf';
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&lang=pt&units=metric&appid=${api}`;

      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);

    }
    catch (e) { console.log(e); }
  }




  if (!weather) return <div>Waiting for location...</div>

  if (weather != null) {
    const temp = weather.daily.map(hine => hine.temp.eve);
    const fullDate = weather.daily.map(home => new Date(home.dt * 1000));
    const date = weather.daily.map(home => new Date(home.dt * 1000).getDate());
    const data = {
      labels: date,
      datasets: [{
        label: 'Temperature',
        data: temp,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }], options: {
        responsive: true
      }

    }
    return (


      <div className="container">
        <Head>
          <title>Temperature of next 7 days</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
        </Head>

        <main>



          <WeatherWidget
            config={{
              unit: 'metric',
              locale: 'zh-tw',
            }} city={coords.city}
            forecast={weather.daily}
          />

        </main>


        <footer>

        </footer>

        <style jsx>{`
       
      `}</style>
      </div>
    )
  }
}

