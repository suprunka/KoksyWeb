import React from "react";
import { useForm } from "react-hook-form";
import { InvalidMessage } from "../../../Components/FormComponents";
import PropTypes from "prop-types";

export default function UserForm({submit}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    submit({
      name:data.firstName,
      email:data.email,
      password:data.password
    })
  }; // your form submit function which will invoke after successful validation
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input className={errors?.email?.type !== undefined? "error pureInput":"pureInput"}  label={'Imię'} 
        {...register("firstName", {
          required: true,
          maxLength: 30,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <InvalidMessage>To pole jest wymagane.</InvalidMessage>}
      {errors?.firstName?.type === "maxLength" && (
        <InvalidMessage>Masz za długie imie</InvalidMessage>
      )}
      <input className={errors?.email?.type !== undefined? "error pureInput":"pureInput"} 
      label={'Email'}  {...register("email", {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
      {errors?.email?.type === "required" && <InvalidMessage>To pole jest wymagane.</InvalidMessage>}
      {errors?.email?.type === "pattern" && <InvalidMessage>Niepoprawny mail.</InvalidMessage>}
      <input type="password" className={errors?.email?.type !== undefined? "error pureInput":"pureInput"}
        label={'Hasło'}  {...register("password", { required:true, min: 5, max: 99 })} />
      {errors?.password?.type === "required" && <InvalidMessage>To pole jest wymagane.</InvalidMessage>}

      <button className="breakBtn" type="submit">Załóż konto</button>
    </form>
  );
}

UserForm.propTypes={
  submit: PropTypes.func
}