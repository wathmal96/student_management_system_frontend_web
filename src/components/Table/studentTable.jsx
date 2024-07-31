import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import instance from '../../services/axiosOrder';
import { useState, useEffect } from 'react';
import Modal1 from '../Modal1/Modal1';
import alertSuccess from '../../common/function';

export default function studentTable({ studentsArray, loadData }) {
    const [open, setOpen] = useState(false);
    const [dataForUpdate, setDataForUpdate] = useState({})

    const deleteStudent = (id) => {
        instance.delete('student/delete/' + id)
            .then((res) => {
                alertSuccess.fire({
                    icon: 'success',
                    title: 'delete student successfully',
                });
                loadData();
            })
            .catch((err) => console.log(err));
    }
    const update = async (studentData) => {
            await instance.put("/student/update/" + dataForUpdate.id, studentData);
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentsArray.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell>{row.student_name}</TableCell>
                            <TableCell>{row.student_age}</TableCell>
                            <TableCell>{row.student_address}</TableCell>
                            <TableCell>{row.student_contact}</TableCell>
                            <TableCell>
                                <Button onClick={() => { setDataForUpdate(row); setOpen(true)}} sx={{ margin: '5px' }} variant="contained">Update</Button>
                                <Button onClick={() => deleteStudent(row.id)} sx={{ margin: '5px' }} variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {
                open &&
                <Modal1 wathmal={dataForUpdate} open={open} handleClose={() => setOpen(false)} loadData={loadData} tstFn={update} setOpen={setOpen} modelAction={"update"}/>
            }
        </TableContainer>
    )
}
