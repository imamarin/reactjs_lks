import React, {useEffect, useState} from "react";


const Admin = () => {

    const [users,setUsers] = useState([])

    useEffect(()=>{
        getUser()
    },[])

    const getUser = async()=>{
        fetch("http://127.0.0.1:8000/api/show",{
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+sessionStorage.getItem('token')
            }
        })
        .then(data => data.json())
        .then(response =>setUsers(response.user))
    }

    return(
        <div>
            <h1>Data Pengguna</h1>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Level</td>
                </tr>
                {
                    users.map((data, index)=>(
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.level}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Admin