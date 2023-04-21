export const AgregarTareaForm = (props) => {

    const borrarCamposFormulario = () => {
        props.setNombreTarea("");
        props.setDescripcionTarea("");
        props.setFechaInicio("");
        props.setFechaCierre("");
        props.setCreadorTarea("");
    };

    const enviarFormulario = (event) => {
        
        event.preventDefault();

        if (!props.nombreTarea || !props.descripcionTarea || 
            !props.fechaInicio || !props.fechaCierre || 
            !props.creadorTarea) {
            return;
        }

        const tarea = {
            nombre: props.nombreTarea,
            descripcion: props.descripcionTarea,
            fechaInicio: props.fechaInicio,
            fechaCierre: props.fechaCierre,
            creador: props.creadorTarea
        };
        
        if (props.editandoTarea !== null) {
            const nuevasTareas = [...props.tareas];
            nuevasTareas[props.editandoTarea] = tarea;
            props.setTareas(nuevasTareas);
            props.setEditandoTarea(null);
        } else {
            props.setTareas([...props.tareas, tarea]);
        }
        
        event.target.reset();
        borrarCamposFormulario()
    };

    return (
        <>

            {/* ------------------- FORMULARIO -------------------*/}
            <form onSubmit={enviarFormulario} className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                <div className="col-12">
                    <div className="form-outline">

                        <input type="text" id="formNombreTarea"
                            className="form-control" placeholder="Nombre de la tarea"
                            value={props.nombreTarea} onChange={(e) => props.setNombreTarea(e.target.value)} />

                    </div>
                </div>
                <div className="col-12">
                    <div className="form-outline">

                        <textarea id="formDescripcionTarea"
                            className="form-control" placeholder="Descripción de la tarea"
                            value={props.descripcionTarea} onChange={(e) => props.setDescripcionTarea(e.target.value)} />

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-outline">

                        <input type="date" id="formFechaInicio"
                            className="form-control" value={props.fechaInicio} onChange={(e) => props.setFechaInicio(e.target.value)} />

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-outline">

                        <input type="date" id="formFechaCierre"
                            className="form-control" value={props.fechaCierre} onChange={(e) => props.setFechaCierre(e.target.value)} />

                    </div>
                </div>
                <div className="col-12">
                    <div className="form-outline">

                        <input type="text" id="formCreadorTarea"
                            className="form-control" placeholder="Nombre de usuario"
                            value={props.creadorTarea} onChange={(e) => props.setCreadorTarea(e.target.value)} />

                    </div>
                </div>

                {/* ------------------- ENVIO FORMULARIO -------------------*/}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary m-1">
                        Guardar
                    </button>
                </div>
            </form>
        </>
    )

}