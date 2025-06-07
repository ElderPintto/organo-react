import './InputText.css'


const InputText = (props) => {

    const onChange = (event) => {
        props.setInputValue(event.target.value)
    }   

    return (
        <div className="form-field">
            <label id="text" className='form-field-label'>{props.label}</label>
            <input value={props.value} onChange={onChange} required={props.isRequired} readOnly={props.isReadOnly} name='text' type="text" className='form-field-input' placeholder={props.placeholder} />
        </div>
    )
}

export default InputText