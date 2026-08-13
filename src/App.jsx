import "./App.css";
import {useState} from "react";

function App(){
const [firstName , setFirstName] = useState("")
const [lastName , setLastName] = useState("")
const [email , setEmail] = useState("")
const [err , setErr] = useState({});

const submitForm = ((e) =>{
  e.preventDefault();

  // validateForm();
  // this func will help us to validate the form and reject empty data

  const values = {
    firstName,
    lastName,
    email
  
  }
  console.log("Form summited:" , values)
})

  return (
    <div>
      <div>
        RECTFORM
      </div>
      <div>
      <form action="">
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input 
          type="text" name="firstName" id="firstNames" placeholder="Enter your FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        
      </form>
      </div>
      <div>
      <form action="">
        <div>
          <label htmlFor="LastName">LastName:</label>
          <input 
          type="text" name="lastName" id="lastName" placeholder="Enter your LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        
      </form>
      </div>
      <div>
      <form action="">
        <div>
          <label htmlFor="firstName">Email:</label>
          <input 
          type="text" name="email" id="email" placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' onClick={submitForm}>
          <h2>Submit</h2>
        </button>


        
      </form>

      <footer>This is a footer</footer>
      </div>
    </div>
    )
};

export default App