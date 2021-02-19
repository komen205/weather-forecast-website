import Head from 'next/head'
import { useEffect, useState } from 'react';
import WeatherWidget from '../components/WeatherWidget';



export default function Home() {
  const [weather, setWeather] = useState(null);
  const [ip, setIp] = useState('');

  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    async function ipgrab() {
      let h = new Headers();
      h.append('Accept', 'application/json');
      h.append('Content-Type', 'application/json');

      var myInit = {
        method: 'GET',
        headers: h,
        cache: 'default',
        mode: 'cors'
      };

      const api = '5629d244e09540b1837e660ee924bb48';
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${api}`;
      const myRequest = await fetch(url);



      const response = await fetch(url);
      const data = await response.json();

      const dataObject = {
        coords: {
          latitude: data.latitude,
          longitude: data.longitude,
        }
      }
      setIp(dataObject);

    }


    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    ipgrab();
    navigator.geolocation.getCurrentPosition(success, error, options);

  }, []);
  var crd = '';
  async function success(pos) {
    try {
      var crd = pos.coords;
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&lang=pt&units=metric&appid=1eb616ffcdbab7f52753d435c4b95522`;

      const response = await fetch(url);
      const data = await response.json();
      //const stringObject = JSON.stringify(data)

      if (!response.ok) {
        console.log('Something went wrong', data);
      }
      setWeather(data);

    }
    catch (e) { console.log('error' + e); }
  }
  success(ip);

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
          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
        </Head>

        <main>



          <WeatherWidget
            config={{
              unit: 'metric',
              locale: 'zh-tw',
            }}
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

