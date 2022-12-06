import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

function ImageSlider({data,loading,error}) {
  return (

    <Carousel fade>
    {loading && 
    <center>
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </center>
    }

    {error && 
     <Alert  variant="danger">
     Server Issue
   </Alert>
    }
   
    {data.map((value)=>{
return(
    <Carousel.Item interval={3000} key={value.id}>
    <div className='container'>
    <img
      className="col-md  mt-0"
      src={value.attributes.img}
      alt="First slide"
      style={{height:"700px",width:'100%',display:'flex'}}
    />
    </div>
  </Carousel.Item>
)
   })}

</Carousel>
    
      
    
  )
}

export default ImageSlider
