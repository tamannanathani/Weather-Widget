import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';

import './infoBox.css'
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let HOT_URL="https://images.unsplash.com/photo-1704396357569-838bbd5c46c9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D";

    let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let RAIN_URL="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";
    
    return(
        <div className="infoBox">
            <h2>Weather-Info</h2>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?
            RAIN_URL:
            info.temp>15?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{
        info.humidity>80?
            <ThunderstormIcon/>:
            info.temp>15?<SunnyIcon/>:<SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" color= 'text.secondary' component= {"span"}>
           <p>Temperature={info.temp}&deg;C</p>
           <p>Humidity={info.humidity}</p>
           <p>Minumum Temperature={info.tempMin}</p>
           <p>Maximum Temperature={info.tempMax}</p>
           <p>The weather csn be described as {info.weather}and it feels Like <i>{info.feelslike}</i></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}