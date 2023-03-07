import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, CardContent, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


export default function () {

    const [items, setItems] = React.useState([])

    const removeItemOnClick = (id) => {
        axios.post('http://localhost:8080/items/delete/' + id)
        setItems(items.filter(item => item.id != id));
    }

    useEffect(() => {
        axios.get('http://localhost:8080/items/getAll')
            .then(res => setItems(res.data))
    }, []
    );

    return (

        <Grid 
            container 
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center" >
            
            {items.map(res => (
                <Grid 
                    item xs={8} 
                    maxWidth={300} 
                    sx={{ mt: '30px' }}
                    key={res.id}>

                    <Card>
                        <CardContent>
                            <Typography>
                              {res.itemName}
                            </Typography>
                            <Typography>
                              {res.itemPrice}
                            </Typography>
                            <Typography>
                              {res.itemDescription}
                            </Typography>
                            <Typography>
                                <Button 
                                    className='' 
                                    onClick={()=> removeItemOnClick(res.id)} 
                                    style={{height:"30px", width:"20px"}} 
                                    color="secondary"> Delete
                                </Button>

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
            }

        </Grid>

    );
}
