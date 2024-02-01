import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import "./EditProduct.css"

function EditProduct() {


    const navigate = useNavigate();
    const { id } = useParams();
    const [nom, setNom] = useState("");
    const [marque, setMarque] = useState("");
    const [modele, setModele] = useState("");
    const [image, setImage] = useState(null);
    const [validationError, setValidationError] = useState({});

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        await axios.get(`http://localhost:8000/api/products/${id}`).then(({ data }) => {
            const { nom, marque, modele, } = data.product;
            setMarque(marque);
            setModele(modele);
            setNom(nom);


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

    const updateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('nom', nom);
        formData.append('marque', marque);
        formData.append('modele', modele);
        if (image !== null) {
            formData.append('image', image);
        }

        await axios.post(`http://localhost:8000/api/products/${id}`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/products")
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
        <div className='settings'>
<div className=" ">
<div className="appBg-edit">
<br />

<div className=" "><br />
<center>
 <h4 className="title_edit_vehicule" >Editer Votre informations:</h4> 
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
<Form onSubmit={updateProduct}>
    <Row>
        <Col>
            <Form.Group controlId="nom">
                <Form.Label className="g_style">Nom :</Form.Label>
                <Form.Control className='w-50 form-control' type="text" value={nom} onChange={(event) => {
                    setNom(event.target.value)}} />
            </Form.Group>
        </Col>
    </Row>

    <Row>
        <Col>
            <Form.Group controlId="marque">
                <Form.Label className="g_style">Marque :</Form.Label>

                <select className="w-50 form-select" aria-label="Default select example" onChange={(e) => { setMarque(e.target.value) }}>


                    <option>{marque}</option>


                </select><br />


              <label className="g_style">  Modèle: </label>


                {marque && <select className="w-50 form-select" aria-label="Default select example" onChange={(e) => { setModele(e.target.value) }} >


                    return <option>{modele}</option>


                </select>}
            </Form.Group>
        </Col>
    </Row><br />

    <Row>
        <Col>
            <Form.Group controlId="Image">
                <Form.Label className="g_style">Image :</Form.Label>
                <Form.Control className="w-50" type="file" onChange={changeHandler} />
            </Form.Group>
        </Col>
    </Row> <br />
    <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
        Editer
    </Button>
</Form>
</div>
</center>
</div>
</div>
</div>
</div>


           
                
)
}

export default EditProduct
