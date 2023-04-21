import { useEffect, useState } from "react";

export const ListaTareas = () => {
    const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []);
    const [editandoTarea, setEditandoTarea] = useState(null);
    const [nombreTarea, setNombreTarea] = useState("");
    const [descripcionTarea, setDescripcionTarea] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaCierre, setFechaCierre] = useState("");
    const [creadorTarea, setCreadorTarea] = useState("");

    const borrarCamposFormulario = () => {
        setNombreTarea("");
        setDescripcionTarea("");
        setFechaInicio("");
        setFechaCierre("");
        setCreadorTarea("");
    };

    const enviarFormulario = (event) => {
        event.preventDefault();
        const tarea = {
            nombre: nombreTarea,
            descripcion: descripcionTarea,
            fechaInicio: fechaInicio,
            fechaCierre: fechaCierre,
            creador: creadorTarea,
            estado: "en-progreso",
        };
        if (editandoTarea !== null) {
            const nuevasTareas = [...tareas];
            nuevasTareas[editandoTarea] = tarea;
            setTareas(nuevasTareas);
            setEditandoTarea(null);
        } else {
            setTareas([...tareas, tarea]);
        }
        event.target.reset();
        borrarCamposFormulario()
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        if (editandoTarea !== null && editandoTarea === index) {
            setEditandoTarea(null);
        }
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

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
            <section className="vh-100">
                <div className="container-fluid py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-10 col-xl-10">
                            <div className="card rounded-3">
                                <div className="card-body p-4 m-2">
                                    <h4 className="text-center my-3 pb-3">To Do App</h4>

                                    <form onSubmit={enviarFormulario} className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input type="text" id="formNombreTarea" className="form-control" placeholder="Nombre de la tarea" value={nombreTarea} onChange={(e) => setNombreTarea(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <textarea id="formDescripcionTarea" className="form-control" placeholder="Descripción de la tarea" value={descripcionTarea} onChange={(e) => setDescripcionTarea(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-outline">
                                                <input type="date" id="formFechaInicio" className="form-control" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-outline">
                                                <input type="date" id="formFechaCierre" className="form-control" value={fechaCierre} onChange={(e) => setFechaCierre(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input type="text" id="formCreadorTarea" className="form-control" placeholder="Nombre y apellido del creador de la tarea" value={creadorTarea} onChange={(e) => setCreadorTarea(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary m-1">
                                                Save
                                            </button>
                                        </div>
                                    </form>

                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">tarea</th>
                                                <th scope="col">descripcion</th>
                                                <th scope="col">fechaInicio</th>
                                                <th scope="col">fechaCierre</th>
                                                <th scope="col">creador</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tareas.map((tarea, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{tarea.nombre}</td>
                                                    <td>{tarea.descripcion}</td>
                                                    <td>{tarea.fechaInicio}</td>
                                                    <td>{tarea.fechaCierre}</td>
                                                    <td>{tarea.creador}</td>
                                                    <td className="text-center">
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
            </section>
        </>
    );
};