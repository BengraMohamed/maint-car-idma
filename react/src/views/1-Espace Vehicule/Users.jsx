import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
 import "./Users.css"
 
function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api/products`).then(({ data }) => {
            setProducts(data);
        })
    }

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: "Es-tu sûr?",
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, supprimez-le !"
        }).then((result) => {
            return result.isConfirmed
        })

        if (!isConfirm) {
            return;
        }

        await axios.delete(`http://localhost:8000/api/products/${id}`).then(({ data }) => {
            Swal.fire({
                icon: 'success',
                text: data.message
            })
            fetchProducts()
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: 'error'
            })
        })
    }

 

return (
    <div className='container'><br /> <br />
                <div className='AppBgDash0'>
            <div className="row">

            <div className="dashboard__cards ">
            <div className="single__card">
              <h4  >Espace Véhicule </h4>
       
    </div>
          
    </div>
                 
    <div className="col-12" >
        {
        products.length < 3 ? 
        <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>
        Créer véhicule
        </Link> : null
        }
        </div> 
        <br /> <br /> <br />
        <div className="col-12">
        <div className="">
        <div className="table-responsive">
        <table className="table table- mb-0 text-center">
        <thead>
        <tr>
        <td>Nom</td>
        <td>Marque</td>
        <td>Modèle </td>
        <td>image</td>
        <td>Actions</td>

        </tr>
        </thead>
        <tbody>
        {products.length > 0 ? (
        products.map((row, key) => (
        <tr key={key}>
            <td>{row.nom}</td>
            <td>{row.marque}</td>
            <td>{row.modele}</td>
            <td> 
                <img width="78px" height="50px" src={`http://localhost:8000/storage/product/image/${row.image}`}   /> 
            </td>
            <td>
                <Link to={`/product/edit/${row.id}`} className="btn btn-success me-2">
                    Éditer
                </Link>
                <Button variant='danger' onClick={() => deleteProduct(row.id)}>
                    Effacer
                </Button>
            </td>
        </tr>
        ))
        ) : (
        <tr>
        <td colSpan="5">No véhicules trouvée</td>
        </tr>
        )}
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
            </div>
        </div>
    )
}

export default ProductList
