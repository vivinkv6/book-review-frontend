import React from 'react'
import {GoogleMap,Marker,useLoadScript} from '@react-google-maps/api'
import './styles/map.css';
function Map({location,key}) {
    const{load}=useLoadScript({
        googleMapsApiKey:`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    })
    const{lat,lng}=location;
    
  return (
    <>
    {load && <h1>Loading</h1> }
   <div key={key}>
     <GoogleMap  zoom={10} center={{lat:lat,lng:lng}} mapContainerClassName="map">

        <Marker position={{lat:lat,lng:lng}}/>

     </GoogleMap> 
     </div>
    
    </>
  )
}

export default Map
