import React, { useContext } from 'react';
import { useRef } from 'react';
import { Form, Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    
    const inputUSR = useRef();
    const inputPW = useRef();

    

    return <>
        <h1>Login</h1>
        <Form>
            <Form.Label htmlFor="usr">Username</Form.Label>
            <Form.Control
                id="usr"
                ref = {inputUSR}
            />
            <Form.Label htmlFor="pw">Password</Form.Label>
            <Form.Control 
                id="pw"
                type="password"
                ref = {inputPW}
            />
            <br />
            <Button 
                onClick={(e) => {
                    if(inputUSR.current.value !== "" && inputPW.current.value !== ""){
                    }
                    else{
                        alert("You must provide both a username and password!");
                    }
                }}
            >Login</Button>
            <>  </>
            <Button
                onClick={(e) => {
                    navigate('../register');
                }}
            >Register</Button>
        </Form>
 
    </>
}