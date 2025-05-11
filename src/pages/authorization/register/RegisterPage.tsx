import LayoutPage from "../../../layoutPage"
import { getFormInputValueByName } from "../../../utils/FormHelper"
import { registerUser } from "../../../api/slices/auth";
import { useAppDispatch, useAppSelector } from "../../../api/hooks";
import { Navigate } from "react-router";

function Registration() {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector((state) => state.auth);

const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  let name = getFormInputValueByName(event.currentTarget, "name");
  let email = getFormInputValueByName(event.currentTarget, "email");
  let password = getFormInputValueByName(event.currentTarget, "password");
  
  if (!email || !password) {
    console.error("Email and password are required");
    return;
  }
  if(password.length < 8 || password.length > 16) {
    console.error("Password must be between 8 and 16 characters");
    return;
  }

  if(!email.includes("@")) {
    console.error("Email must contain @ symbol");
    return;
  }

  dispatch(registerUser({ name, email, password }))
  .unwrap()
  .then((data) => {
    console.log("Registration successful", data);
  <Navigate to="category"/>; 
  })
  .catch((error) => {
    console.error("Registration failed", error);
  });
}
    return (
      <>
      <LayoutPage title="Сторінка Регестрації">
        <p>{isLoading && <span>Loading...</span>}</p>
        <form onSubmit={handleSubmit}>
        <div className="name-block">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Enter name"></input>
          </div>
          <div className="email-block">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Enter email"></input>
          </div>
          <div className="password-block">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" placeholder="Enter password"></input>
          </div>
          <div className="button-block">
          <button type="submit">Register</button>
          </div>
        </form>
        </LayoutPage>
      </>
    )
  }

  
  export default Registration