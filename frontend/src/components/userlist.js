import React from 'react';
import Header from "./components/Header";

const UserList = () => {
    return (
        <div>
            <Header />
            <div className=' Container-content'>
                <div className='border mt-4 p-4'>
                    <h3 className=' text-center bg-info p-2 mb-3'>
                        Welcome to the Hostel Management System
                    </h3>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center'>
                            <div className='ms-4'>
                                <h4>
                                    Name :{" "}
                                    {localStorage.getItem("name") ? localStorage.getItem("name") : "NA"}
                                </h4>
                                <h4>
                                    Email :{" "}
                                    {localStorage.getItem("email") ? localStorage.getItem("email") : "NA"}
                                </h4>
                                <h4>
                                    HostelName :{" "}
                                    {localStorage.getItem("hostelname") ? localStorage.getItem("hostelname") : "NA"}
                                </h4>
                                <h4>
                                    PhoneNumber :{" "}
                                    {localStorage.getItem("phoneNumber") ? localStorage.getItem("phoneNumber") : "NA"}
                                </h4>
                                <h4>
                                    Issue :{" "}
                                    {localStorage.getItem("issue") ? localStorage.getItem("issue") : "NA"}
                                </h4>
                                <h4>
                                    RoomNumber :{" "}
                                    {localStorage.getItem("room") ? localStorage.getItem("room") : "NA"}
                                </h4>
                                <h4>
                                    Description :{" "}
                                    {localStorage.getItem("description") ? localStorage.getItem("description") : "NA"}
                                </h4>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

