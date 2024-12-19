const Button = ({label, onClick}) => {
    return (
      <div className="ButtonContainer" onClick={onClick} type = "button">
      {label} 
      </div>
    );
  }
  
  export default Button;