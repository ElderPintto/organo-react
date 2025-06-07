import './InputSelect.css'

function Select(props) {
    const onChange = (event) => {
        props.setInputValue(event.target.value)
    }   
    return (
        <div className="form-field">
            <label id="text" className='form-field-label'>{props.label}</label>
            <select required={props.isRequired} className="form-field-select" value={props.value} onChange={onChange}>
                {            
                    props?.options?.map((option) => {
                        return (
                            <option value={option.value} key={option.value}>{option.label}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default Select