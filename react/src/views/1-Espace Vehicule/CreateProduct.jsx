import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import "./CreateProd.css"
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
    const marquevoiture = ['Choisir un marque :' ,'Audi', 'BMW ', 'Dacia', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Jeep', 'Land Rover', 'Mazda', 'Mercedes_Benz', 'Nissan', 'Peugeot', 'Porsche', 'Skoda', 'Tesla', 'Toyota', 'Volvo']
    const model = {
        'Audi': ['Choisir un model :','90', '100', '100 Quattro', '90 Quattro', 'A3 Quattro', 'A3 Sportback e-tron', 'A4 allroad'],
        'BMW': ['Choisir un model :','1 Series M', '128i', '135i', '135is', '228i', '228i xDrive', '230i', '323Ci', '430i'],
        'Dacia': ['Choisir un model :','Logan', 'Sandero', 'SupeRNova'],
        'Fiat': ['Choisir un model :','500', '124 Spider', '500L', '500X', 'Bravo', 'Doblo', 'Grande Punto', 'Marea', 'Palio', 'Panda', 'Punto'],
        'Ford': ['Choisir un model :','Aerostar', 'Aspire', 'Bronco', 'Bronco Sport', 'Contour', 'Crown Victoria', 'E-150', 'E-150', 'E-150 Club Wagon'],
        'Honda': ['Choisir un model :','Accord', 'Civic', 'Clarity', 'CR-V', 'Crosstour', 'CRX', 'Element', 'Fit', 'HR-V', 'Insight', 'Passport'],
        'Jaguar': ['Choisir un model :','F-Pace', 'Vanden Plas', 'XE', 'XF', 'XFR', 'XFR-S', 'XJ8', 'XJR'],
        'Jeep': ['Choisir un model :','Cherokee', 'Comanche', 'Compass', 'Gladiator', 'Grand Cherokee', 'Liberty', 'Patriot', 'Renegade'],
        'Land Rover': ['Choisir un model :','Discovery', 'Discovery Sport', 'Freelander', 'LR2', 'LR3', 'LR4', 'ange Rover', 'Range Rover Evoque'],
        'Mazda': ['Choisir un model :','626', 'B2200', 'B2300', 'B2500', 'B3000', 'CX-3', 'CX-5', 'Miata', 'Navajo', 'Tribute'],
        'Mercedes_Benz': ['Choisir un model :','190D', '190E', '200D', '260E', '300CE', '300SD', '300SDL', '300SE', '300SEL', '300TE', 'AMG GT 53', 'C230', 'C32 AMG', 'C450 AMG', 'CLA45 AMG', 'SLK350', 'Sprinter 1500'],
        'Nissan': ['Choisir un model :','200SX', '240SX', '300ZX', 'Almera', 'Cube', 'Frontier', 'Maxima', 'GT-R', 'Micra', 'NV1500', 'Patrol', 'Stanza', 'Versa', 'Versa Note', 'X-Trail', 'Xterra'],
        'Peugeot': ['Choisir un model :','106', '107', '205', '206', '306', '307', '406', '407', '3008'],
        'Porsche': ['Choisir un model :','911', '944', 'Boxster', 'Cayenne', 'Cayman', 'Macan', 'Panamera'],
        'Skoda': ['Choisir un model :','Fabia', 'Favorit', 'Felicia', 'Octavia', 'Roomster', 'Superb'],
        'Tesla': ['Choisir un model :','3', 'S', 'X'],
        'Toyota': ['Choisir un model :','86', '4Runner', 'Avalon', 'Avensis', 'C-HR', 'Camry', 'Celica', 'Corolla', 'Echo', 'Highlander', 'Matrix', 'MR2 Spyder', 'Paseo', 'Pickup', 'Prado', 'Previa', 'Sienna', 'Venza', 'Yaris', 'Yaris iA'],
        'Volvo': ['Choisir un model :','780', '850', '940', '960', 'C30', 'C70', 'S40', 'S60', 'S60 Cross Country', 'XC40', 'XC60', 'XC70', 'XC90'],


    }

    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [image, setImage] = useState();
    const [marque, setMarque] = useState("");
    const [modele, setModele] = useState("");
    const [validationError, setValidationError] = useState({});

    const changeHandler = (event) => {
        setImage(event.target.files[0]);
    }

    const createProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('image', image);
        formData.append('marque', marque);
        formData.append('modele', modele);

        await axios.post(`http://localhost:8000/api/products`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/products");
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
      <div className='appBg-create-v'>
   <center> 
       <Form className="" onSubmit={createProduct}>
              
          <h2 className="title_create_car"  >Nouvelle Vehicule : <hr /></h2><br /> <br />
            
            <div className="form__grop">
            <Row>
                <Col>
              <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
                    <Form.Label className="g_style"  >Nom :</Form.Label>
                    <Form.Control className='w-75 form-control' type="text" value={nom} onChange={(event) => {
                        setNom(event.target.value)
                    }} />
                </Form.Group>
                </Col>
                     </Row>
        
                <div className=''>
                <Row>
                    <Col>  
                <Form.Group controlId="marque">
                    <br />
                  <Form.Label className="g_style">Marque :</Form.Label>

                  <select  className=" w-75 form-select" aria-label="Default select example" onChange={(e) => {
                     setMarque(e.target.value) }}>
                    {
                        marquevoiture.map(state => {
                            return <option>{state}</option>
                        })
                    }
                  </select>
                    
                         
                    
                    <br />

                    <label className="g_style">Modèle :</label>


                    {marque && <select className="w-75 form-select" aria-label="Default select example" onChange={(e) => { 
                        setModele(e.target.value) }} >
                        {
                            model[marque].map(city => {
                                return <option>{city}</option>
                            })
                        }
                    </select>} 
                </Form.Group>
                </Col>
                    </Row>
                <br /> 
                 </div>
        
              </div>
              {/* <div className="form__grup"> */}
                     <center>  
                         <div style={{marginTop:"-7px"}}>
                     <Row>
                            <Col>
                                <Form.Group controlId="Image">
                                    <Form.Label className="g_style">Image :</Form.Label>
                                    <Form.Control className="w-75 " type="file" onChange={changeHandler} />
                                </Form.Group>
                            </Col>
                        </Row>
                          </div>
                          </center> 
               
                   {/* </div> */}
                    <br />
              
                   <center> 
                        <Button variant="primary" className="mt-2 p-2 m-2" size="lg" block="block" type="submit">
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

export default CreateProduct
