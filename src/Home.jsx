import { useEffect, useState } from "react"
import Task from "./task"

function Home(){

  //console.log(props.x)

    const [formdata,setformdata] = useState('')
    const [arr_data,setarr_data] = useState([])

  // this useEffect will run only one time when the page get reloads
    useEffect(()=>{
      
      
      if(localStorage.getItem('task_arr')){
        // this will run while page loads . Array data will become empty, to prevent that we need to store arr data by the data that is already present in the local storage.

        setarr_data(JSON.parse(localStorage.getItem('task_arr')))
      }
    },[])

// below will run only when anything at array data will be updated.
    useEffect(()=>{
      
      if(arr_data.length > 0){
        localStorage.setItem('task_arr',JSON.stringify(arr_data))
      }
      
      console.log(arr_data);
      
    },[arr_data])

    return(
      <div className="container mt-5">

      <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pt-2">
                <div >
                  <div  className="form-outline">
                      <input type="text" id="form1" className="form-control" placeholder="Enter a task here" value={formdata} onChange={(event)=> setformdata(
                            // By this given input will be set as form data
                            event.target.value
                      )} />
                     
                  </div>
                </div>
                
               


                <div >
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary" onClick={()=>{
                    
                    
                    setarr_data((prev)=>[formdata,...prev])
                    

                  }}>Add</button>
                </div>

               
        </div>
         

        <table className="table text-white mb-0">
            <thead>
              <tr>
                <th scope="col">Task Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            
        

            {
              arr_data.map((item,index) => {
                return <Task item={item} key={index} index={index} setarr_data={setarr_data}  />

            })
            }
         </table> 


      </div>

    )
}

export default Home