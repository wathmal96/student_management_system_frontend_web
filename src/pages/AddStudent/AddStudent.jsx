import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Modal1 from '../../components/Modal1/Modal1';
import { useState } from 'react';
import instance from '../../services/axiosOrder';
import { useEffect } from 'react';
import Table from '../../components/Table/studentTable';
export default function AddStudent() {
    const [open, setOpen] = useState(false);
    const [students, setStudents] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        console.log(students);
    }, [students])

    const loadData = () => {
        instance.get('/student/getAll')
            .then(function (response) {

                console.log(response.data);
                setStudents(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const saveStudent = async (studentData) => {
        await instance.post("/student/save", studentData)
    }
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'right'
                }}
            >
                <Button onClick={() => setOpen(true)}>Open modal</Button>
            </Box>
            <br />
            <Table studentsArray={students} loadData={loadData} />
            {open &&
                <Modal1 open={open} handleClose={() => setOpen(false)} loadData={loadData}
                    tstFn={saveStudent} wathmal={{ student_name: "", student_age: "", student_address: "", student_contact: '' }} setOpen={setOpen} modelAction={"add"}/>
            }
        </div>
    )
}