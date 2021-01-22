import {useState,react}from 'react';
import {useHistory} from 'react-router-dom';

export default function Login(){
    const history = useHistory();
    const [username,setUsername] = useState(''); 
    const [password,setPassword] = useState('');

    const handleClick =() =>{
               // Call the API
       let data = {
        "username":username,
        "password":password,
    }
    let url = "https://ong-coach.herokuapp.com/api/login/"
    fetch(url, {
     method: 'post',
     headers:{
         "Content-type": "application/json",
     },
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(data => {
     console.log('Request succeeded with JSON response', data);
     if(data.success == true){
         let token = data.token.split("")[1];
         localStorage.setItem("token", token);
         history.pushState('/main')
     }
     else {
         setErrMessage(data.message);
     }
   })
   .catch(function (error) {
     console.log('Request failed', error);
   });
    // Redirect to main page
 }

    return(
        <div className="container py-5">
            <h1>Login Page</h1>
            {errMessage}
            </div> :
            <span></span>
    }
            <div>
            <div class="mb-3">
            <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" 
                value = {username}
                placeholder="Enter your username" 
                onChange={(e)=> {
                    setUsername(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
            <label for="password" class="form-label">Password</label>
                <input type="tpassword" class="form-control" id="coachPassword" 
                value = {password}
                placeholder="Enter your password" 
                onChange={(e)=> {
                    setPassword(e.target.value)
                }}
                />
                <button className='btn btn-primary mt-3' onClick={handleClick}>Login</button>
            </div>
        </div>
        </div>
    );
            }