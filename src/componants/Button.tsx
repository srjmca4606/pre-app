type ButtonProps = {
    text: string;
    onClick?: () => void;
  };
const Button = ({text, onClick}: ButtonProps) => {
    
  return (   
    <button onClick={onClick} style={{ backgroundColor: 'blue', width: '100px', height: '50px', color: 'white', borderRadius: '5px' }}>
      {text}
    </button>
  )
}   

export default Button