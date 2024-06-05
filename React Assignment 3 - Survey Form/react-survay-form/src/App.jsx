import { useState } from 'react'
import './App.css'

function App() {
  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [que1, setQue1] = useState("")
  const [que2, setQue2] = useState("")


  const handleSubmit = () => {
    alert(que1)
  }

  return (
    <>
      <div className='container'>
        <h1>Registration Form</h1>
        <p style={{padding:"0 1rem 0 1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sed cumque! Distinctio porro iste aspernatur exercitationem? Quod, veniam fugiat. At.</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div style={{display:"flex"}}>

            <label htmlFor="fname">First Name : &nbsp;</label>
            <input type="text" id='fname' value={fName} minLength={3} onChange={(e) => { setfName(e.target.value) }} />
            &nbsp;&nbsp;&nbsp;
            <label htmlFor="gender">Gender : &nbsp;</label>
            <select id="gender" value={gender} onChange={(e) => { setGender(e.target.value) }}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <label htmlFor="lname">Last Name : &nbsp;</label>
          <input type="text" id='lname' value={lName} minLength={3} onChange={(e) => { setlName(e.target.value) }} />
          <br />

          <label htmlFor="email">Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="email" id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <br />

          <label htmlFor="phone">Phone No. : &nbsp;</label>
          <input type="number" id='phone' value={phone} minLength={4} onChange={(e) => { setPhone(e.target.value) }} />
          <br />

          <label htmlFor="que1">1. Lorem ipsum dolor sit amet consectetur adipisicing elit.. &nbsp;</label><br />
          <input type="radio" id='que1' name='que1' value={"Ans1"} onChange={(e) => { setQue1(e.target.value) }} />Ans 1 
          <input type="radio" id='que1' name='que1' value={"Ans2"} onChange={(e) => { setQue1(e.target.value) }} />Ans 2 
          <input type="radio" id='que1' name='que1' value={"Ans3"} onChange={(e) => { setQue1(e.target.value) }} />Ans 3 
          <br />
          <br />

          <label htmlFor="que2">2. Lorem ipsum dolor sit amet consectetur adipisicing elit.. &nbsp;</label><br />
          <input type="radio" id='que2' name='que2' value={"Ans1"} onChange={(e) => { setQue2(e.target.value) }} />Ans 1 
          <input type="radio" id='que2' name='que2' value={"Ans2"} onChange={(e) => { setQue2(e.target.value) }} />Ans 2 
          <input type="radio" id='que2' name='que2' value={"Ans3"} onChange={(e) => { setQue2(e.target.value) }} />Ans 3 
          <br />
          <br />

          <label htmlFor="review">Review: &nbsp;</label><br />
          <textarea id="review" rows={5} cols={75} ></textarea>


          <input type="submit" value={"Create Account"} className='button' />
        </form>
      </div>
    </>
  )
}

export default App
