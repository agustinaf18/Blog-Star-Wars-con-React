import React, {useContext} from "react"; //hacemos los pasos de usecontext 1
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // 2

export const Navbar = () => {
	const {store}=useContext(Context); //store porque quiero acceder a favoritos
	console.log(store.favoritos);
	
	return (
		
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://pluspng.com/img-png/png-star-wars-star-wars-icon-png-50-px-1600.png"  width="60"  height="60" alt="" /></span>
			</Link>
			{/* <div className="ml-auto mx-5">
				<Link to="/demo">
					<button className="btn btn-primary mx-">Favorites</button>
				</Link>
			</div> */}


			<li className="nav dropdown">
    <a className="nav-link dropdown-toggle btn btn-primary text-white mx-5" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favorites</a>
	<ul className="dropdown-menu mx-5">
        {store.favoritos.map((item, index) => <div className="row" key={index}><button className="list-group-item btn btn-outline-primary col-10">{item.nombresdecadatema} {index.id} </button></div>)}
    </ul>
  </li>
		</nav>
	);
};

// no ponemos {index.id} en el map porque no precisamos que se uestre en la parte cuando aparece en la listadesplegable
//y despues que terminamos la funcion de agregarFavoritos se hace el map store.favoritos como ultimo va a recorrer el [] favoritos {item.nombresdecadatema} va a mostrar eso 

//y con .{item.nombresdecadatema} es lo que queremos que se vea en el menu desplegable
