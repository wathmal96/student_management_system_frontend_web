import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function Card({ name, age, adress, contact,deleteStd,updateStd}) {
    return (
        <Box sx={{
            margin: "10px",
            border: "none",
            width: "250px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            cursor: "pointer",
            transition: "transform 1s",
            backgroundColor:"#121070",
            color:"white",
            ":hover": {
                transform: "scale(0.95)"
            }
        }}

        >

            <Typography variant="h6" gutterBottom>
                name:{name}
            </Typography>

            <Typography variant="h6" gutterBottom>
                age:{age}
            </Typography>

            <Typography variant="h6" gutterBottom>
                adress:{adress}
            </Typography>

            <Typography variant="h6" gutterBottom>
                school:{contact}
            </Typography>
            {/* <Button onClick={(index)=>{deleteStd(index)}}>Delete</Button> */}
        
        </Box>
    )
}