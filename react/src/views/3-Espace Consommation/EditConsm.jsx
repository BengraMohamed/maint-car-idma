import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './EditConsm.css'
function EditConsm() {

     
    const navigate = useNavigate();
    const { id } = useParams();
    const [date, setDate] = useState("");
    const [qte, setQte] = useState("");
    const [montant, setMontant] = useState("");
   
    const [image, setImage] = useState(null);
    // const [validationError, setValidationError] = useState({});

    useEffect(() => {
        fetchConsm();
    }, []);

    const fetchConsm = async () => {
        await axios.get(`http://localhost:8000/api/consommations/${id}`).then(({ data }) => {
            const {  date, qte,montant } = data.consommation;
            setDate(date);
            setQte(qte);
            setMontant(montant);
 
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

    const updateConsm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('date', date);
        formData.append('qte', qte);
        formData.append('montant', montant);

        if (image !== null) {
            formData.append('image', image);
        }

        await axios.post(`http://localhost:8000/api/consommations/${id}`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/consm")
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
      <div className='appBg-edit-Consm'>
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

       <Form className="" onSubmit={updateConsm}  >
              
          <h2 className="title_edit_consm1" > Editer Votre Informations : <hr /></h2>
          <br />
           
            <div className="form__group-maint">
            <br /> <br /><br />
                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_edit_consm"  >Date d’opération:</Form.Label>
                    <Form.Control className=' form-control' type="date"  value={date} onChange={(event) => {
                    setDate(event.target.value)}} />
                </Form.Group>  
                </Col>
                     </Row>
                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style_edit_consm"  >Quantité  :</Form.Label>
                    <Form.Control className='w-100 form-control' type="text"  value={qte} onChange={(event) => {
                    setQte(event.target.value)}} />
                </Form.Group>
                </Col>
                     </Row>  
                     </div>
              <div className='form__group-maint-2'>
                     <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px" ,marginLeft:"110px"}}>
                    <Form.Label className="g_style_edit_consm"  >Montant payé:</Form.Label>
                    <Form.Control className='w-75  form-control' type="number"  value={montant} onChange={(event) => {
                    setMontant(event.target.value)}} />
                </Form.Group>
                </Col>
                     </Row> 
              <br /> <br /> 
                </div>
              
                      <center>     
                     <Row>
                <Col>
              <Form.Group controlId="nom"  style={{marginTop:"-30px",marginLeft:"44px"}}>
                    <Form.Label className="g_style_edit_consm"  >Image:</Form.Label>
                    <Form.Control  className='  w-50 form-control' type="file" onChange={changeHandler} />
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

export default EditConsm
