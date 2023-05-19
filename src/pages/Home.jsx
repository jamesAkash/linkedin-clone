import React, { useState } from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValue] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password) {
      alert("Please fill up all details");
      return;
    }
    if (!isLogin) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
            })
            .then(() =>
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                })
              )
            );
        })
        .catch((error) => alert(error.message));
    }

    if (isLogin) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
            })
          );
        })
        .catch((error) => alert(error));
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue({ ...values, [name]: value });
  };
  return (
    <Wrapper>
      <div className="login">
        <LinkedInIcon className="icon" />
        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <h3>login</h3>
            {!isLogin && (
              <div className="form__control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="form__control">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="form__control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">{isLogin ? "Login" : "Register"}</button>
          </form>
        </div>
        <div className="toggle__login">
          <p>{isLogin ? "Not a member Yet?" : "Already a member?"}</p>
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Sign in"}
          </button>
        </div>
      </div>
      ;
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login {
    background-color: #fff;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 800px;
    /* height: 60vh; */
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
  }

  .form__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
  }

  form {
    text-align: center;
    width: 80%;
  }

  form > h3 {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 500;
  }

  .form__control > input {
    width: 80%;
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: 0;
    border-radius: 5px;
    margin: 12px 0;
    background-color: #ececec;
    padding-left: 20px;
  }

  .toggle__login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
  }

  .toggle__login p {
    font-weight: 600;
    font-size: clamp(10px, 2vw, 18px);
    color: gray;
  }

  .toggle__login button {
    margin: 0;
    background: none;
    color: dodgerblue;
    font-size: clamp(14px, 2vw, 22px);
  }

  button {
    margin-top: 20px;
    padding: 8px 18px;
    font-size: 18px;
    border-radius: 5px;
    border: 0;
    outline: 0;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .icon {
    font-size: 120px;
  }
`;

export default Home;
