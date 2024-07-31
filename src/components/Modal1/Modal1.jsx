import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import alertSuccess from '../../common/function';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Modal1({ open, handleClose, loadData, tstFn, wathmal,setOpen,modelAction}) {
    const [name, setName] = useState(wathmal.student_name)
    const [age, setAge] = useState(wathmal.student_age)
    const [address, setAddress] = useState(wathmal.student_address)
    const [contact, setContact] = useState(wathmal.student_contact)

    const addStudent = () => {
        tstFn({
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact
        })
            .then((res) => {
                console.log(res)
                alertSuccess.fire({
                    icon: 'success',
                    title: modelAction +' student successfully',
                });
                setOpen(false)
                loadData()
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <TextField value={name} onChange={(val) => setName(val.target.value)} sx={{ margin: '5px' }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField value={age} onChange={(val) => setAge(val.target.value)} sx={{ margin: '5px' }} id="outlined-basic" label="Age" variant="outlined" />
                        <TextField value={address} onChange={(val) => setAddress(val.target.value)} sx={{ margin: '5px' }} id="outlined-basic" label="Address" variant="outlined" />
                        <TextField value={contact} onChange={(val) => setContact(val.target.value)} sx={{ margin: '5px' }} id="outlined-basic" label="Contact" variant="outlined" />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button sx={{ margin: '5px' }} variant="contained" onClick={() => addStudent()}>{modelAction}</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
