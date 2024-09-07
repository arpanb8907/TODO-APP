import { useContext, useEffect, useState } from "react";
import { database } from "./firebase";
import AuthContext from "./Context/AuthContext";
import { query, where, getDocs, addDoc, and } from "firebase/firestore";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

function Task(props) {
  const [isediting, setisediting] = useState(false);
  const [editinput, seteditinput] = useState("");
  const { auth } = useContext(AuthContext);

  function handleditchange(e) {
    seteditinput(e.target.value);
  }

  function handleEdit() {
    setisediting(!isediting);
  }
  function handleDelete() {
    // we need to first delete from local storage then we will delete from arr data .

    const local_arr = JSON.parse(localStorage.getItem("task_arr")).filter(
      (item, index) => index !== props.index
    );

    localStorage.setItem("task_arr", JSON.stringify(local_arr));

    props.setarr_data((prev) => {
      const arr = prev.filter((item, index) => index !== props.index);
      return arr;
    });
  }

  function modify_arr(tasklist){

    props.setarr_data((prev)=>{
      const arr = [...prev]

      arr[props.index].taskname = editinput
      return arr

    })

    //console.log(props.arr_data[props.index].taskname);
    
  }
  async function saveinput() {

    

    const tasklist = doc(database, "todos", props.item.id);
    //console.log(props.item.id);

    await updateDoc(tasklist, {
      taskname: editinput,
    });

   
    
    modify_arr(tasklist)

    


    
    
    //console.log(props.arr_data);
    
    if (isediting) setisediting(!isediting);
  }

  return (
    <tbody>
      <tr className="fw-normal">
        <td scope="col">
          <span>{props.item.taskname}</span>
        </td>
        <td scope="col">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleEdit}
          >
            Edit
          </button>
        </td>

        {isediting && (
          <td>
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Enter text"
                value={editinput}
                onChange={handleditchange}
              />

              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-success"
                onClick={saveinput}
              >
                Save
              </button>
            </div>
          </td>
        )}

        <td scope="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Task;
