import React from "react";
import { InputWithLabel } from "../Components/Inputs";
import { loginAction } from "../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  var [email, setEmail] = React.useState('');
  var [password, setPasswors] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {token} = useSelector(state=> state.authState)
  useEffect(() => {
    if(token)
    navigate('/workouts')
  },[]); 
   const login=()=> {
    dispatch(loginAction({email, password}))
  }
  return (
    <div className="loginScreen">
    <p>Chcesz byc koksem?</p>
    <p>To dzialaj!</p>
    <InputWithLabel label="Email" value={email} handleChange={(v)=> setEmail(v)}/>
    <InputWithLabel label="Haslo" value={password} handleChange={(v)=> setPasswors(v)} type='password'/>
  <button onClick={login}>Login</button>
    </div>)
}

 export default Login