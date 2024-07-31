import * as React from 'react';
import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import instance from '../../services/axiosOrder';
import alertSuccess from '../../common/function';

export default function Register() {
    const [name, setName] = useState('');
    const [eMail, setEMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const postAPI = () => {
        if (name === '' || eMail === '' || password === '' || confirmPassword === '' || password.length < 8) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Missing Data!",
            });
        } else if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwords do not match!",
            });
        } else {
            instance.post('/register', {
                name: name,
                email: eMail,
                password: password,
            })
                .then((res) => {
                    alertSuccess.fire({
                        icon: "success",
                        title: "Registered successfully"
                    });
                    setTimeout(() => { navigate('/login') }, 2000);
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        icon: "error",
                        title: "Registration failed",
                        text: "Please try again",
                    });
                });
        }
    }

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '400px',
                margin: 'auto',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                backgroundColor: '#fff',
            }}
        >
            <Typography variant="h5" component="h1" gutterBottom>
                Register
            </Typography>
            <TextField
                value={name}
                sx={{ margin: '10px 0', width: '100%' }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={(val) => setName(val.target.value)}
            />
            <TextField
                value={eMail}
                sx={{ margin: '10px 0', width: '100%' }}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                onChange={(val) => setEMail(val.target.value)}
            />
            <TextField
                value={password}
                sx={{ margin: '10px 0', width: '100%' }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                onChange={(val) => setPassword(val.target.value)}
            />
            <TextField
                value={confirmPassword}
                sx={{ margin: '10px 0', width: '100%' }}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                onChange={(val) => setConfirmPassword(val.target.value)}
            />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button variant="text">Login</Button>
                </Link>
                <Button variant="contained" onClick={postAPI}>
                    Register
                </Button>
            </Box>
        </Box>
    );
}
