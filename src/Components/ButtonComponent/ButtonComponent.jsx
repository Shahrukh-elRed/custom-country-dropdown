import "./button-component.scss"

const ButtonComponent = () => {
  return (
    <div className="form-submit-button" onClick={() => console.log("Submitted")} >
        <span className="submit-button-text">Get OTP</span>
    </div>
  )
}

export default ButtonComponent