import './styles/CustomInput.css';

function CustomInput(props) {
  return (
    <>
     {props.type == 'textarea' && 
      <div className="CustomInput md:col-span-2">
        <textarea type='text' placeholder={props.label} className='custom-input textarea'></textarea>
      </div>
      }
      {props.type == 'text' && 
      <div className="CustomInput">
         <input type='text' placeholder={props.label} className='custom-input'></input>
      </div>
      }
    </>
  );
}

export default CustomInput;
