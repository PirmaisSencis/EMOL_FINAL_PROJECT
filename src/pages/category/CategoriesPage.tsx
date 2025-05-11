import { useAppDispatch, useAppSelector } from "../../api/hooks";
import LayoutPage from "../../layoutPage";
import { getFormInputValueByName } from "../../utils/FormHelper";
import { createCategory } from "../../api/slices/category";
function CategoriesPage() {
    const dispatch = useAppDispatch();
    const { categories, isLoading, error } = useAppSelector((state) => state.category);
  
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let name = getFormInputValueByName(event.currentTarget, "name");
    if (!name) {
      console.error("Name is required");
      return;
    }
    
    dispatch(createCategory({ name }))
    .unwrap()
    .then((data) => {
      console.log("Registration successful", data);
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
            
            <div className="button-block">
            <button type="submit">Create</button>
            </div>
          </form>
          </LayoutPage>
        </>
      )
    }
  
    
    export default CategoriesPage 