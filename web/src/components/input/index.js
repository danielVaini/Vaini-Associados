import './style.css'

export default function Input (props){
  return(
    <>
      <div className="input-div" >

        <p>{props.label}</p>
        <input type="text"/>
      </div>
    </>
  );
}