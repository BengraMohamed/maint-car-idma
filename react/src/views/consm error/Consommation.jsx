import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
import "./consm.css"
 function ConsmList() {

    const [consm, setConsm] = useState([]);

    useEffect(() => {
        fetchConsm();
    }, []);

    const fetchConsm = async () => {
        await axios.get(`http://localhost:8000/api/consm`).then(({ data }) => {
            setConsm(data);
        })
    }

    const delConsm = async (id) => {
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

        await axios.delete(`http://localhost:8000/api/consm/${id}`).then(({ data }) => {
            Swal.fire({
                icon: 'success',
                text: data.message
            })
            fetchConsm()
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
            <div className="single__card-consm">
              <h4  >Espace Consommation :</h4>
       
    </div>
          
    </div>
                 
    <div className="col-12" >
        {
        consm.length < 4 ? 
        <Link className='btn btn-primary mb-2 float-end' to={"/consm/create"}>
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
        <td>date</td>
        <td>qte</td>
        <td>montant </td>
        <td>image</td>
        </tr>
        </thead>
        <tbody>
        {consm.length > 0 ? (
        consm.map((row, key) => (
        <tr key={key}>
            <td>{row.date}</td>
            <td>{row.qte}</td>
            <td>{row.montant}</td>
            <td> 
                <img width="78px" height="50px" src={`http://localhost:8000/storage/consommation/image/${row.image}`}   /> 
            </td>
            <td>
            <Link to={`/consm/edit/${row.id}`} className="btn btn-success me-2">
                    Éditer
                </Link>
                <Button variant='danger' onClick={() => delConsm(row.id)}>
                    Effacer
                </Button>
            </td>
        </tr>
        ))
        ) : (
        <tr>
        <td colSpan="4">No véhicules trouvée</td>
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

export default ConsmList


