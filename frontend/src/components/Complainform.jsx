import React,{useState} from 'react'

function Complainform() {
    
    var id=123
    const [user,setUser]=useState({
        name:"", email:"", hostelname:"", phone:"", unique_id:"", issue:"", time:"", roomnumber:"", description:""
    });
    let name,value;
    const handleInputs=(e)=>{
        e.preventDefault();
        // console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
        console.log(user);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
         id=id+1;
        setUser({...user,unique_id:id});
        
        console.log(user)
        
    }



  return (
    <div>
        <form action="submit" className="form" onClick={handleSubmit}>
            <input type="text" name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Name' />
            <input type="email" name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Email' />
            <input type="text" name='hostelname' id='hostelname' autoComplete='off' value={user.hostelname} onChange={handleInputs} placeholder='Hostel Name' />
            <input type="phonenumber" name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='Phone Number' />
            <input type="text" name='issue' id='issue' autoComplete='off' value={user.issue} onChange={handleInputs} placeholder='Issue' />
            <input type="number" name='roomnumber' id='roomnuber' autoComplete='off' value={user.roomnumber} onChange={handleInputs} placeholder='Room' />
            <input type="text" name='description' id='description' autoComplete='off' value={user.description} onChange={handleInputs} placeholder='Description' />
            <input type="submit" name="submit" id='submit' />
        </form>
    </div>
  )
}

export default Complainform