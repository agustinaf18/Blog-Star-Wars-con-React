import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import { Characters }  from "../component/characters";
import { Planets }  from "../component/planets";
import { Vehicles }  from "../component/vehicles";

export const Home = () => {
    const [personajes, setPersonajes]=useState([])
    // const [detallePersonaje, setDetallePersonaje]=useState({})
	
 function obtenerPersonajes(){                                 //La logica no se renderiza
	 fetch("https://swapi.dev/api/people/")
    .then(res => res.json())
    .then(data => setPersonajes(data.results))
    .catch(err => console.error(err))
 } 
console.log(setPersonajes);



useEffect(() => {
	obtenerPersonajes();
	// obtenerInfoDeCadaPersonajes()

}, [])
console.log(personajes); //por ahora el personajes es un array vacio, linea 8  pero al setear el nuevo valor que vamos a setear en la linea 14, setPersonaje(data.results) vamos a guardar en setPersoanjes, guardamos data y dentro de data results. y asi por ejemplo si queremos acceder a algo mas data. eso 

 return(
	<>
	<h1 className="text-danger mx-5 container">Characters</h1>
    <div className="d-flex justify content center mx-5 my-2 overflow-auto
">      
		{ personajes.map((item, index)=><Characters key={index} id={index + 1} nombre={item.name} genero={item.gender} pelo={item.hair_color} ojos={item.eye_color}/> )}
	</div>   
	{/* pasamos por parametros el index, ya que la api no tenia id, entonces, id corresponde a nuestro index, y como el index empieza en la posicion 0, ej 0:name: luke skywalker le debemos sumar 1, asi empieza en 1 asi: id: 1, nombre: 'Luke Skywalker', genero: 'male', pelo: 'blond', ojos: 'blue'} */}

   <div className="text-start mt-2 mx-5 text-danger">
		<h1>Planets</h1>
	</div>   

	<div className="container-fluid row g-0 my-2">
      <div className="col-3"><Planets/></div>
	  {/* <div className="col-3"><Planets/></div>
	  <div className="col-3"><Planets/></div>
	  <div className="col-3"><Planets/></div> */}
   </div>


   <div className="text-start mt-2 mx-5 text-danger">
		<h1>Vehicles</h1>
	</div>

	<div className="container-fluid row g-0 my-2">
      <div className="col-3"><Vehicles/></div>
	  {/* <div className="col-3"><Vehicles/></div>
	  <div className="col-3"><Vehicles/></div>
	  <div className="col-3"><Vehicles/></div> */}
   </div>
	</>
);
}



