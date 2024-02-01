import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import "./EditMaint.css"
 
function EditMaint() {

     
    const navigate = useNavigate();
    const { id } = useParams();
    const [nom, setNom] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [kilo, setKilo] = useState("");
    const [frais, setFrais] = useState("");
    const [image, setImage] = useState(null);
//     const [validationError, setValidationError] = useState({});

    useEffect(() => {
        fetchMaint();
    }, []);

    const fetchMaint = async () => {
        await axios.get(`http://localhost:8000/api/maints/${id}`).then(({ data }) => {
            const { nom, date,type,kilo,frais } = data.maint;
            setNom(nom);
            setDate(date);
            setType(type);
            setKilo(kilo);
            setFrais(frais);

        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }

    const changeHandler = (event) => {
        setImage(event.target.files[0]);
    }

    const updateMaint = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('nom', nom);
        formData.append('date', date);
        formData.append('type', type);
        formData.append('kilo', kilo);
        formData.append('frais', frais);

        if (image !== null) {
            formData.append('image', image);
        }

        await axios.post(`http://localhost:8000/api/maints/${id}`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/maintenance")
        }).catch(({ response }) => {
            if (response.status === 422) {
                setValidationError(response.data.erros)
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
      <div className='appBg-edit-Maint'>
   <center> 

   {/* <div className="form-wrapper">
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
)} */}

       <Form  onSubmit={updateMaint}  >
              
          <h2 className="title_edit_maint" > Editer Votre Informations : <hr /></h2>
          <br />
           
            <div className="form__group-maint">
            <br /> <br /><br />

            <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_edit_Maint"  >Nom :</Form.Label>
                    <Form.Control className='w-100 form-control' type="text"  value={nom} onChange={(event) => {
                    setNom(event.target.value)}} />
                </Form.Group>
                </Col>
                     </Row>

                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_edit_Maint" >Date d’opération: </Form.Label>
                    <Form.Control className=' form-control' type="date"  value={date} onChange={(event) => {
                    setDate(event.target.value)}} />
                </Form.Group>  
                </Col>
                     </Row>
                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_edit_Maint"  >Type :</Form.Label>
                    <Form.Control className='w-100 form-control' type="text"  value={type} onChange={(event) => {
                    setType(event.target.value)}} />
                </Form.Group>
                </Col>
                     </Row> <br /> <br /><br />
              </div>

              <div className='form__group-maint-2'>
                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px" ,marginLeft:"110px"}}>
                    <Form.Label className="g_style_edit_Maint"  >Kilométrage:</Form.Label>
                    <Form.Control className='w-100  form-control' type="number"  value={kilo} onChange={(event) => {
                    setKilo(event.target.value)}} />
                </Form.Group>
                </Col>
                     </Row> <br /> <br /><br />
                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px",marginLeft:"-50px"}}>
                    <Form.Label className="g_style_edit_Maint"  >Frais :</Form.Label>
                    <Form.Control className='  form-control' type="text"  value={frais} onChange={(event) => {
                    setFrais(event.target.value)}}/>
                </Form.Group>
                </Col>
                     </Row> <br /> <br /><br />
                <br />
                </div>
                      <center>     
                     <Row>
                <Col>
              <Form.Group controlId="nom"  style={{marginTop:"-30px",marginLeft:"-45px"}}>
                    <Form.Label className="g_style_edit_Maint"  >Image:</Form.Label>
                    <Form.Control  className='  w-25 form-control' type="file" onChange={changeHandler} />
                </Form.Group>
                </Col>
                     </Row>  
                <br /> 
                     </center>               
                 
                    
              
               <center> 
                    <Button variant="primary" className="mt-2 p-1.5 m-2" size="lg" block="block" type="submit">
                         Editer
                    </Button>                  
               </center>
               
               
               </Form>
               {/* </div> */}
               </center> 

          </div>
          </div>
        </div>
         
        
        
        
        
        
        
        
        
        
        



           
                
)
}

export default EditMaint
