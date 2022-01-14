import React, { useContext, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addstudent, updatestudent } from '../action/studentaction';







const Addstudent = () => {

    const student = useSelector(state => state.addstudentred)

    const dispatch = useDispatch()

    
    const navigte = useNavigate();

    const { id } = useParams();
    const [dataa, setdataa] = useState({
        Id: "",
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    })

    const { Name, Age, Course, Batch } = dataa

    useEffect(() => {
        loaduserdata();

    }, [])

    const loaduserdata = async () => {

        const amy = await student.filter((vii) => vii.Id === id)
        amy.map((val) => setdataa(val))

    }



    const onhdlechng = (e) => {
        const name = e.target.id
        const value = e.target.value
        setdataa({ ...dataa, [name]: value })
        

    }

    const btnsub = (e) => {
        e.preventDefault();

        if(!id==""){
            const newdata = { ...dataa, Id: id }
        dispatch(updatestudent(newdata))

        }
        else{
            const newdata = { ...dataa, Id: `${student.length + 1}` }
            // setstudent([...student, newdata])

        dispatch(addstudent(newdata))
        }

        navigte('/student')

        

        


    //     if(Name,Age, Course, Batch==""){
    //         alert("Please fill Data")
    //     }
    //     else{
    //     if (!id == "") {
    //         setstudent((prev) => prev.map((std) => 
    //         console.log(std)
    //         ))
    //     } else {
    //         const newdata = { ...dataa, Id: `${student.length + 1}` }
    //         setstudent([...student, newdata])
    //     }
    //     navigte('/student')
    // }
}









    return (
        <div className='container my-5'>

            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={dataa.Name} onChange={onhdlechng} fullWidth id="Name" label="Name" />
                <TextField className='mx-5' color="secondary" value={dataa.Age} onChange={onhdlechng} fullWidth id="Age" label="Age" />
            </div>

            <div className='d-flex justify-content-between mx-3 my-5'>
                <TextField className='mx-5' color="secondary" value={dataa.Course} onChange={onhdlechng} fullWidth id="Course" label="Course" />
                <TextField className='mx-5' color="secondary" value={dataa.Batch} onChange={onhdlechng} fullWidth id="Batch" label="Batch" />
            </div>

            <div className='d-flex justify-content-end mx-5'>


                <Link to='/student'><Button className='mx-4' variant="outlined">Cancel</Button></Link>

                <Button className='mx-3' variant="contained" onClick={btnsub}>Submit</Button>

            </div>




        </div>
    )
}

export default Addstudent
