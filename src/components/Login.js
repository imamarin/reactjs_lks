import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const navigate = useNavigate([]);

    const auth = async(e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/api/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email,password})
        })
        .then(data => data.json())
        .then(response => {
            if(response.status === "success"){
                if(response.user.level === "admin"){
                    sessionStorage.setItem('token', response.authorisation.token)
                    navigate('/home')
                }else{
                    navigate('/responden')
                }
                console.log("berhasil");
            }else{
                console.log("gagal");
            }
        })
    }

    return(
        <form onSubmit={auth}>
            Email <input type="text" onChange={e => setEmail(e.target.value)} /> <br />
            Password <input type='text' onChange={e => setPassword(e.target.value)} /> <br />
            <input type="submit" value="SIGN IN" />
        </form>
    )

}

export default Login;