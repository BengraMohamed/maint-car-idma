import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import "./CreateConsm.css"

function CreateConsommation() {

    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [qte, setQte] = useState("");
    const [montant, setMontant] = useState("");
    const [image, setImage] = useState();
    const [validationError, setValidationError] = useState({});

    const changeHandler = (event) => {
        setImage(event.target.files[0]);
    }

    const createConsm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('date', date);
        formData.append('qte', qte);
        formData.append('montant',montant);
        formData.append('image', image);

        await axios.post(`http://localhost:8000/api/consommations`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/consm");
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
    <div className="setting_cnsm">
     <div className="settings__wrapper">
      <div className='appBg-create-Consm'>
   <center> 
       <Form className="" onSubmit={createConsm}>
              
          <h2 className="title_Consm"  >Nouvelle Consommation :   </h2><br /> <br />
            
            <div className="form__grou">
            <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-70px"}}>
                    <Form.Label className="g_style"  >Date d’opération	 :</Form.Label>
                    <Form.Control className='w-50 form-control' type="date" value={date} onChange={(event) => {
                        setDate(event.target.value)
                    }} />
                </Form.Group>
                </Col>
                     </Row>
        
                <div className=''>
                <Row>
                    <Col>  
                <Form.Group controlId="marque">
                    <br />
                  <Form.Label className="g_style">Quantite :</Form.Label>
                     <Form.Control className='w-50 form-control' type="number" value={qte} onChange={(event) => {
                        setQte(event.target.value)
                    }} />

                  
                </Form.Group>
                </Col>
                    </Row>

                    <Row>
                    <Col>  
                <Form.Group controlId="marque">
                    <br />
                  <Form.Label className="g_style">Montant payé :</Form.Label>
                     <Form.Control className='w-50 form-control' type="number" value={montant} onChange={(event) => {
                        setMontant(event.target.value)
                    }} />

                  
                </Form.Group>
                </Col>
                    </Row>
                <br /> 
                 </div>
        
              {/* <div className="form__grup"> */}
                     <center>  
                         <div style={{marginTop:"-7px"}}>
                     <Row>
                            <Col>
                                <Form.Group controlId="Image">
                                    <Form.Label className="g_style">Image :</Form.Label>
                                    <Form.Control className="w-50 " type="file" onChange={changeHandler} />
                                </Form.Group>
                            </Col>
                        </Row>
                          </div>
                          </center> 
               
                   {/* </div> */}
              </div>
                    <br />
              
                   <center> 
                        <Button variant="primary" className="mt-0 p-2 m-4" size="lg" block="block" type="submit">
                            Créer
                        </Button>                  
                         </center>
                 
                 
                   </Form> </center> 

                   <div>
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

             </div>
          </div>
          </div>
        </div>
          
    )
}

export default CreateConsommation
