import "./App.css";
import {useState} from "react";

function App(){
const [firstName , setFirstName] = useState("")
const [lastName , setLastName] = useState("")
const [email , setEmail] = useState("")
const [err , setErr] = useState({});

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
          value={firstName}
          onChange={(e) => SetLastName(e.target.value)}
          />
        </div>
        
      </form>
      </div>
      <div>
      <form action="">
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input 
          type="text" name="firstName" id="firstNames" placeholder="Enter your Name"
          value={firstName}

          />
        </div>
        
      </form>
      </div>
    </div>
    )
};

export default App