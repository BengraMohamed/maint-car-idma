import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import LogoImage from "../../images/S1.png";
import axiosClient from "../../axios-client"
import { useStateContext } from "../../context/ContextProvider"
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)
    
     
    const onSubmit = ev => {
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message)
                }
            })

         
          
    }
    
    return (
        <div>                        
        <div className="appBg">
        <form className="LoginForm form-group"  onSubmit={onSubmit}>
          <div className="profile_logoL">
             <center><img src={LogoImage} alt=""  /> 
             </center> 
            </div>
          <center>  
          <h1 style={{fontSize:'25px', marginTop:"12px" }} >Connexion  </h1>
         
          {/* {message &&
    <div class="text-danger">
        <p>{message}</p>
        </div>
                    } */}
         <hr />
          <div  >
    
          <div   class=" col-6 text-start  p-2 m-1">
            <label for="email" class="labels-L"  >Email :</label>
            <input type="email"  ref={emailRef}    class="input-L form-control" placeholder="Saisir Votre Email"
              style={{width:"390px"}} 
                />

                <p class="text-danger" id="input-L" style={{width:"400px", marginLeft:"-100px",height:"10px"}}>
                {message}
                </p>

        
          </div>
    
          <div class=" col-6 text-start  p-2 m-1">
              <label for="password" class="labels-L">Mot De Passe :</label>
              <input class="input-L form-control " ref={passwordRef}   type="password" placeholder="Saisir Votre Mot De passe"   
                    style={{width:"390px", marginLeft:"-100px"}}  />


                <p class="text-danger" id="input-L" style={{width:"400px", marginLeft:"-100px",height:"10px"}} >
                    {message}
                    </p>
      
            </div>
    
                <button block class="btn btn-primary m-1 p-1 "   > 
                    Connexion</button>
                   
                  
           </div>
            {/* <br /> */}
                
               <h1 style={{borderColor:"yellow" , fontSize:"20px"}} >
    
               Vous n'avez pas de compte ?
              
                 <span >  
                 <Link to={"/signup"} style={{color:"blue"}} class="text-decoration-none"> Créer un compte</Link>
                 </span></h1> 
    
                
                <Link style={{ color:"red"}} to={"/forgot-password"}
                class="text-decoration-none">
                 Mot De passe Oublier  ?  
                  </Link>
              
                 
             
              </center>
    
            </form>
        
     
      </div>
        </div>
    )
        
}
