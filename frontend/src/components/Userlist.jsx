import React,{useState,useEffect} from 'react'

function Userlist() {

  const [userdata,setUserdata]=useState({});

  const getdata = async () => {

    const res = await fetch(`/getdata`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");

    } else {
        setUserdata(data)
        console.log("get data");
    }
}

useEffect(() => {
  getdata();
}, [])



  return (
    <div>
        <div className="name">Name</div>
        {/* {userdata.map(() => 
          <div className="data" key={userdata.email}>
            {userdata.name}
          </div>

          
        )} */}




    </div>
  )
}

export default Userlist