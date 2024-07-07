"use client";
import { useEffect, useReducer } from "react";

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
    default:
      return state;
  }
}

export default function Form({ login, handleLogin }) {
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

  return (
    <form
      className={`flex justify-center flex-col items-center mt-5 ${
        login && "mb-5"
      }`}
    >
      {login ? (
        <div className="form_container lg:w-5/12 w-full px-4 py-6 border flex flex-col gap-2 rounded-xl">
          <label
            htmlFor="email"
            className="text-gray_text text-sm text-capitalize"
          >
            email*
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className={`rounded border px-3 py-2 outline-none`}
            value={state.credentials.email}
            onChange={handleCredentials}
          />
          <label
            htmlFor="password"
            className="text-gray_text text-sm text-capitalize"
          >
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
          <button className="bg-one text-white font-semibold px-2 py-2 rounded">
            Login
          </button>
        </div>
      ) : (
        <div className="form_container lg:w-5/12 w-full px-4 py-6 border flex flex-col gap-2 rounded-xl">
          <label
            htmlFor="name"
            className="text-gray_text text-sm text-capitalize"
          >
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
          <label
            htmlFor="email"
            className="text-gray_text text-sm text-capitalize"
          >
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
          {!isValidEmail(state.values.email) && state.values.email !== '' &&<small className="text-danger">invalid email</small>}
          <label
            htmlFor="password"
            className="text-gray_text text-sm text-capitalize"
          >
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
          {state.values.password !== "" && !isValidPassword(state.values.password) && <small className="text-danger">password invalid</small>}
          <label
            htmlFor="cpassword"
            className="text-gray_text text-sm text-capitalize"
          >
            confirm password*
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            className={`rounded border px-3 py-2 ${state.values.password == '' ? 'outline-none' : isValidPassword(state.values.password) && state.values.cpassword === state.values.password ? 'outline-one':'outline-red-600'}`}
            value={state.values.cpassword}
            onChange={handleChange}
          />
        {state.values.cpassword !== ""  && state.values.cpassword !== state.values.password && <small className="text-danger">password invalid (must be a same for the first one)</small>}
          <div className="d-flex gap-3">
            <input type="checkbox" name="terms" id="terms" />
            <p className="text-one mb-0">Terms of Use & Privacy Policy</p>
          </div>
          <button className="bg-one text-white font-semibold px-2 py-2 rounded">
            Sign Up
          </button>
        </div>
      )}
    </form>
  );
}
