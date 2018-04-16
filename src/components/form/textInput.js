import React from 'react';
import { Field } from 'react-form';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const validate = value => ({
    error: !value ? 'Field cannot be empty' : null
  })
  
const TextInput = (props) => (

// Use the form field and your custom input together to create your very own input!
<Field validate={validate} field={props.field}>
    { fieldApi => {

    // Remember to pull off everything you dont want ending up on the <input>
    // thats why we pull off onChange, onBlur, and field
    // Note, the ...rest is important because it allows you to pass any
    // additional fields to the internal <input>.
    const { onChange, onBlur, field, displayName, ...rest } = props

    const { value, error, warning, success, setValue, setTouched } = fieldApi

    return (
        <FormControl className="form-field" error={ !!error }>
        <InputLabel htmlFor={field}>{displayName}</InputLabel>
        <Input
          {...rest}
          value={value || ''}
          onChange={e => {
              setValue(e.target.value)
              if (onChange) {
                  onChange(e.target.value, e)
              }
            }
          }
          onBlur={e => {
              setTouched()
              if (onBlur) {
                onBlur(e)
              }
            }
          }
        />
        {error && <FormHelperText id="name-error-text">{error}</FormHelperText>}
        </FormControl>
    )
    }}
</Field>
)

export default TextInput;
