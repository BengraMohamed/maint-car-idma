import { useEffect } from "react";
 import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import Maint from '../images/S1.png'
import "./sidebar.css"
export default function DefaultLayout() {
    const { user, token, setUser, setToken, } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = ev => {
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })

    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])

    return (
        <div id="defaultLayout"  >
            <aside className="dashboard" >
                    <div className="">
                    <h1 className="logo-txt"  >Maint Car</h1>   
                     <img className="logo-img" src={Maint} alt='tantan' width='100px' />
                     </div>
                     <br/><br/>
          <div>
         </div>

                <Link  to="/products" className={(navClass) =>
                  navClass.isActive ? "nav__active nav__link" : "nav__link"
                } >
                    Espace véhicules</Link> <br />

                    <Link  to="/maintenance" className={(navClass) =>
                  navClass.isActive ? "nav__active nav__link" : "nav__link"
                } >
                    Espace maintenance </Link><br/>

                    <Link  to="/consm" className={(navClass) =>
                  navClass.isActive ? "nav__active nav__link" : "nav__link"
                } >
                    Espace de consommation</Link> <br/>

                      {/* <Link to="/dashboard" className={(navClass) =>
                        navClass.isActive ? "nav__active nav__link" : "nav__link"
                        } > Tableau de bord </Link><br/> */}
             </aside> 
            <div className="content">
            <nav>
                <div className="top__nav">
            <div class="nav-d ">
           
            
            <a class="" onClick={onLogout}   className="btn  btn-danger m-2 p-1" href="#">Deconnexion</a>
            {user.name}

           {/* <Link to="/profile"></Link>  */}
           </div></div>
            </nav>
                {/* <header>

                </header> */}
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
