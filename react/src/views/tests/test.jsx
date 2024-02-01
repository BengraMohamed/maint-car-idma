{/* <div>                        
        <div className="appBgS">
        <form onSubmit={onSubmit} className="LoginFormS" >
          <div className="profile_logoS">

          <center>
            <img src={LogoImage} alt=""  />  
          </center>
          </div>
          <center>  

          <h1 style={{fontSize:'25px' , marginTop:"12px" }} >S'inscrire  </h1>
         
          {errors &&
            <div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>
        }
          <hr />
           
          <div style={{fontSize:"5px"}} class=" col-6 text-start  p-2 m-1" >
                  <label for="" class="labels-S">
               Nom et Prenom :  </label>
                <input ref={nameRef} type="text"  class="inputs-S form-control"
                 placeholder="Saisir Votre Nom Complete" required /> 
           </div>

         <div class=" col-6 text-start  p-2 m-1">
                  <label for="" class="labels-S"  >
                Email :  </label>
                <input ref={emailRef} type="email"  class="inputs-S form-control" 
                placeholder="Saisir Votre Email" required /> 
           </div>

          <div class=" col-6 text-start  p-2 m-1" >
              <label for="" class="labels-S"  > 
                Mot De Passe :</label>
                <input ref={passwordRef} class="inputs-S form-control"
                 placeholder="Saisir Votre Mot De passe" type="password" required /> 
         </div>

       <div class=" col-6 text-start  p-2 m-1">
              <label for="" class="labels-S"  > 
                Confirmer Mot De Passe :</label>
                <input ref={passwordConfirmationRef}  class=" inputs-S form-control"
                 placeholder="Répeter  Votre Mot De passe" type="password" required /> 
         </div>
        
          <div >
            <input  style={{fontSize:"20px" , marginTop:"5px" , marginRight:"5px"}} 
                 onChange={handlChange}   type='checkbox' class="form-check-input"    />
            <span style={{fontSize:"20px",marginRight:"-8px" }} >
                  Oui, j'accepte les conditions d'utilisation .</span> 
          </div>
           
            <button block class="btn btn-primary m-1 p-1"     > 
              S'inscrire</button>   

             <div className="c-conex m-0 p-0">
             <p>Connectez-vous ?</p> 
             <Link style={{  color:"blue" ,  }}
              to="/login" class="text-decoration-none">
                Connexion</Link>
             </div>        
               

             </center>
        </form>
      </div>
        </div>     */}



        <div className="login-signup-form1 animated1 fadeInDown1">
<div className="form1">
    <form onSubmit={onSubmit}>
        <h1 className="title">S'inscrire</h1>
        {errors &&
            <div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>
        }

        <input ref={nameRef} placeholder="Nom" />
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Mot do passe" />
        <input ref={passwordConfirmationRef} type="password" placeholder="Confirmer mot de passe" />
        <div class='condition'>
            <input type='checkbox' className="check-input" onChange={handlChange} />
            <span className="condition-phrase">Oui, j'accepte les conditions d'utilisation .</span>
        </div>
        <button className="btn1 btn-block" disabled={!btnStatus}>Signup</button>

        <p className="message">connectez-vous
         <Link to="/login">S'inscrire</Link></p>
    </form>
</div>
</div>
