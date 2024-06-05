import { useState } from 'react'
import './App.css'

function App() {
  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const handleSubmit = () => {
    // alert(role)  

  }
  return (
    < >
      <div className='body'>
        <div className='container'>
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label><br />
            <input type="text" id='fname' value={fName} minLength={3} onChange={(e) => { setfName(e.target.value) }} />
            <br />

            <label htmlFor="lname">Last Name</label><br />
            <input type="text" id='lname' value={lName} minLength={3} onChange={(e) => { setlName(e.target.value) }} />
            <br />

            <label htmlFor="email">Email</label><br />
            <input type="email" id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <br />

            <label htmlFor="password">Password</label><br />
            <input type="password" id='password' value={password} minLength={4} onChange={(e) => { setPassword(e.target.value) }} />
            <br />

            <label htmlFor="role">Role : </label>
            <select id="role" value={role} onChange={(e) => { setRole(e.target.value) }}>
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="student">Student</option>
              <option value="manager">Manager</option>
            </select>
            <br />

            <input type="submit" value={"Create Account"} className='button' />
          </form>
        </div>
        <div className="showdata">
          First Name : {fName} <br />
          Last Name : {lName}<br />
          Email : {email}<br />
          Password: {password}<br />
          Role: {role}<br />
        </div>
      </div>
    </>
  )
}

export default App
