import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
import "./maint.css"

function Maint() {

    const [maints, setMaints] = useState([]);

    useEffect(() => {
        fetchMaints();
    }, []);

    const fetchMaints = async () => {
        await axios.get(`http://localhost:8000/api/maints`).then(({ data }) => {
            setMaints(data);
        })
    }

    const deleteMaint = async (id) => {
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

        await axios.delete(`http://localhost:8000/api/maints/${id}`).then(({ data }) => {
            Swal.fire({
                icon: 'success',
                text: data.message
            })
            fetchMaints()
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

            <div className="dashboard__cards-m ">
            <div className="single__card-m ">
              <h4  >Espace Maintenance </h4>
       
    </div>
          
    </div>
                 
    <div className="col-12" >
        {
        maints.length < 3 ? 
        <Link className='btn btn-primary mb-2 float-end'
         to={"/maint/create"}>
        Créer Maintenance 
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
        <td>Date d’opération</td>
        <td>Type </td>
        <td>Kilométrage </td>
        <td>Frais </td>
        <td>image</td>
        <td>Actions</td>

        </tr>

        </thead>
        <tbody>
        {maints.length > 0 ? (
        maints.map((row, key) => (
        <tr key={key}>
            <td>{row.nom}</td>
            <td>{row.date}</td>
            <td>{row.type}</td>
            <td>{row.kilo}</td>
            <td>{row.frais}</td>

            <td> 
                <img width="78px" height="50px" src={`http://localhost:8000/storage/maint/image/${row.image}`}   /> 
            </td>
            <td style={{height:"8px"}} >
                <Link to={`/maint/edit/${row.id}`} className="btn btn-success me-2">
                    Éditer
                </Link> 
                <Button variant='danger' onClick={() => deleteMaint(row.id)}>
                    Effacer
                </Button>
            </td>
        </tr>
        ))
        ) : (
        <tr>
        <td colSpan="7">No véhicules trouvée</td>
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

export default Maint
