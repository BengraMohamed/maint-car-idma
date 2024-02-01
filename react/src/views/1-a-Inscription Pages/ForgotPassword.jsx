import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import LogoImage from "../../images/S1.png";
import "./ForgotPassword.css";

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
function ForgotPassword() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [validationError, setValidationError] = useState({});

    const createProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);

        await axios.post(`http://localhost:8000/api/forget_password`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/rest_password");
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

        <div>                        
    <div className="BgMdp">
    <form className="LoginFormMdp" >
      <div className="profile_logoMdp">
         <center>
          <img src={LogoImage} alt=""  /> <br />
         </center>
        </div>
      <center>  
      <h1 style={{fontSize:'25px' }} >Récupérer Votre Mot De Passe : </h1>
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
                    <Form.Group controlId="email">
                        <Form.Label class="labelMdp1" >Email :</Form.Label>  
                        <Form.Control type="email"   value={email} placeholder="user@gmail.com" onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    </Form.Group>
                </Col>
            </Row><br />
            <button className="btn btn-primary  ">valider</button>
        </Form>


        </div>

        

      {/* <div style={{fontSize:'45px' }}>

      <div class=" col-6 text-start  p-2 m-1">
        <label for="" class="labelMdp1" >Email :</label>
        <input type="email"  class="inputMdp1 form-control" 
              placeholder="utilisateur@gmail.com"   /> 
      </div>

     

            
        <Link to={"/mdpoublier2"} >    <button block class="btn btn-primary m-1 p-1"     > 
                Valider</button> </Link>
              
       </div><br /> */}
            
           
          
             
         
          </center>

        </form>

 
  </div>
    </div>


      )
}

export default ForgotPassword
