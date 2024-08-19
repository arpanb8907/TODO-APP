import { useEffect, useState } from "react"



function Task(props){

    const [isediting,setisediting] = useState(false)
    const [editinput,seteditinput] = useState("")
   

    

    function handleditchange(e){
        seteditinput(e.target.value)
    }
    

    function handleEdit(){

        setisediting(!isediting)
    }
    function handleDelete(){
        
        // we need to first delete from local storage then we will delete from arr data . 
        
        const local_arr = JSON.parse(localStorage.getItem('task_arr')).filter((item,index)=>index!== props.index)
       
        localStorage.setItem('task_arr',JSON.stringify(local_arr))

        props.setarr_data((prev)=>{
            
            const arr = prev.filter((item,index)=> index!==props.index)
            return arr
            
        })

        

    }  
    
    function saveinput(){
        
       
       props.setarr_data((prev)=>{
            
            const arr = [...prev]
            //arr[props.index] = {...arr[props.index],value:editinput}

            //console.log(typeof arr[props.index],typeof editinput);
            arr[props.index] = editinput
            
            return arr 
            
       })

       if(isediting) setisediting(!isediting)
       
        
    }

    return(
        <tbody >
            <tr className="fw-normal" >
                <td scope="col">
                    <span>{props.item}</span>
                </td>
                <td scope="col">
                    <button type="button" className="btn btn-warning" onClick={handleEdit}>Edit</button>
                </td>

                {isediting && (
                    <td>
                    <div className="d-flex align-items-center">
                      <input type="text" className="form-control me-2" placeholder="Enter text" value={editinput} onChange={handleditchange} />

                    

                    
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success" onClick={saveinput}>
                            
                        Save</button>
                    </div>

                   
                  </td>
                )}

                <td scope="col">
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Task