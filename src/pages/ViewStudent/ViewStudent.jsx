import * as React from 'react';
import instance from '../../services/axiosOrder';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import { Box } from '@mui/material';

export default function ViewStudent() {
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
                // handle success
                console.log(response.data);
                setStudents(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap:'wrap'
                }}
            >
                {
                    students.map((val, index) =>
                        <Card
                            key={index}
                            name={val.student_name}
                            age={val.student_age}
                            address={val.student_address}
                            contact={val.student_contact} />
                    )
                }
            </Box>
        </>

    )
}