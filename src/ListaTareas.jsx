
export const ListaTareas = () => {
    return (
        <>
            <section className="vh-100" >
                <div className="container-fluid py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-10 col-xl-10">
                            <div className="card rounded-3">
                                <div className="card-body p-4 m-2">

                                    <h4 className="text-center my-3 pb-3">To Do App</h4>

                                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input type="text" id="form1" className="form-control" placeholder="Enter a task here"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary m-1">Save</button>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-warning m-1" >Get tasks</button>
                                        </div>
                                    </form>

                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Todo item</th>
                                                <th scope="col">Status</th>
                                                <th scope="col" >Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Buy groceries for next week</td>
                                                <td>In progress</td>
                                                <td className="text-center">
                                                    <button type="submit" className="btn btn-danger m-1 ">Delete</button>
                                                    <button type="submit" className="btn btn-success m-1">Finished</button>
                                                    <button type="submit" className="btn btn-primary m-1">Save</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Renew car insurance</td>
                                                <td>In progress</td>
                                                <td className="text-center" >
                                                    <button type="submit" className="btn btn-danger m-1">Delete</button>
                                                    <button type="submit" className="btn btn-success ms-1 m-1">Finished</button>
                                                    <button type="submit" className="btn btn-primary m-1">Save</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Sign up for online course</td>
                                                <td>In progress</td>
                                                <td className="text-center">
                                                    <button type="submit" className="btn btn-danger m-1">Delete</button>
                                                    <button type="submit" className="btn btn-success ms-1 m-1">Finished</button>
                                                    <button type="submit" className="btn btn-primary m-1">Save</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}