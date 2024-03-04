import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Fields({name,email,index}) {
    const Fields=({name,email,index,data})=> {
        console.log(data)
    }
  return (
    <div className="data_val">
        
          <h4>{name}</h4>
          <h4>{email}</h4>
          <Stack>
          <Button color="error" variant="contained">
            <DeleteIcon />
          </Button>
          </Stack>
    </div>
  )
}

export default Fields