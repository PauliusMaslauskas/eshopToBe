import React from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Paper, Box, Button, } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


export default function ItemForm(props) {

  const [itemName, setName]=React.useState('')
  const [itemPrice, setPrice]=React.useState(0)
  const [itemDescription, setDescription]=React.useState('')
  const navigate = useNavigate()
  

  const addItemOnClick=(e)=>{
    e.preventDefault()
    const product={itemName, itemPrice, itemDescription}
    axios.post('http://localhost:8080/items/add', product)
    .then(res=> product.id = res.data)
    props.onSubmit(product)
}

  return (
<>
  <form onSubmit={addItemOnClick}>
  <Paper elevation={3}>
              <header>List Item</header>
          <Box
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              >

          <TextField 
          id="outlined-basic" 
          label="Item Name" 
          variant="outlined"    
          value={itemName}
          onChange={(e)=>setName(e.target.value)}
          />
          
          <TextField 
          id="outlined-basic1" 
          type="number" 
          pattern="[0-9]*" 
          label="Price" 
          variant="outlined" 
          value={itemPrice}
          onChange={(e)=>setPrice(e.target.value)}
          />

          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          value={itemDescription}
          onChange={(e)=>setDescription(e.target.value)}
          />

          </Box>

          <Link onClick={addItemOnClick} to="/">
            <Button onClick={() => {navigate("/")}}>
              Submit
            </Button>
          </Link>


          </Paper>
  </form>
</>
  
    )
}
