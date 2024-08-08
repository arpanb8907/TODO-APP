


function Task(props){

    function handleDelete(){
        
        // we need to first delete from local storage then we will delete from arr data . 
        
        const local_arr = JSON.parse(localStorage.getItem('task_arr')).filter((item,index)=>index!== props.index)
       
        localStorage.setItem('task_arr',JSON.stringify(local_arr))

        props.setarr_data((prev)=>{
            
            const arr = prev.filter((item,index)=> index!==props.index)
            return arr
            
        })

        

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