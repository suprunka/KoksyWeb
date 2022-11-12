import React from "react";
import UserForm from "./UserForm";
import img from "../../../imgs/logo128.png"
import { useDispatch } from "react-redux";
import { registerAction } from "../../../redux/actions/AuthActions";

export default function RegisterView()
{
    const dispatch = useDispatch()


    var handleSubmit=(data)=>{
        dispatch(registerAction(data))
        //  dispatch(addSession(request))
        }
    
    return(
        <div className="loginScreen">
        <img className="center-h" src={img}/>
      <p className="center-h pt-4 w-fc" >Dołącz do KOKSÓW</p>
                  <UserForm
                  submit={handleSubmit}
                  />
        </div>
    );
}