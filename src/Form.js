import React,{useState} from 'react'
import axios from 'axios'
// insert commet here

export default ({lat,lng}) => {
  const [firstname,setFirstname] = useState()
  const [lastname,setLastname] = useState()
  const [eighty,setEighty] = useState()
  const [sixty,setSixty] = useState()
  const [forty,setForty] = useState()
  const [twenty,setTwenty] = useState()
  const [below,setBelow] = useState()
  const [condition,setCondition] = useState()
  const [student,setStudent] = useState()
  const [working,setWorking] = useState()
  const [home,setHome] = useState()
  return(
  <form className="form"
    onSubmit={
      (e)=>{
        e.preventDefault();
        axios.post("http://192.168.0.31:5000/api",{
          firstname
        }).then(res=>console.log(res.data))
        }
      }
  >
    <h4>Name of representative</h4>
    <input name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="First Name"/>
    <input name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Last Name"/>

    <hr/>
    <h4>Age Group</h4>
    <div className="numberGroup">
    <tr>
     <th>80+</th><th>60-79</th><th>40-59</th><th>20-39</th><th>below 20</th>
    </tr>
    <tr>
      <td><input min="0" name="eighty" className="number" type="number" value={eighty} onChange={(e)=>setEighty(e.target.value)}/></td>
      <td><input min="0" name="sixty" className="number" type="number" value={sixty} onChange={(e)=>setSixty(e.target.value)}/></td>
      <td><input min="0" name="forty" className="number" type="number" value={forty} onChange={(e)=>setForty(e.target.value)}/></td>
      <td><input min="0" name="twenty" className="number" type="number" value={twenty} onChange={(e)=>setTwenty(e.target.value)}/></td>
      <td><input min="0" name="below" className="number" type="number" value={below} onChange={(e)=>setBelow(e.target.value)}/></td>
    </tr>
    <br/>
    </div>


    <h4 className="smol">Number of people with conditions<br/> (heart problem; high blood; sugar issues; kidney problem; pregnant</h4>
    <input min="0" name="condition" className="number" type="number" value={condition} onChange={(e)=>setCondition(e.target.value)}/>


    <hr/>
    <h4 >Number people per occupation type</h4>
    <div style={{
      display:"flex",
      justifyContent: "center"
    }}>
    <div>
    <tr>
     <th>Student</th><th>Working</th><th>Stay Home</th>
    </tr>
    <tr>
      <td><input min="0" name="student" className="number" type="number" value={student} onChange={(e)=>setStudent(e.target.value)}/></td>
      <td><input min="0" name="working" className="number" type="number" value={working} onChange={(e)=>setWorking(e.target.value)}/></td>
      <td><input min="0" name="home" className="number" type="number" value={home} onChange={(e)=>setHome(e.target.value)}/></td>
    </tr>
    </div>
    </div>
    <button type="submit" value="submit" className="small">Submit</button>
  </form>
  )
}