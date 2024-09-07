import { useContext, useEffect, useState } from "react";
import Task from "./task";
import { query, where, getDocs, addDoc } from "firebase/firestore";
import { database } from "./firebase";
import AuthContext from "./Context/AuthContext";
import { collection, doc, setDoc } from "firebase/firestore";

function Home() {
  //console.log(props.x)

  const [formdata, setformdata] = useState("");
  const [arr_data, setarr_data] = useState([]);
  const [user, setuserId] = useState(null);
  const { auth } = useContext(AuthContext);
  const [adding, setAdding] = useState(false);
  
  // this useEffect will run only one time when the page get reloads
  // useEffect(() => {
  //   if (localStorage.getItem("task_arr")) {
  //     // this will run while page loads . Array data will become empty, to prevent that we need to store arr data by the data that is already present in the local storage.

  //     setarr_data(JSON.parse(localStorage.getItem("task_arr")));
  //   }
  // }, []);

  // // below will run only when anything at array data will be updated.Below is firestore link

  // // https://console.firebase.google.com/u/0/project/todo-1221b/firestore/databases/-default-/data/~2Fusers~2FkBXWcjQTLWVElF0WziWwnWJe8OD2

  // useEffect(() => {
  //   if (arr_data.length > 0) {
  //     localStorage.setItem("task_arr", JSON.stringify(arr_data));
  //   }

  //   console.log(arr_data);
  // }, [arr_data]);

  async function fetch_data() {
    const q = query(
      collection(database, "todos"),
      where("userId", "==", auth?.user?.uid)
    );

    const querySnapshot = await getDocs(q);
    
    const data = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    });

    //console.log(data)
    
    setarr_data(data);
  }

  useEffect(() => {
    fetch_data();
  }, [auth]);

  async function add_task() {
    //const tasklist = doc(collection(database, "todos"));
    setAdding(true);

    const tasklist = await addDoc(collection(database, "todos"), {
      taskname: formdata,
      userId: auth.user.uid,
    });

    fetch_data();
    //console.log("Document written with ID: ", tasklist.id);
    setAdding(false);
  }

  return (
    <div className="container mt-5">
      <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pt-2">
        <div>
          <div className="form-outline">
            <input
              type="text"
              id="form1"
              className="form-control"
              placeholder="Enter a task here"
              value={formdata}
              onChange={(event) =>
                setformdata(
                  // By this given input will be set as form data
                  event.target.value
                )
              }
            />
          </div>
        </div>

        <div>
          {!adding ? (
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary"
              onClick={add_task}
            >
              Add
            </button>
          ) : (
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary"
            >
              Adding...
            </button>
          )}
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

        {arr_data.map((item, index) => {
          return (
            <Task
              item={item}
              key={item.id}
              index={index}
              setarr_data={setarr_data}
              arr_data = {arr_data}
              
            />
          );
        })}
      </table>
    </div>
  );
}

export default Home;
