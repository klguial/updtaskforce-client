import React,{useState} from 'react';
import Form from './Form';
import logo from './uplogo.png';
import './App.css';


function App() {
  
  const [lat , setLat] = useState()
  const [lng , setLng] = useState()

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        setLat(coords.latitude)
        setLng(coords.longitude)
        });
  }

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        {

        }
          {(!!lat)&&(!!lng)?null:<img src={logo} className="App-logo" alt="logo" />}
          <>
            {
              (!!lat)&&(!!lng)?<Form lat={lat}lng={lng}>Form Here</Form>:<button onClick={getLocation}>Get my location!</button>
            }
          </>
        </header>
      </div>
    </div>
  );
}

export default App;
