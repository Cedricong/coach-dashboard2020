import {useState, react} from 'react'
export default function Add(){
    const [name,setName] = useState(''); 
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [location,setLocation] = useState('');
    const [picUrl,setPicUrl] = useState('');
    const handleClick = () =>{
       // Call the API
       let data = {
           "name":name,
           "email":email,
           "phoneNumber":phone,
           "picUrl":picUrl,
           "location":location,
           "specialities":["Zumba","Body pump","Flexibility"]
       }
       let url = "https://ong-coach.herokuapp.com/api/coaches/"
       fetch(url, {
        method: 'post',
        headers: {
          "Content-type": "application/json",
          "Authorization":"Bearer "+ token
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
       // Redirect to main page
    }
    return (
        <div className="container">
        <div className="card bg-light p-5 my-4">
            <h1>Add new Coach</h1>  
            <div className="container">
            <div class="mb-3">
                <label for="coachName" class="form-label">Name</label>
                <input type="text" class="form-control" id="coachName" 
                value = {name}
                placeholder="Enter coach name" 
                onChange={(e)=> {
                    setName(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="coachEmail" class="form-label">Email</label>
                <input type="email" class="form-control" 
                id="coachEmail" 
                value={email}
                placeholder="Enter coach email"
                onChange={(e)=> {
                    setEmail(e.target.value)
                }}
                />
            </div>
            <div class="mb-3">
                <label for="coachPhone" class="form-label">Phone</label>
                <input type="phone" class="form-control" 
                id="coachPhone" placeholder="Enter coach phone" value={phone} onChange={(e)=> {
                    setPhone(e.target.value)
                }}/>
            </div>
            <div class="mb-3">
                <label for="coachLocation" class="form-label">Location</label>
                <input type="text" class="form-control" 
                id="coachPhone" 
                placeholder="Enter coach location"
                value={location}
                onChange={(e)=> {
                    setLocation(e.target.value)
                }}
                />
            </div>
            <div class="mb-3">
                <label for="picUrl" class="form-label">Picture url</label>
                <input type="text" class="form-control" id="picUrl" 
                value={picUrl}
                onChange={(e)=> {
                    setPicUrl(e.target.value)
                }}
                placeholder="Enter url picture"/>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Add new Coach</button>
            </div>
          </div>
          </div>
    )
}