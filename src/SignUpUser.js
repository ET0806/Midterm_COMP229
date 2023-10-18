import React from 'react';
import { useForm } from 'react-hook-form';

function SignUpUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="First Name" />
      {errors.firstName && <p>This field is required</p>}
      
      <input {...register('lastName', { required: true })} placeholder="Last Name" />
      {errors.lastName && <p>This field is required</p>}
      
      <input {...register('userName', { required: true })} placeholder="Username" />
      {errors.userName && <p>This field is required</p>}
      
      <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
      {errors.email && <p>This field is required</p>}
      
      <input type="password" {...register('password', { required: true })} placeholder="Password" />
      {errors.password && <p>This field is required</p>}
      
      <input type="password" {...register('confirmPassword', {
        validate: value =>
          value === password.current || "The passwords do not match"
        })}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUpUser;