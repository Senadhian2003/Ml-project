
import React, {useState, useEffect} from 'react'
import axios from "axios"
function App() {

  const [symp,setSymp] = useState();
  const [disease,setDisease] = useState("-");
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
    <div>
<div className="container">


<div class="input-group mb-3">
  
  <input type="text" class="form-control" onChange={(e)=>{
    setSymp(e.target.value)
  }} placeholder="Symptoms" aria-label="Username" aria-describedby="basic-addon1" value={symp}/>
  
</div>
<button type="button" onClick={fetchDisease} class="btn btn-primary">Submit</button>
</div>

  <p>Your disease is = {disease}</p>

    </div>
  )
}

export default App