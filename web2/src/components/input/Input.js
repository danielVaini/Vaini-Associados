import './styles.css'

export default function Input(props){
  return(
    <div className="input-container">
      <label>{props.label}</label>
      <input type="text"/>
    </div>
  );
}