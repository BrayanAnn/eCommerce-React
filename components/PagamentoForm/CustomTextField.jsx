import React from 'react';
import { TextField, Grid, Checkbox } from '@material-ui/core';
import { useFormContext} from 'react-hook-form'
import {Controller} from 'react-hook-form'



const CustomTextField = ({ name, label}) => {
    const { control } = useFormContext();


    return (
        <Grid item xs={12} sm={6}>
            <Controller          
                control={control}
                name={name}
  
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    defaultValue=""
                    required
                    fullWidth
                    label={label}
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                  />   
                )} 
            />
        </Grid>
    
    )
}

export default CustomTextField
