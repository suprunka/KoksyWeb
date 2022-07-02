import React from "react";
import { InputWithLabel } from "../Components/Inputs";
import { MainLayout } from "../Components/Layout";
import { useAuth } from "../Services/AuthProvider";

function Login() {
  var [email, setEmail] = React.useState('');
  var [password, setPasswors] = React.useState('');
  const { onLogin } = useAuth();
  return (<MainLayout>
    <p>Login</p>
    <InputWithLabel label="Email" value={email} handleChange={(v)=> setEmail(v)}/>
    <InputWithLabel label="Haslo" value={password} handleChange={(v)=> setPasswors(v)} isValueHidden={true}/>
  <button onClick={onLogin}>Login</button>
  </MainLayout>)
}

export default Login;
