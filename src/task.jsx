


function Task(props){

    function handleDelete(){

        //console.log("props index", props.index)
        // first we have to delete local storage before deleting in arr data
        
        let cur_local_data = JSON.parse(localStorage.getItem("task_arr"))
        cur_local_data = cur_local_data.filter((item, index) => index != props.index)
        localStorage.setItem("task_arr", JSON.stringify(cur_local_data))
        console.log("cur_local_data", cur_local_data)

        props.setarr_data((prev) => prev.filter(
            (item, index) => index != props.index
        ))
    }

    return(
        <tbody >
            <tr className="fw-normal" >
                <td scope="col">
                    <span>{props.item}</span>
                </td>
                <td scope="col">
                    <button type="button" className="btn btn-warning">Edit</button>
                </td>
                <td scope="col">
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Task