import { Form } from 'react-bootstrap'
 import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import "./CreateMaint.css"

function CreateMaint() {

     const navigate = useNavigate();
     const [nom, setNom] = useState("");
     const [date, setDate] = useState("");
     const [type, setType] = useState("");
     const [kilo, setKilo] = useState("");
     const [frais, setFrais] = useState("");
     const [image, setImage] = useState();
     const [validationError, setValidationError] = useState({});


     const changeHandler = (event) => {
          setImage(event.target.files[0]);
      }

      const CreatMaint = async (e) => {
          e.preventDefault();
  
          const formData = new FormData();
          formData.append('nom', nom);
          formData.append('date', date);
          formData.append('type', type);
          formData.append('kilo', kilo);
          formData.append('frais', frais);
          formData.append('image', image);

  
          await axios.post(`http://localhost:8000/api/maints`, formData).then(({ data }) => {
              Swal.fire({
                  icon: "success",
                  text: data.message
              })
              navigate("/maintenance");
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
    <div className="settings">
     <div className="settings__wrapper">
      <div className='appBg-create-Maint'>
   <center> 
       <Form className=""  onSubmit={CreatMaint} >
              
          <h2 className="title_Maint" > Nouvelle Maintenance : <hr /> </h2>
           <br />
            <div className="form__group-maint">
            <br /> <br /><br />

            <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_Maint"  >Nom :</Form.Label>
                    <Form.Control className='w-100 form-control' type="text" value={nom} onChange={(event) => {
                        setNom(event.target.value)
                    }}/>

                    {/* <div>
                     {Object.keys(validationError).length > 0 && (
                          <ul className="mb-0">
                                        {Object.entries(validationError).map(([key, value]) => (
                                            <li key={key}>{value}</li>
                                            ))}
                                    </ul>
                       )}  
                       </div> */}

                </Form.Group>
                </Col>
                     </Row>

                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_Maint"  >Date d’opération:</Form.Label>
                    <Form.Control className=' form-control' type="date" value={date} onChange={(event) => {
                        setDate(event.target.value)
                    }} />
                </Form.Group>  
                </Col>
                     </Row>

                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_Maint"  >Type :</Form.Label>
                    <Form.Control className='w-100 form-control' type="text" value={type} onChange={(event) => {
                        setType(event.target.value)
                    }}/>
                </Form.Group>
                </Col>
                     </Row> <br /> <br /><br />


        
                 
 
              </div>
              <div className='form__group-maint-2'>
                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px" ,marginLeft:"110px"}}>
                    <Form.Label className="g_style_Maint"  >Kilométrage:</Form.Label>
                    <Form.Control className='w-100  form-control' type="number" value={kilo} onChange={(event) => {
                        setKilo(event.target.value)
                    }}/>
                </Form.Group>
                </Col>
                     </Row> <br /> <br /><br />

                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px",marginLeft:"-50px"}}>
                    <Form.Label className="g_style_Maint"  >Frais :</Form.Label>
                    <Form.Control className='  form-control' type="text" value={frais} onChange={(event) => {
                        setFrais(event.target.value)
                    }}/>
                </Form.Group>
                </Col>
                     </Row> <br /> <br /><br />

                <br />
                </div>
        
             <center>  
                         
                     <Row>
                <Col>
              <Form.Group controlId="nom"  style={{marginTop:"-30px",marginLeft:"-45px"}}>
                    <Form.Label className="g_style_Maint"  >Image:</Form.Label>
                    <Form.Control  className='  w-25 form-control' type="file" onChange={changeHandler}  />
                </Form.Group>
                </Col>
                     </Row>  

                <br /> 
                 
                          </center> 
                          
               
                   {/* </div> */}
                     
                    
              
                   <center> 
                        <Button variant="primary" className="mt-2 p-1.5 m-2" size="lg" block="block" type="submit">
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

export default CreateMaint
