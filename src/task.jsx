
function Task(props){

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
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Task