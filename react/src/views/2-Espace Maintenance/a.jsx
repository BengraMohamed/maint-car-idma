// // import React, { useState } from 'react'
// // import { Form } from 'react-bootstrap'
// //  import { Button } from 'react-bootstrap'
// // import { Row } from 'react-bootstrap'
// // import { Col } from 'react-bootstrap'
// // import axios from 'axios'
// // import Swal from 'sweetalert2'
// // import { useNavigate } from 'react-router-dom'
// // import "./CreateMaint.css"

// // function CreateMaint() {
// //     const marquevoiture = ['Audi', 'BMW ', 'Dacia', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Jeep', 'Land Rover', 'Mazda', 'Mercedes_Benz', 'Nissan', 'Peugeot', 'Porsche', 'Skoda', 'Tesla', 'Toyota', 'Volvo']
// //     const model = {
// //         'Audi': ['90', '100', '100 Quattro', '90 Quattro', 'A3 Quattro', 'A3 Sportback e-tron', 'A4 allroad'],
// //         'BMW': ['1 Series M', '128i', '135i', '135is', '228i', '228i xDrive', '230i', '323Ci', '430i'],
// //         'Dacia': ['Logan', 'Sandero', 'SupeRNova'],
// //         'Fiat': ['500', '124 Spider', '500L', '500X', 'Bravo', 'Doblo', 'Grande Punto', 'Marea', 'Palio', 'Panda', 'Punto'],
// //         'Ford': ['Aerostar', 'Aspire', 'Bronco', 'Bronco Sport', 'Contour', 'Crown Victoria', 'E-150', 'E-150', 'E-150 Club Wagon'],
// //         'Honda': ['Accord', 'Civic', 'Clarity', 'CR-V', 'Crosstour', 'CRX', 'Element', 'Fit', 'HR-V', 'Insight', 'Passport'],
// //         'Jaguar': ['F-Pace', 'Vanden Plas', 'XE', 'XF', 'XFR', 'XFR-S', 'XJ8', 'XJR'],
// //         'Jeep': ['Cherokee', 'Comanche', 'Compass', 'Gladiator', 'Grand Cherokee', 'Liberty', 'Patriot', 'Renegade'],
// //         'Land Rover': ['Discovery', 'Discovery Sport', 'Freelander', 'LR2', 'LR3', 'LR4', 'ange Rover', 'Range Rover Evoque'],
// //         'Mazda': ['626', 'B2200', 'B2300', 'B2500', 'B3000', 'CX-3', 'CX-5', 'Miata', 'Navajo', 'Tribute'],
// //         'Mercedes_Benz': ['190D', '190E', '200D', '260E', '300CE', '300SD', '300SDL', '300SE', '300SEL', '300TE', 'AMG GT 53', 'C230', 'C32 AMG', 'C450 AMG', 'CLA45 AMG', 'SLK350', 'Sprinter 1500'],
// //         'Nissan': ['200SX', '240SX', '300ZX', 'Almera', 'Cube', 'Frontier', 'Maxima', 'GT-R', 'Micra', 'NV1500', 'Patrol', 'Stanza', 'Versa', 'Versa Note', 'X-Trail', 'Xterra'],
// //         'Peugeot': ['106', '107', '205', '206', '306', '307', '406', '407', '3008'],
// //         'Porsche': ['911', '944', 'Boxster', 'Cayenne', 'Cayman', 'Macan', 'Panamera'],
// //         'Skoda': ['Fabia', 'Favorit', 'Felicia', 'Octavia', 'Roomster', 'Superb'],
// //         'Tesla': ['3', 'S', 'X'],
// //         'Toyota': ['86', '4Runner', 'Avalon', 'Avensis', 'C-HR', 'Camry', 'Celica', 'Corolla', 'Echo', 'Highlander', 'Matrix', 'MR2 Spyder', 'Paseo', 'Pickup', 'Prado', 'Previa', 'Sienna', 'Venza', 'Yaris', 'Yaris iA'],
// //         'Volvo': ['780', '850', '940', '960', 'C30', 'C70', 'S40', 'S60', 'S60 Cross Country', 'XC40', 'XC60', 'XC70', 'XC90'],


// //     }

// //     const navigate = useNavigate();
// //     const [nom, setNom] = useState("");
// //     const [image, setImage] = useState();
// //     const [marque, setMarque] = useState("");
// //     const [modele, setModele] = useState("");
// //     const [validationError, setValidationError] = useState({});

// //     const changeHandler = (event) => {
// //         setImage(event.target.files[0]);
// //     }

// //     const createProduct = async (e) => {
// //         e.preventDefault();

// //         const formData = new FormData();
// //         formData.append('nom', nom);
// //         formData.append('image', image);
// //         formData.append('marque', marque);
// //         formData.append('modele', modele);

// //         await axios.post(`http://localhost:8000/api/products`, formData).then(({ data }) => {
// //             Swal.fire({
// //                 icon: "success",
// //                 text: data.message
// //             })
// //             navigate("/maintenance");
// //         }).catch(({ response }) => {
// //             if (response.status === 422) {
// //                 setValidationError(response.data.errors);
// //             } else {
// //                 Swal.fire({
// //                     text: response.data.message,
// //                     icon: "error"
// //                 })
// //             }
// //         })
// //     }

// // return (
// //     <div className="settings">
// //      <div className="settings__wrapper">
// //       <div className='appBg-create'>
// //    <center> 
// //        <Form className="" onSubmit={createProduct}>
// //             <div className="settings__title"> 
// //           <h2 > Créer Nouvelle Maintenance : <hr /></h2><br />
// //            </div>
// //             <div className="form__group-maint">
// //             <br /> <br /><br />

// //             <Row>
// //                 <Col>
// //               <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
// //                     <Form.Label className="g_style"  >Nom :</Form.Label>
// //                     <Form.Control className='w-100 form-control' type="text" value={nom} onChange={(event) => {
// //                         setNom(event.target.value)
// //                     }} />
// //                 </Form.Group>
// //                 </Col>
// //                      </Row>

// //                      <Row>
// //                 <Col>
// //               <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
// //                     <Form.Label className="g_style"  >Date d’opération:</Form.Label>
// //                     <Form.Control className=' form-control' type="date" value={nom} onChange={(event) => {
// //                         setNom(event.target.value)
// //                     }} />
// //                 </Form.Group>  
// //                 </Col>
// //                      </Row>

// //                      <Row>
// //                 <Col>
// //               <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
// //                     <Form.Label className="g_style"  >Type :</Form.Label>
// //                     <Form.Control className='w-100 form-control' type="text" value={nom} onChange={(event) => {
// //                         setNom(event.target.value)
// //                     }} />
// //                 </Form.Group>
// //                 </Col>
// //                      </Row> <br /> <br /><br />


        
                 
 
// //               </div>
// //               <div className='form__group-maint-2'>
// //                      <Row>
// //                 <Col>
// //               <Form.Group controlId="nom" style={{marginTop:"-60px" ,marginLeft:"110px"}}>
// //                     <Form.Label className="g_style"  >Kilométrage:</Form.Label>
// //                     <Form.Control className='w-100  form-control' type="number" value={nom} onChange={(event) => {
// //                         setNom(event.target.value)
// //                     }} />
// //                 </Form.Group>
// //                 </Col>
// //                      </Row> <br /> <br /><br />

// //                      <Row>
// //                 <Col>
// //               <Form.Group controlId="nom" style={{marginTop:"-60px",marginLeft:"-50px"}}>
// //                     <Form.Label className="g_style"  >Frais :</Form.Label>
// //                     <Form.Control className='  form-control' type="text" value={nom} onChange={(event) => {
// //                         setNom(event.target.value)
// //                     }} />
// //                 </Form.Group>
// //                 </Col>
// //                      </Row> <br /> <br /><br />

// //                 <br /> 

                
// //                 </div>
        
// //               {/* <div className="form__grup"> */}
// //                      <center>  
                         
// //                      <Row>
// //                 <Col>
// //               <Form.Group controlId="nom"  style={{marginTop:"-30px",marginLeft:"-45px"}}>
// //                     <Form.Label className="g_style"  >Image:</Form.Label>
// //                     <Form.Control  className='  w-25 form-control' type="file" value={image} onChange={changeHandler} />
// //                 </Form.Group>
// //                 </Col>
// //                      </Row>  

// //                 <br /> 
                 
// //                           </center> 
                          
               
// //                    {/* </div> */}
                     
                    
              
// //                    <center> 
// //                         <Button variant="primary" className="mt-2 p-2 m-2" size="lg" block="block" type="submit">
// //                             Créer
// //                         </Button>                  
// //                          </center>
                 
                 
// //                    </Form> </center> 

// //                    <div>
// //            {Object.keys(validationError).length > 0 && (
// //                         <div className="row">
// //                             <div className="col-12">
// //                                 <div className="alert alert-danger">
// //                                     <ul className="mb-0">
// //                                         {Object.entries(validationError).map(([key, value]) => (
// //                                             <li key={key}>{value}</li>
// //                                             ))}
// //                                     </ul>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     )}

// //              </div>
// //           </div>
// //           </div>
// //         </div>
         
        
        
        
        
        
        
        
        
        
        
         
// //     )
// // }

// // export default CreateMaint




// // ----------------------------------------------------------------------------------



// import React, { useEffect, useState } from 'react'
// import { Form } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
// import { Row } from 'react-bootstrap'
// import { Col } from 'react-bootstrap'
// // import { useNavigate, useParams } from 'react-router-dom'
// // import axios from 'axios'
// // import Swal from 'sweetalert2'
 
// function EditMaint() {
     

//     // const navigate = useNavigate();
//     // const { id } = useParams();
//     // const [nom, setNom] = useState("");
//     // const [marque, setMarque] = useState("");
//     // const [modele, setModele] = useState("");
//     // const [image, setImage] = useState(null);
//     // const [validationError, setValidationError] = useState({});

//     // useEffect(() => {
//     //     fetchProduct();
//     // }, []);

//     // const fetchProduct = async () => {
//     //     await axios.get(`http://localhost:8000/api/products/${id}`).then(({ data }) => {
//     //         const { nom, marque, modele, } = data.product;
//     //         setMarque(marque);
//     //         setModele(modele);
//     //         setNom(nom);


//     //     }).catch(({ response: { data } }) => {
//     //         Swal.fire({
//     //             text: data.message,
//     //             icon: "error"
//     //         })
//     //     })
//     // }

//     // const changeHandler = (event) => {
//     //     setImage(event.target.files[0]);
//     // }

//     // const updateProduct = async (e) => {
//     //     e.preventDefault();

//     //     const formData = new FormData();
//     //     formData.append('_method', 'PATCH');
//     //     formData.append('nom', nom);
//     //     formData.append('marque', marque);
//     //     formData.append('modele', modele);
//     //     if (image !== null) {
//     //         formData.append('image', image);
//     //     }

//     //     await axios.post(`http://localhost:8000/api/products/${id}`, formData).then(({ data }) => {
//     //         Swal.fire({
//     //             icon: "success",
//     //             text: data.message
//     //         })
//     //         navigate("/users")
//     //     }).catch(({ response }) => {
//     //         if (response.status === 422) {
//     //             setValidationError(response.data.erros)
//     //         } else {
//     //             Swal.fire({
//     //                 text: response.data.message,
//     //                 icon: "error"
//     //             })
//     //         }
//     //     })
//     // }

//     return (
//         <div className="settings">
//      <div className="settings__wrapper">
//       <div className='appBg-create'>
//    <center> 
//        <Form className=""  >
//             <div className="settings__title"> 
//           <h2 > Editer Votre Information : <hr /></h2><br />
//            </div>
//             <div className="form__group-maint">
//             <br /> <br /><br />

//             <Row>
//                 <Col>
//               <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
//                     <Form.Label className="g_style"  >Nom :</Form.Label>
//                     <Form.Control className='w-100 form-control' type="text" />
//                 </Form.Group>
//                 </Col>
//                      </Row>

//                      <Row>
//                 <Col>
//               <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
//                     <Form.Label className="g_style"  >Date d’opération:</Form.Label>
//                     <Form.Control className=' form-control' type="date" />
//                 </Form.Group>  
//                 </Col>
//                      </Row>

//                      <Row>
//                 <Col>
//               <Form.Group controlId="nom" style={{marginTop:"-60px"}}>
//                     <Form.Label className="g_style"  >Type :</Form.Label>
//                     <Form.Control className='w-100 form-control' type="text" />
//                 </Form.Group>
//                 </Col>
//                      </Row> <br /> <br /><br />


        
                 
 
//               </div>
//               <div className='form__group-maint-2'>
//                      <Row>
//                 <Col>
//               <Form.Group controlId="nom" style={{marginTop:"-60px" ,marginLeft:"110px"}}>
//                     <Form.Label className="g_style"  >Kilométrage:</Form.Label>
//                     <Form.Control className='w-100  form-control' type="number" />
//                 </Form.Group>
//                 </Col>
//                      </Row> <br /> <br /><br />

//                      <Row>
//                 <Col>
//               <Form.Group controlId="nom" style={{marginTop:"-60px",marginLeft:"-50px"}}>
//                     <Form.Label className="g_style"  >Frais :</Form.Label>
//                     <Form.Control className='  form-control' type="text" />
//                 </Form.Group>
//                 </Col>
//                      </Row> <br /> <br /><br />

//                 <br /> 

                
//                 </div>
        
//               {/* <div className="form__grup"> */}
//                      <center>  
                         
//                      <Row>
//                 <Col>
//               <Form.Group controlId="nom"  style={{marginTop:"-30px",marginLeft:"-45px"}}>
//                     <Form.Label className="g_style"  >Image:</Form.Label>
//                     <Form.Control  className='  w-25 form-control' type="file" />
//                 </Form.Group>
//                 </Col>
//                      </Row>  

//                 <br /> 
                 
//                           </center> 
                          
               
//                    {/* </div> */}
//                     <br />
                    
              
//                    <center> 
//                         <Button variant="primary" className="mt-2 p-2 m-2" size="lg" block="block" type="submit">
//                             Créer
//                         </Button>                  
//                          </center>
                 
                 
//                    </Form> </center> 

           
//           </div>
//           </div>
//         </div>
         
        
        
        
        
        
        
        
        
        
        



           
                
// )
// }

// export default EditMaint

