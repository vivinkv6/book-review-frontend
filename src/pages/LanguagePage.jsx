import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function LanguagePage({language,data}) {
 
  return (
    <>
    <div  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      Language
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Link to='/english' style={{textDecoration:'none'}}><Dropdown.Item href="/english">English</Dropdown.Item></Link>
    <Link to='/malayalam' style={{textDecoration:'none'}}> <Dropdown.Item href="/malayalam">Malayalam</Dropdown.Item></Link>
    <Link to='/hindi' style={{textDecoration:'none'}}> <Dropdown.Item href="/hindi">Hindi</Dropdown.Item></Link>
    </Dropdown.Menu>
  </Dropdown>


 
 <div className="container">
  <div className="row">
    
  {data.length == 0 && 

<h1 className='text-light text-center'>No {language} books</h1>

}


  {data.filter(value=>value.attributes.language === language).map((value)=>{
    return(

      <div className="col-md-3 " key={value.id}>
              
          <Card className="bg bg-light" style={{ width: "13rem",marginTop:'20px'}}>
            <Card.Img variant="top" style={{height:"200px"}} src={value.attributes.img} />
            <Card.Body className="bg bg-light text-secondary">
              <Card.Title>{value.attributes.title}</Card.Title>
              <Link to={`${value.id}`} style={{textDecoration:'none'}}>
              <Button variant="primary">Details</Button>
              </Link>
            </Card.Body>
          </Card> 
          
        </div>

    )
  })}
  </div>
</div>
 
 

  </div>

  </>
  )
}

export default LanguagePage
