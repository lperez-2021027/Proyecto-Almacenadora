import { useEffect, useState } from "react";
import { AgregarTareaForm } from "./AgregarTareaForm";
import './assets/style.css'

export const ListaTareas = () => {

    const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []);
    const [editandoTarea, setEditandoTarea] = useState(null);
    const [nombreTarea, setNombreTarea] = useState("");
    const [descripcionTarea, setDescripcionTarea] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaCierre, setFechaCierre] = useState("");
    const [creadorTarea, setCreadorTarea] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        if (editandoTarea !== null && editandoTarea === index) {
            setEditandoTarea(null);
        }
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
        const a = document.getElementById("flexCheckDefault")
        console.log(a.value);

    };

    // let textSuccess = {
    //     textDecoration: 'line-through'
    // }

    useEffect(() => {
        const tareasGuardadas = localStorage.getItem("tareas");
        if (tareasGuardadas) {
            setTareas(JSON.parse(tareasGuardadas));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    return (
        <>
            {/* ------------------- CONTAINER -------------------*/}
            <section className="vh-100">
                <div className="container-fluid py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-10 col-xl-10">
                            <div className="card rounded-3">
                                <div className="card-body p-4 m-2">

                                    <h4 className="text-center my-3 pb-3">Lista de tareas</h4>

                                    <AgregarTareaForm
                                        tareas={tareas}
                                        setTareas={setTareas}
                                        editandoTarea={editandoTarea}
                                        setEditandoTarea={setEditandoTarea}
                                        nombreTarea={nombreTarea}
                                        setNombreTarea={setNombreTarea}
                                        descripcionTarea={descripcionTarea}
                                        setDescripcionTarea={setDescripcionTarea}
                                        fechaInicio={fechaInicio}
                                        setFechaInicio={setFechaInicio}
                                        fechaCierre={fechaCierre}
                                        setFechaCierre={setFechaCierre}
                                        creadorTarea={creadorTarea}
                                        setCreadorTarea={setCreadorTarea}
                                    />

                                    {/* ------------------- TABLA -------------------*/}
                                    <div className="table-responsive">

                                        <table className="table mb-4 table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No.</th>
                                                    <th scope="col">Tarea</th>
                                                    <th scope="col">Descripción</th>
                                                    <th scope="col">Fecha de Inicio</th>
                                                    <th scope="col">Fecha de Cierre</th>
                                                    <th scope="col">Usuario</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tareas.map((tarea, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td className={isChecked ? "completed" : ""} >
                                                            {tarea.nombre}
                                                        </td>
                                                        <td className={isChecked ? "completed" : ""} >{
                                                            tarea.descripcion}
                                                        </td>
                                                        <td className={isChecked ? "completed" : ""} >
                                                            {tarea.fechaInicio}
                                                        </td>
                                                        <td className={isChecked ? "completed" : ""} >
                                                            {tarea.fechaCierre}
                                                        </td>
                                                        <td className={isChecked ? "completed" : ""} >
                                                            {tarea.creador}
                                                        </td>
                                                        {/* style={textSuccess} */}
                                                        <td className="">
                                                            <div className="text-center">

                                                                <button type="button" className="btn btn-danger m-1" onClick={() => eliminarTarea(index)}>
                                                                    Eliminar
                                                                </button>

                                                                <button type="button" className="btn btn-success m-1" onClick={() => {
                                                                    setNombreTarea(tarea.nombre);
                                                                    setDescripcionTarea(tarea.descripcion);
                                                                    setFechaInicio(tarea.fechaInicio);
                                                                    setFechaCierre(tarea.fechaCierre);
                                                                    setCreadorTarea(tarea.creador);
                                                                    setEditandoTarea(index);
                                                                }}>
                                                                    Editar
                                                                </button>

                                                            </div>
                                                            <div className="form-check ">

                                                                <input className="form-check-input" type="checkbox"
                                                                    onChange={handleCheckboxChange} checked={isChecked}
                                                                    id="flexCheckDefault" />

                                                                <label className="form-check-label " >
                                                                    Tarea realizada
                                                                </label>
                                                                
                                                            </div>

                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};