"use client";
import { useEffect, useReducer } from "react";
import { create } from "@/app/api/create";
import { CircularProgress, Alert } from "@mui/material";
import { Check, Error } from "../../svg";
import { signIn } from 'next-auth/react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function reducer(state, action) {
  switch (action.type) {
    case "update_value":
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value,
        },
      };
    case "credentials_update":
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [action.payload.name]: action.payload.value,
        },
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "alert":
      return {
        ...state,
        alert: {
          open: action.payload.open,
          message: action.payload.message,
          type: action.payload.type,
        },
      };
    case "errors_email":
      return {
        ...state,
        errors: {
          ...state.errors,
          email: action.payload,
        },
      };
    case "errors_password":
      return {
        ...state,
        errors: {
          ...state.errors,
          password: action.payload,
        },
      };
    case "errors_cpassword":
      return {
        ...state,
        errors: {
          ...state.errors,
          cpassword: action.payload,
        },
      };
    case "empty_values":
        return {
            ...state,
            values: {
                name: "",
                email: "",
                password: "",
                cpassword: "",
              }
        }
    default:
      return state;
  }
}

export default function Form({ login, handleLogin }) {
  const {data:session,status} = useSession()
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, {
    values: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    credentials: {
      email: "",
      password: "",
    },
    loading: false,
    errors: {
      email: false,
      password: false,
      cpassword: false,
    },
    alert: {
      open: false,
      message: "",
      type: "",
    },
  });
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidPassword = (pass) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passRegex.test(pass);
  };

  const handleChange = (e) => {
    dispatch({
      type: "update_value",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleCredentials = (e) => {
    dispatch({
      type: "credentials_update",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const CREATE = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading", payload: true });

    if (
      state.values.email !== "" &&
      state.values.password !== "" &&
      state.values.cpassword !== "" &&
      state.values.name !== "" &&
      !state.errors.email &&
      !state.errors.password &&
      !state.errors.cpassword
    ) {
      try {
        await create([state.values.name, state.values.email, state.values.password]);
        dispatch({ type: "alert", payload: { open: true, message: "Account created successfully", type: "success" } });
        dispatch({ type: "empty_values"});
        setTimeout(() => {
          dispatch({ type: "alert", payload: { open: false, message: "" } });
        }, 4000);
      } catch (error) {
        dispatch({ type: "alert", payload: { open: true, message: "Account creation failed", type: "error" } });
        setTimeout(() => {
          dispatch({ type: "alert", payload: { open: false, message: "" } });
        }, 4000);
      }
    }

    dispatch({ type: "loading", payload: false });
  };
  const LOGIN = async(e)=>{
     e.preventDefault()
     dispatch({type:"loading",payload:true})
     signIn('credentials',{
      redirect:false,
      email:state.credentials.email,
      password:state.credentials.password

     }).then(res => {
       if(res.ok){
         console.log(res);
       }else{
        console.log(res);
       }
     }).catch(err => {
        console.log(err);
     })
     dispatch({type:"loading",payload:false})
  }
  
  useEffect(() => {
    if (!isValidEmail(state.values.email) && state.values.email !== "") {
      dispatch({ type: "errors_email", payload: true });
    } else {
      dispatch({ type: "errors_email", payload: false });
    }
    if (state.values.password !== "" && !isValidPassword(state.values.password)) {
      dispatch({ type: "errors_password", payload: true });
    } else {
      dispatch({ type: "errors_password", payload: false });
    }
    if (
      state.values.cpassword !== state.values.password ||
      !isValidPassword(state.values.password)
    ) {
      dispatch({ type: "errors_cpassword", payload: true });
    } else {
      dispatch({ type: "errors_cpassword", payload: false });
    }
  }, [state.values]);
 

  return (
    <form
      className={`flex justify-center flex-col items-center mt-5 ${login && "mb-5"}`}
      onSubmit={(e) => !login ? CREATE(e) : LOGIN(e)}
    >
      {login ? (
        <div className="form_container lg:w-5/12 w-full px-4 py-6 border flex flex-col gap-2 rounded-xl">
          <label htmlFor="email" className="text-gray_text text-sm text-capitalize">
            email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`rounded border px-3 py-2 outline-none`}
            value={state.credentials.email}
            onChange={handleCredentials}
          />
          <label htmlFor="password" className="text-gray_text text-sm text-capitalize">
            password*
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded border px-3 py-2 outline-none"
            value={state.credentials.password}
            onChange={handleCredentials}
          />
          <div className="d-flex gap-3">
            <input type="checkbox" name="terms" id="terms" />
            <p className="text-one mb-0">Terms of Use & Privacy Policy</p>
          </div>
          {
            state.loading ? (
              <div className="flex justify-center items-center bg-one cursor-not-allowed">
                <CircularProgress style={{ width: "15px", height: "15px" }} />
              </div>
            ) : (
              <button className="bg-one text-white font-semibold px-2 py-2 rounded" type="submit">
                Login
              </button>
            )
          }
        </div>
      ) : (
        <div className="form_container lg:w-5/12 w-full px-4 py-6 border flex flex-col gap-2 rounded-xl">
          <label htmlFor="name" className="text-gray_text text-sm text-capitalize">
            full name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded border px-3 py-2 outline-none"
            value={state.values.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="text-gray_text text-sm text-capitalize">
            email*
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className={`rounded border px-3 py-2 ${state.values.email == '' ? 'outline-none' : isValidEmail(state.values.email) ? 'outline-one':'outline-red-600'}`}
            value={state.values.email}
            onChange={handleChange}
          />
          {(state.errors.email && state.values.email !== "") && <small className="text-danger">invalid email</small>}
          <label htmlFor="password" className="text-gray_text text-sm text-capitalize">
            password*
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`rounded border px-3 py-2 ${state.values.password == '' ? 'outline-none' : isValidPassword(state.values.password) ? 'outline-one':'outline-red-600'}`}
            value={state.values.password}
            onChange={handleChange}
          />
          {(state.errors.password && state.values.password !== "") && <small className="text-danger">password invalid</small>}
          <label htmlFor="cpassword" className="text-gray_text text-sm text-capitalize">
            confirm password*
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            className={`rounded border px-3 py-2 ${state.values.password == '' ? 'outline-none' : (state.values.cpassword !== ""  && state.errors.cpassword) ? 'outline-red-600':'outline-one'}`}
            value={state.values.cpassword}
            onChange={handleChange}
          />
          {(state.errors.cpassword && state.values.cpassword !== "") && <small className="text-danger">password invalid (must be the same as the first one)</small>}
          <div className="d-flex gap-3">
            <input type="checkbox" name="terms" id="terms" />
            <p className="text-one mb-0">Terms of Use & Privacy Policy</p>
          </div>
          {state.loading ? (
            <div className="bg-one text-white font-semibold px-2 py-2 rounded cursor-not-allowed">
              <CircularProgress style={{ width: "15px", height: "15px" }} />
            </div>
          ) : (
            (state.errors.email || state.errors.password || state.errors.cpassword) ? (
                <div className="bg-one text-white font-semibold px-2 py-2 rounded cursor-not-allowed flex justify-center items-center">
                    <span>Sign up</span>
                </div>
            ) : (
                <button className="bg-one text-white font-semibold px-2 py-2 rounded" type="submit">
              Sign Up
            </button>
            )
            
          )}
        </div>
      )}
      {state.alert.open && (
        <Alert icon = {state.alert.type === "success" ? <Check width={25} height={25} color={'green'}/>: <Error width={20} height={20} color={'red'}/>} severity={state.alert.type} style={{ position: "absolute", top: "12.5%" }} className="md:w-1/3 w-10/12">
          {state.alert.message}
        </Alert>
      )}
    </form>
  );
}
