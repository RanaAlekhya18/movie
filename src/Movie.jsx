import React from 'react'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Carousel } from 'bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';


const Movie = () => {
    let [state,setstate]=useState([])
    let [search,setsearch]=useState("");
    let navigate=useNavigate();
    
    useEffect(()=>{
        let api=fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=45862568038e861b5ac52603dcbc7a21&language=en-US")
            api.then(x=>x.json().then(x=>setstate(x.results)))
    },[])
    
   function moviesearch() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1fe4ba70475442225a237aefdf241318`)
    .then(x=>x.json()).then(x=>setstate(x.results)).catch((e)=>console.log(e))
   }
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">World Wide Movie 🎬</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home 🎞️</Nav.Link>
            <Nav.Link href="#action2">Link 🎥</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action 📽️</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Movie search "
              className="me-2"
              aria-label="Search"
            
              onChange={(e)=>setsearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={moviesearch}>Search </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
       {/* ===============Navbar=============== */}

    <Carousel>
        {state.map((x,y)=>{
            return(
                <div id='bar' key={y}>
                <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} id='imgbar'/>
                <div  className="legend" style={{height:"70px",backgroundColor:"lightgray"}}>
                <h1 style={{color:"black",fontFamily:"monospace"}}>{x.title} 🎦</h1><hr/>
                
                </div>
            </div>
            );
        })}
               
                </Carousel>

       {/* ==========carousel========== */}

        
           <div id='cardparent' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
            {
            state.map((x,ind)=>{
                return(
    <Card style={{ width: '18rem',marginBottom:"30px",border:"solid 3px" }} key={ind}>

      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} />
      <Card.Body>

        <Card.Title> 🎬 {x.title}</Card.Title>
        <Card.Text>{x.overview}</Card.Text>
        <button onClick={()=>{navigate("/movies",{state:{x}})}} id='bt'>More Details</button>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release Date : {x.release_date} 🍿</ListGroup.Item>
        <ListGroup.Item>Voted : {x.vote_count} ✋</ListGroup.Item>
      </ListGroup>

    </Card>

                )
            })}
                
    </div>

    {/* ================Cards============== */}
    </div>
  )
}

export default Movie