import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function Register() {

    const navigate = useNavigate();
      

    const[usr, setUSR] = useState("");
    const[pw, setPW] = useState("");
    const[rpw, setRPW] = useState("");

    return <>
        <h1>Register</h1>
        <Form>
            <Form.Label htmlFor="usr">Username</Form.Label>
            <Form.Control 
                id="usr"
                value = {usr}
                onChange={(e) => setUSR(e.target.value)}
            />
            <Form.Label htmlFor="pw">Password</Form.Label>
            <Form.Control 
                id="pw"
                value = {pw}
                type = "password"
                onChange={(e) => setPW(e.target.value)}
            />
            <Form.Label htmlFor="rpw">Repeat Password</Form.Label>
            <Form.Control 
                id="rpw"
                value = {rpw}
                type = "password"
                onChange={(e) => setRPW(e.target.value)}
            />
            <br />
            <Button 
                onClick={(e) => {
                    if(usr !== "" && pw !== ""){
                        if(pw === rpw){
                        }
                        else{
                            alert("Your passwords do not match!");
                        }
                    }
                    else{
                        alert("You must provide both a username and password!");
                    }
                }}
            >Register</Button>
        </Form>
    </>
}