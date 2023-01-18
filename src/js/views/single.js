import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cartadetalles } from "../component/cartadetalles.js";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const [detallePersonaje, setDetallePersonaje] = useState({});
  const params = useParams();
  console.log(params);
  //NOTAS
  function obtenerInfoDeCadaPersonajes() {
    //La logica no se renderiza
    fetch("https://swapi.dev/api/people/" + params.theid) // buscar que quede de forma dinamica useParams
      .then((res) => res.json())
      .then((data) => setDetallePersonaje(data))
      .catch((err) => console.error(err));
  }
  console.log(detallePersonaje); //es un objeto que tiene toda la data de un personaje
  console.log(detallePersonaje.name);

  useEffect(() => {
    obtenerInfoDeCadaPersonajes();
  }, []);
  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="jumbotron">
          {/* <hr className="my-4" /> */}
          <Cartadetalles nombre={detallePersonaje.name} />
          <Link to="/">
            <span
              className="btn btn-primary btn-lg position-absolute bottom-0 end-0 my-4 mx-4"
              href="#"
              role="button"
            >
              Back home
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
Single.propTypes = {
  match: PropTypes.object,
};
