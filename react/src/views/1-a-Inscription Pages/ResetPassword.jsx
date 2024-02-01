import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import LogoImage from "../../images/S1.png";
import "./ForgotPassword.css";

import { useNavigate } from 'react-router-dom'
function ResetPassword() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [otp, setOtp] = useState();
    const [validationError, setValidationError] = useState({});

    const createProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);
        formData.append('otp', otp);

        await axios.post(`http://localhost:8000/api/rest_password`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/login");
        }).catch(({ response }) => {
            if (response.status === 422) {
                setValidationError(response.data.errors);
            } else {
                Swal.fire({
                    text: response.data.message,
                    icon: "error"
                })
            }
        })
    }

    return (

        <div className="BgMdp">
            <div className="LoginFormMdp2">
            <div className="profile_logoMdp">
         <center>
          <img src={LogoImage} alt=""  /> <br />
                <h4 className="title">Récupérer le mot de passe</h4>
         </center>
        </div>
                <hr />
                <div className="form-wrapper">
                    {Object.keys(validationError).length > 0 && (
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-danger">
                                    <ul className="mb-0">
                                        {Object.entries(validationError).map(([key, value]) => (
                                            <li key={key}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    <Form onSubmit={createProduct}>
                        <Row>
                            <Col>
                                <Form.Group className='labelMdp2' controlId="email">
                                    <Form.Label   >Email :</Form.Label>
                                    <Form.Control type="email"  value={email} placeholder="Email" onChange={(event) => {
                                        setEmail(event.target.value)
                                    }} />
                                </Form.Group>
                            </Col>
                        </Row><br />
                        <Row>
                            <Col>
                                <Form.Group className='labelMdp2' controlId="New Password">
                                    <Form.Label  >New Password :</Form.Label>
                                    <Form.Control type="password" value={password} placeholder="New Password" onChange={(event) => {
                                        setPassword(event.target.value)
                                    }} />
                                </Form.Group>
                            </Col>
                        </Row><br />
                        <Row>
                            <Col>
                                <Form.Group className='labelMdp2' controlId="Code de verification">
                                    <Form.Label  >Code de verification :</Form.Label>
                                    <Form.Control type="text" value={otp} placeholder=" Entre Code de verification" onChange={(event) => {
                                        setOtp(event.target.value)
                                    }} />
                                </Form.Group>
                            </Col>
                        </Row><br />
                        <center>
                        <button className="btn btn-primary">valider</button>
                    </center>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default ResetPassword
