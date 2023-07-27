import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig/firebase";
import "./styles.scss";
import { JuegoModel } from "../AppJuegos/appJuegos";


interface ColecctionData {
    enemigo: string;
    idioma: string;
    mundo: string;
    nivel: string;
    objetivo: string;
}

const CrearJuego = () => {
    const [juego, setJuego] = useState<JuegoModel>({
        nombre: "",
        image: "",
        precio: 0,
        genero: "",
        id: "",
        idiomas: [],
        plataforma: "",
        desarrollador: "",
        lanzamiento: "",
        duracion: "",
        jugadores: "",
        niveles: [],
        personajes: "",
        historia: "",
        objetos: "",
        enemigos: [],
        objetivos: [],
        mundos: [],
        modo_multijugador: true,
        modo_en_linea: true,
        sistema_puntuacion: true,
        sistema_guardado: true,
        tutorial: true,
        opciones: "",
        dificultad: "",
    });

    {
        //PRACTICA USESTATE TRAYENDO LOS VALORES PARA CAMBIAR, AGREGAR O ACTUALIZAR

        const [nombres, setNombres] = useState({
            nombre: "Jero",
            apellido: "Franco",
            edad: 12,
        });

        const [listaValores, setListaValores] = useState([
            "valor1",
            "valor2",
            "valor3",
        ]);

        const actualizarLista = () => {
            setListaValores([...listaValores, "valor4"]);
        };

        const actualizarApellido = () => {
            setNombres({ ...nombres, apellido: "ramirez" });
        };
    } //FINAL PRACTICA USESTATE

    const [listaColeccion, setListaColeccion] = useState<ColecctionData[]>([]);
    const JuegosCollection = collection(db, "juegos");
    const IdiomasCollection = collection(db, "idiomas");
    const EnemigosCollection = collection(db, "enemigos");
    const NivelesCollection = collection(db, "niveles");
    const MundosCollection = collection(db, "mundos");
    const ObjetivosCollection = collection(db, "objetivos");
    // const listaJuegos = [
    //     IdiomasCollection,
    //     EnemigosCollection,
    //     NivelesCollection,
    //     MundosCollection,
    //     ObjetivosCollection,
    // ];

    const crearJuego = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        await addDoc(JuegosCollection, juego);
    };

    const obtenerIdiomas = async () => {
        // getDocs(IdiomasCollection);
        const data = await getDocs(IdiomasCollection);
        const value1 = data.docs.map((doc) => ({
            ...(doc.data() as ColecctionData),
            id: doc.id,
        }));
        setListaColeccion(value1);
    };
    const obtenerNiveles = async () => {
        getDocs(NivelesCollection);
        const data = await getDocs(NivelesCollection);
        const value2 = data.docs.map((doc) => ({
            ...(doc.data() as ColecctionData),
            id: doc.id,
        }));
        setListaColeccion(value2);
    };
    const obtenerEnemigos = async () => {
        getDocs(EnemigosCollection);
        const data = await getDocs(EnemigosCollection);
        const value3 = data.docs.map((doc) => ({
            ...(doc.data() as ColecctionData),
            id: doc.id,
        }));
        setListaColeccion(value3);
    };
    const obtenerObjetivos = async () => {
        getDocs(ObjetivosCollection);
        const data = await getDocs(ObjetivosCollection);
        const value4 = data.docs.map((doc) => ({
            ...(doc.data() as ColecctionData),
            id: doc.id,
        }));
        setListaColeccion(value4);
    };
    const obtenerMundos = async () => {
        getDocs(MundosCollection);
        const data = await getDocs(MundosCollection);
        const value5 = data.docs.map((doc) => ({
            ...(doc.data() as ColecctionData),
            id: doc.id,
        }));
        
        setListaColeccion(value5);
    };
    useEffect(() => {
        obtenerIdiomas();
        obtenerEnemigos();
        obtenerNiveles();
        obtenerObjetivos();
        obtenerMundos();
    }, []);

    console.log("DEBERIA VERSE", doc);

    return (
        <div>
            <div>
                <h1>Crear Juego</h1>

                <form onSubmit={crearJuego} className="divFormulario">
                    <input
                        type="text"
                        onChange={(e) =>
                            setJuego({ ...juego, image: e.target.value })
                        }
                        placeholder="Agrega La URL De La Image"
                        className="inpuImg"
                        value={juego.image}
                    />

                    <div className="dos-columnas">
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({ ...juego, nombre: e.target.value })
                            }
                            placeholder="Agrega El Nombre"
                            className="inputFormulario"
                            value={juego.nombre}
                        />
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({ ...juego, genero: e.target.value })
                            }
                            placeholder="Agrega El Genero"
                            className="inputFormulario"
                            value={juego.genero}
                        />
                    </div>
                    <div className="grid-template">
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({
                                    ...juego,
                                    precio: parseInt(e.target.value),
                                })
                            }
                            placeholder="Agrega El Precio"
                            className="inputFormulario"
                            value={juego.precio}
                        />
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({
                                    ...juego,
                                    plataforma: e.target.value,
                                })
                            }
                            placeholder="Agrega la plataforma"
                            className="inputFormulario"
                            value={juego.plataforma}
                        />
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({
                                    ...juego,
                                    desarrollador: e.target.value,
                                })
                            }
                            placeholder="Agrega desarrollador"
                            className="inputFormulario"
                            value={juego.desarrollador}
                        />
                    </div>

                    <div className="grid-template">
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({
                                    ...juego,
                                    lanzamiento: e.target.value,
                                })
                            }
                            placeholder="Agrega el lanzamiento"
                            className="inputFormulario"
                            value={juego.lanzamiento}
                        />
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({ ...juego, duracion: e.target.value })
                            }
                            placeholder="Agrega la duracion"
                            className="inputFormulario"
                            value={juego.jugadores}
                        />
                    </div>

                    <div className="grid-template">
                        <div>
                            <span className="span-titulo">idiomas</span>
                            <select name="" id="" className="dropdown">
                                <option value="">seleccione una opcion</option>
                                {listaColeccion.map((lista) => (
                                    <option value="">
                                        {lista.idioma}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({
                                    ...juego,
                                    personajes: e.target.value,
                                })
                            }
                            placeholder="Agrega la duracion"
                            className="inputFormulario"
                            value={juego.personajes}
                        />
                        <div>
                            <span className="span-titulo">niveles</span>
                            <select name="" id="" className="dropdown">
                                <option value="">seleccione una opcion</option>
                                {listaColeccion.map((lista) => (
                                    <option value="">{lista.nivel}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid-template">
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({
                                    ...juego,
                                    historia: e.target.value,
                                })
                            }
                            placeholder="Agrega la duracion"
                            className="inputFormulario"
                            value={juego.historia}
                        />
                        <input
                            type="text"
                            onChange={(e) =>
                                setJuego({
                                    ...juego,
                                    objetos: e.target.value,
                                })
                            }
                            placeholder="Agrega la duracion"
                            className="inputFormulario"
                            value={juego.objetos}
                        />
                        <div>
                            <span className="span-titulo">enemigos</span>
                            <select name="" id="" className="dropdown">
                                <option value="">seleccione una opcion</option>
                                {listaColeccion.map((lista) => (
                                    <option value="">{lista.enemigo}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* <div className="grid-template"></div> */}
                    <div className="grid-template">
                        <div>
                            <span className="span-titulo">objetivos</span>
                            <select name="" id="" className="dropdown">
                                <option>seleccione una opcion</option>
                                {listaColeccion.map((lista) => (
                                    <option value="">{lista.objetivo}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <span className="span-titulo">mundos</span>
                            <select name="" id="" className="dropdown">
                                <option>seleccione una opcion</option>
                                {listaColeccion.map((lista) => (
                                    <option value="">{lista.mundo}</option>
                                ))}
                            </select>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <label>Modo_Multijugador</label>
                        </div>
                    </div>
                    <div className="grid-template">
                        <div className="check">
                            <input type="checkbox" />
                            <label>modo_en_linea</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <label>Sistema_puntuacion</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <label>Sistema_Guardado</label>
                        </div>
                    </div>
                    <div className="grid-template">
                        <div className="check">
                            <input type="checkbox" />
                            <label>tutorial </label>
                        </div>
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <button>Crear</button>
                </form>
            </div>
        </div>
    );
};

export default CrearJuego;
