
import React, { useState, useEffect } from 'react';
import  "./App.css";
import axios from "axios"
function App() {

  const [symp,setSymp] = useState();
  const [disease,setDisease] = useState("___________");
  let cred = {
    name : symp
  }


  const fetchDisease = ()=>{
    console.log(symp)
    fetch("http://localhost:5000/",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(cred),
    }
    
    ).then(res=> res.json()
    ).then(data=>{
      setDisease(data.final_prediction)
      console.log(data.final_prediction)
      setSymp("")
    })
  }


  // useEffect(()=>{

  //   fetch("http://localhost:5000/",{
  //     method : "POST",
  //     headers : {
  //       "Content-Type" : "application/json",
  //     },
  //     body : JSON.stringify(cred),
  //   }
    
  //   ).then(res=> res.json()
  //   ).then(data=>{
      
  //     console.log(data)
  //   })


  // },[])


  // useEffect(() => {
  //   axios.get("http://localhost:5000/",{
  //     params: {
  //       Name: "GOOD"
  //     }
  //   }).then((response) => {
   
    
  //     console.log(response.data)
  //   });
  // },[]);

  return (
    <div className='total'>
      <nav>
        <label class="logo">Predis</label>
        <ul>
            <li class="hover"><a href="#">Help</a></li>
            <li class="hover"><a href="#">Contact</a></li>
            <li class="hover"><a href="#">SignUp</a></li>
        </ul>
      </nav>  
      <section class="main-content">
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202207/breast-5472788__340-x340.jpg?_ezeX1C8WEL0CeV_NdRb6Ob6zgWnD1i5" alt=""></img>
        <div className="container">
          <div class="input-group mb-3">
  
            <input type="text" class="form-control" onChange={(e)=>{
            setSymp(e.target.value)
            }} placeholder="Symptoms" aria-label="Username" aria-describedby="basic-addon1" value={symp}/>  
          </div><br></br><br></br>
          <button type="button" onClick={fetchDisease} class="btn btn-primary">Submit</button>
        </div>
        <br></br>         
      </section>
      <p>Your disease is = {disease}</p>
    </div>
  )
  }
export default App