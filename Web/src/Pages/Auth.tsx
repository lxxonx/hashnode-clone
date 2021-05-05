import React, { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Redirect, useHistory, useLocation } from "react-router";
import { isLoggedInVar } from "../Apollo/localState";
import { useLoginMutation, useSignUpMutation } from "../generated/graphql";

interface Props {}

type FormInputs = {
  email: string;
  password: string;
  username: string;
};
type State = {
  signup: boolean;
};
function Auth({}: Props): ReactElement {
  const { state } = useLocation<State>();
  const history = useHistory();
  const [login] = useLoginMutation();
  const [signUp] = useSignUpMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const onLogin: SubmitHandler<FormInputs> = async (data) => {
    await login({
      variables: { ...data },
      update: (_, { data }) => {
        if (data?.login.token) {
          localStorage.setItem("token", data?.login.token);
          isLoggedInVar(true);
          history.replace("/");
        } else if (data?.login.errors) {
          // throw an error
          // setError(data?.login.errors?.field, {
          //   message: data?.login.errors?.message,
          // });
        }
      },
    });
  };
  const onSignUp: SubmitHandler<FormInputs> = async (data) => {
    await signUp({
      variables: { ...data },
      update: (_, { data }) => {
        if (data?.signUp.token) {
          localStorage.setItem("token", data?.signUp.token);
          isLoggedInVar(true);
          history.replace("/");
        }
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(state.signup ? onSignUp : onLogin)}>
        {state.signup && (
          <input {...register("username", { required: true })} />
        )}
        {errors.username && <p>username is required</p>}
        <input {...register("email", { required: true })} />
        {errors.email && <p>email is required</p>}
        <input {...register("password", { required: true })} />
        {errors.password && <p>password is required</p>}
        <button>submit</button>
      </form>
    </div>
  );
}

export default Auth;