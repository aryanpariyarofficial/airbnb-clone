import Map from 'react-map-gl';

function Mapp() {
 
  return 
    <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle='mapbox://styles/aryanpariyar/clbbzjybs000014muujyl5q6h'
    mapboxAccessToken={process.env.mapboxAccessToken}
    />;  
    }

export default Mapp;


    // mapStyle="mapbox://styles/mapbox/streets-v9"


 // const [viewport, setViewport] = useState({
  //   width: '100%',
  //   height: '100%',
  //   latitude: 37.7857,
  //   longitude: -122.7857,
  //   zoom: 7
  // });