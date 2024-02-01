import { Link  } from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import "./home.css"
 import LogoImage from "./S1.png";


function HomePage () {
  

  return (
    <div>    
    <div className="appBg-H">
   
    <header>
    <div className="profile_logo-h">
             <img src={LogoImage} alt=""  />        
      </div>      
           
        <a class="logo">Maint Car</a>

       <div class=""> 
    <Link to={"/login"}>
         <button  class="btn  btn-primary"> Connexion </button>  
    </Link>
    <Link to={"/signup"}>

         <button  class="btn-c p-1 btn btn-danger">S'incrire </button> 
     </Link>

       </div>

    </header>
    <div class="main">
    <h2> 
        <br />  <center>
          <br/>
    <span style={{color:"yellow" }}> Meilleure service de voiture  <br />
        </span><br />
        <center>  
           <h3 style={{fontSize:"40px",color:"red"}}> Un programme d'entretien régulier peut aider à maintenir votre voiture en bon état de fonctionnement  </h3>  <br/>   
       </center><Link to={"/signup"} > 
        <button class="btn btn-danger p-2 m-1">Commencer</button> <br />
     </Link>   </center>  <br />
</h2>

  </div> <br />
  
  
   </div>
  </div>


)

}
export default HomePage ;





















{/* <form className="LoginForm-Hm"  >
   
   
  <center> 
    
     
  <div className="profile_logoL">
         <center><img src={LogoImage} alt=""  /> 
         </center> 
        </div>
        

  <h1 style={{fontSize:'25px', marginTop:"12px" }} >Connexion  </h1>
 <hr />
  <div  >

  <div style={{fontSize:"16px"}} class=" col-6 text-start  p-2 m-1">
    <label for="" class="labels-L"  >Email :</label>
    <input type="email"  class="inputs-S form-control" 
            style={{width:"390px"}} placeholder="Saisir Votre Email" required /> 
    


  </div>

  <div class=" col-6 text-start  p-2 m-1">
      <label for="" class="labels-L">Mot De Passe :</label>
      <input class="inputs-S form-control " 
       style={{width:"390px"}} placeholder="Saisir Votre Mot De passe  " type="password" required /> 
    </div>

     
        <button block class="btn btn-warning m-1 p-1 "   > 
            Connexion</button>
           
          
   </div> <br />
        
       <h1 style={{borderColor:"yellow" , fontSize:"20px"}} >

       Vous n'avez pas de compte ?
      
         <span >  
         <Link to={"/signup"} style={{color:"blue"}} class="text-decoration-none"> Créer un compte</Link>
         </span></h1> 

        
        <Link style={{ color:"red"}} to={"/mdpoublier"}
        class="text-decoration-none">
         Mot De passe Oublier  ?  
          </Link>
      
         
     
      </center>

    </form>
 */}