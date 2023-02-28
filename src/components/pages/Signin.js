import { useState } from 'react';
import { AiOutlineTwitter, AiFillGithub} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';


function Signin() {
  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": inputs.username,
  "password": inputs.password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://reqres.in/api/login ", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    if(result.status === 'ok'){
      
    }
    else {
     
    }
  })
  .catch(error => console.log('error', error));
    alert(inputs);
  }

  return (
  
    <form onSubmit={handleSubmit}>
    <div className='auth-form-container'><br/><br/><br/><br/>            
    <h3><SiTailwindcss color='#5100ff' size='2rem'/></h3><br/>
    <h1>Sign in to your account</h1>
    <p>Or start your 14-day free trail</p><br/>
    <b>Sign in with <br/><BsFacebook color='#A9A9A9' size='2rem'/> &emsp; <AiOutlineTwitter color='#A9A9A9' size='2rem' /> &emsp;<AiFillGithub color='#A9A9A9'size='2rem'/></b><br/>
    
      <label>Email address<br/>
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      /><br/>
      </label><br/>
      <label>Password<br/>
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label><br/>
        <input type="submit" />
        </div>
    </form>
  )
}

export default Signin