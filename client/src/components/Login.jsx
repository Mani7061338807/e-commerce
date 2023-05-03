import React ,{useState} from 'react'


const Login = () => {
    const [inputs,SetInputs] = useState({
        email:" ",password:" "
    })
    let name,value;
    const handleInputs = (e)=>{
        name = e.target.name;
        value = e.target.value;

        SetInputs({...inputs,[name]:value});
    }
    const postdata = async (e)=>{
        e.preventDefault();
        const {email,password} = inputs;
        const res = await fetch('/signin',{
            method:"POST",
            hearders:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            alert("invalid details");
        }
        else{
            //alert("scucessful login")
            console.log(data)
        }
    }
    return (
        <>

            <div>
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                    <i className='fa fa-sign-in me-1'> </i> Login
                </button>
                {/* 
              <!-- Modal --> */}
                <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login Here</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <button className='btn btn-primary w-100 my-2'><i className='fa fa-google'></i> Login with google</button>
                                <button className='btn btn-primary w-100 my-2'><i className='fa fa-facebook'></i> Login with facebook</button>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        name='email' value={inputs.email} onChange={handleInputs} />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                        name='password' value={inputs.password} onChange={handleInputs} />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" onClick={postdata} >Submit</button>
                                  {/* //  <Link   className='text-center display-10 my-3' data-bs-toggle="modal" data-bs-target="#signModal">Don't have an account ?</Link> */}
                                </form>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
