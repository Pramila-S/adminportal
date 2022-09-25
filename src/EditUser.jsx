import React from 'react'
import {useFormik} from "formik";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios'
import { env } from "Config";

function EditUser() {
    const params = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
          username : "",
          position : "",
          office : "",
          age : "",
          startdate : "",
          salary : ""
        },
        validate : (values) => {
          let errors = {};
          if (values.username == "" && values.username.length < 5){
            errors.username ="please enter username"
          }
          if (values.position == "" && values.position.length < 5){
            errors.position ="please enter position"
          }
          return errors;
        },
        onSubmit : async (values) => {
            await axios.put(`${env.api}/users/${params.id}`,values)
            navigate("/portal/users")
            //  alert("User updated")  
        //   console.log(values);
        },
          });

          useEffect(() => {
           LoadUser()
          }, [])
          let LoadUser = async() => {
            try {
                let user = await axios.get(`${env.api}/users/${params.id}`)
                formik.setValues({
                    username : user.data.username,
                    position : user.data.position,
                    office : user.data.office,
                    age : user.data.age,
                    startdate : user.data.startdate,
                    salary : user.data.salary
                })
            } catch (error) {
                
            }
          }
          
      return (
       <>
        <div className='container'>
       <form onSubmit={formik.handleSubmit}>
       <div className='row'>
          <div className='col-lg-6'>
          <label>Username</label>
          <input className='form-control' type={"text"}  
          value={formik.values.username} 
          onChange={formik.handleChange} 
          name="username" />
          <span style = {{ color : "red" }}>{formik.errors.username}</span>
          </div>
    
          <div className='col-lg-6'>
          <label>Position</label>
          <input 
          className={`form-control ${formik.errors.position ? `input-error` : ``}`} 
          type={"text"} 
          value={formik.values.position} 
          onChange={formik.handleChange} 
          name="position"/>
          <span style = {{ color : "red" }}>{formik.errors.position}</span>
          </div>
          
          <div className='col-lg-6'>
          <label>Office</label>
          <input className='form-control' type={"text"} 
          value={formik.values.office} 
          onChange={formik.handleChange} 
          name="office"/>
          </div>
          
          <div className='col-lg-6'>
          <label>Age</label>
          <input className='form-control' type={"text"} 
          value={formik.values.age} 
          onChange={formik.handleChange} 
          name="age"/>
          </div>
          
          <div className='col-lg-6'>
          <label>startdate</label>
          <input className='form-control' type={"text"} 
          value={formik.values.startdate} 
          onChange={formik.handleChange} 
          name="startdate"/>
          </div>
          
          <div className='col-lg-6'>
          <label>Salary</label>
          <input className='form-control' type={"text"} 
          value={formik.values.salary} 
          onChange={formik.handleChange} 
          name="salary"/>
          </div>
          
          <div className='col-lg-6'>
          <input className='btn btn-primary mt-2' type={"submit"} 
          value="Submit" 
          disabled={!formik.isValid} />
          </div>
        </div>
       </form>
       </div>
       </>
      );
}

export default EditUser;