import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
 
import 'bootstrap/dist/css/bootstrap.css';

 export default function Dashboard() {
    return (
             
        <div className='container'><br /> <br />
        <div className='AppBgDash0'>
    <div className="row">

    <div className="dashboard__cards">
    <div className="single__card ">
      <h4  >Dashboard :</h4>

</div>
  
</div>
         
<div className="col-12" >
{/* <Link className='btn btn-primary mb-2 float-end'
 to={"/create"}>
Créer .... 
</Link>  */}

</div> 
<br /> <br /> <br />
<div className="col-12">
<div className="">
<div className="table-responsive">
<table className="table table- mb-0 text-center">
<thead>
<tr>
<td>Section</td>
<td>Indicateurs</td>

 </tr>
</thead>
<tbody>
 
<tr >
    <td>Ce mois</td>
    <td>
    Total carburant consommé. <br />
    Total couts carburants <br />
    Total couts maintenance <br />
    Nombre d’opérations maintenance<br />
    Total couts véhicule.<br />

    </td>
</tr>
<tr >
    <td>Evolution mensuelle : choix de mois</td>
    <td>
    Consommation carburant par mois.<br />
    Cout carburant par mois<br />
    Cout maintenance par mois.<br />
 </td>
</tr>

<tr >
    <td>Evolution mensuelle : choix de l’année</td>
    <td> Consommation carburant par an.<br />
    Cout carburant par an<br />
    Cout maintenance par an.<br />
</td>
</tr>

 
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
