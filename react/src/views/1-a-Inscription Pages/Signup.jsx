import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import LogoImage from "../../images/S1.png";
import "./Signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import axiosClient from "../../axios-client"
import { useStateContext } from "../../context/ContextProvider"

export default function Signup() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { setUser, setToken } = useStateContext()
    const [errors, setErrors] = useState(null)
    const [btnStatus, setBtnStatus] = useState(false)

    const handlChange = () => {
        setBtnStatus(!btnStatus)
    }
    const onSubmit = ev => {


        ev.preventDefault()

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        console.log(payload);
        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })

    }
    return (
        <div>                        
        <div className="appBgS">
        <form onSubmit={onSubmit} className="LoginFormS" >
          <div className="profile_logoS">

          <center>
            <img src={LogoImage} alt=""  />  
          </center>
          </div>
          <center>  

          <h1 style={{fontSize:'25px' , marginTop:"12px" }} >
            S'inscrire
            </h1>
         
          {errors &&
            <div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>
        }
          <hr />
           
          <div style={{fontSize:"2px"}} class=" col-6 text-start  p-2 m-1" >
                  <label for="" class="labels-S">
               Nom et Prenom :  </label>
                <input ref={nameRef} type="text"  class="inputs-S form-control"
                 style={{width:"390px"}} placeholder="Saisir Votre Nom Complete"  /> 
                 
           </div>

         <div class=" col-6 text-start  p-2 m-1">
                  <label for="" class="labels-S"  >
                Email :  </label>
                <input ref={emailRef} type="email"  class="inputs-S form-control" 
                 style={{width:"390px"}}  placeholder="Saisir Votre Email"  /> 
           </div>

          <div class=" col-6 text-start  p-2 m-1" >
              <label for="" class="labels-S"  > 
                Mot De Passe :</label>
                <input ref={passwordRef} class="inputs-S form-control"
                  style={{width:"390px"}}  placeholder="Saisir Votre Mot De passe" type="password"  /> 
         </div>

       <div class=" col-6 text-start  p-2 m-1">
              <label for="" class="labels-S"  > 
                Confirmer Mot De Passe :</label>
                <input ref={passwordConfirmationRef}  class=" inputs-S form-control"
                  style={{width:"390px"}}  placeholder="Répeter  Votre Mot De passe" type="password"  /> 
         </div>
        
          <div >
            <input style={{fontSize:"20px" ,   marginTop:"-1px" , marginRight:"4px"}} 
                 onChange={handlChange}   type='checkbox' class="form-check-input"    />
            <span style={{fontSize:"20px",marginRight:"-8px" }} >
                  Oui, j'accepte les conditions d'utilisation .</span> 
          </div>
           
            <button disabled={!btnStatus} class="btn btn-primary m-1 p-1"> 
        
              S'inscrire </button>
              <div className="c-conex m-0 p-0">
             <p>Connectez-vous ?</p> 
             <Link style={{  color:"blue" ,  }}
              to="/login" class="text-decoration-none">
                Connexion</Link>

             </div> 
               

             </center>
        </form>
      </div>
        </div>    
    )
}
