export default async function handler(req, res) {
    
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.latitude}&lon=${req.longitude}&lang=pt&units=metric&appid=1eb616ffcdbab7f52753d435c4b95522`;

    let data = await fetch(url);
    let response = await data.json();
    res.status(200).json(response);

}