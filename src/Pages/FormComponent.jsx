import ButtonComponent from "../Components/ButtonComponent/ButtonComponent"
import SearchableCountryCodes from "../Components/SearchableCountryCodes/SearchableCountryCodes"
import "./form-component.scss"

const FormComponent = () => {

  return (
    <div className="form-component-container">
        <div className="form-header">Form Component</div>
        <div className="form-container">
            <div className="form-filler-text">lorem ipsum dolor sit amet, consectetur adipiscing elit.</div> 
            <div className="form-filler-text">lorem ipsum dolor sit amet, consectetur adipiscing elit.</div> 
            <div className="form-filler-text">lorem ipsum dolor sit amet, consectetur adipiscing elit.</div> 
            <div className="form-dropdown-container">
                <SearchableCountryCodes />
            </div>
            <ButtonComponent />
        </div>
    </div>
  )
}

export default FormComponent