import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";

export interface JuegoModel {
    image: string;
    nombre: string;
    precio: number;
    genero: string;
    id: string;
    idiomas: [];
    plataforma: string;
    desarrollador: string;
    lanzamiento: string;
    duracion: string;
    jugadores: string;
    niveles: [];
    personajes: string;
    historia: string
    objetos: string
    enemigos: []
    objetivos: []
    mundos: []
    modo_multijugador: boolean
    modo_en_linea: boolean
    sistema_puntuacion: boolean
    sistema_guardado: boolean
    tutorial: boolean
    opciones: string
    dificultad: string
}

const AppJuegos = () => {
    const [listaJuegos, setListaJuegos] = useState<JuegoModel[]>([]);
    const juegoCollection = collection(db, "juegos");

    const obtenerJuegos = async () => {
        getDocs(juegoCollection);
        const data = await getDocs(juegoCollection);
        const values = data.docs.map((doc) => ({
            ...(doc.data() as JuegoModel), // Asegura el tipado de la noticia
            id: doc.id,
        }));
        setListaJuegos(values);
    };

    const eliminarJuegos = async (id: string) => {
        const juegoDoc = doc(db, "juegos", id);
        await deleteDoc(juegoDoc);
        obtenerJuegos();
    };
    useEffect(() => {
        obtenerJuegos();
    }, []);
    console.log(`DEBERIA VERSE ${listaJuegos}`);

    return (
        <div className="flex">
            <Link to={"/crear"} className="btn-crear">
                +Juego
            </Link>
            <h1>Esta es la Pagina de juegos</h1>
            <div className="lista-juegos">
                {listaJuegos.map((juego) => (
                    <div>
                        <div className="tarjeta-videojuego">
                            {/* <NavLink to={"/perfiljuego/" + juego.id}> */}
                                <div className="imagen">
                                    <img src={juego.image} />
                                </div>

                                <div className="descripcion">
                                    <span className="transparente">
                                        {juego.genero}
                                    </span>
                                    <span className="texto-grande">
                                        {juego.nombre}
                                    </span>
                                    <span>
                                        {/* $ */}
                                        {juego.precio?.toLocaleString("es-CO", {
                                            style: "currency",
                                            currency: "COP",
                                        })}
                                    </span>
                                </div>
                            {/* </NavLink> */}
                            <button
                                onClick={() => {
                                    eliminarJuegos(juego.id);
                                }}
                                className="btn'eliminar"
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppJuegos;
