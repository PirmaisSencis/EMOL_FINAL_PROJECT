import LayoutPage from "../../../layoutPage"
import { getFormInputValueByName } from "../../../utils/FormHelper"
function LoginPage() {
const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  let email = getFormInputValueByName(event.currentTarget, "email");
  let password = getFormInputValueByName(event.currentTarget, "password")
  console.log( email);
  console.log(password);
}
    return (
      <>
      <LayoutPage title="Сторінка Авторизації">
        <form onSubmit={handleSubmit}>
          <div className="email-block">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Enter email"></input>
          </div>
          <div className="password-block">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" placeholder="Enter password"></input>
          </div>
          <div className="button-block">
          <button type="submit">Login</button>
          </div>
        </form>
        </LayoutPage>
      </>
    )
  }
  
  export default LoginPage