import React from 'react'
import { useState } from 'react'
// import {useHistory} from 'react-router-dom'
const Sinup = () => {
  //  const history = useHistory()
    const [name, setName] = useState(" ");
    const [mobile, setMobile] = useState("");
    const [dateofbirth, setDateofbirth] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const sendata = () => {
      //  event.preventDefault();
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            <div className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        Incorrect email type
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        }
        fetch("/singup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                mobile,
                dateofbirth,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                <div className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        {data.error}
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
            }else{
                <div className="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        {data.message}
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
            // history.push('/singin');
            console.log(data)
            }
        })
    }
    return (
        <>

            <div>
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-outline-primary  mx-2" data-bs-toggle="modal" data-bs-target="#signModal">
                    <i className='fa fa-user-plus me-1 '> </i> Register
                </button>
                {/* 
          <!-- Modal --> */}
                <div className="modal fade" id="signModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Register Here</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <button className='btn btn-primary w-100 my-3'>
                                    <i className='fa fa-google mx-1'></i>Sign up with google</button>
                                <button className='btn btn-primary w-100 my-2'>
                                    <i className='fa fa-facebook mx-1 '></i>Sign up with Facebok</button>
                                <form method='POST' onSubmit={sendata()}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile No.</label>
                                        <input type="number" className="form-control" id="exampleInputPassword1"
                                            value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Date of birth</label>
                                        <input type="Date" className="form-control" id="exampleInputPassword1"
                                            value={dateofbirth} onChange={(e) => setDateofbirth(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit"  className="btn btn-primary w-100">Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sinup