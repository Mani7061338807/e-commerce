import React ,{useState}from 'react'

const ContactUs = () => {
    const [fullname,setFullname] = useState("")
    const [email,setEmail] = useState("")
    const [textarea,setTextarea] = useState("")
    const postDetails = (e)=>{
        e.preventDefault()
        fetch('/Contactus',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fullname,
                email,
                textarea
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }else{
                alert("thank you for your feedback")
            }
        })
    }
    return (
        <> 
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="https://t3.ftcdn.net/jpg/02/88/34/14/360_F_288341413_hRSBnjBZyVqwvuOmMBN7sGgiBJfzrtEO.jpg" alt="metting " id='image' />
                    </div>
                    <div className="col-sm-6">
                        <h2 className='ques'>Have some questions or suggestions ?</h2>
                        <form>
                            <label htmlFor="exampleInputEmail1" className="form-label mb-2 mx-2">Full name</label>
                            <input type="text" className="form-control mb-4" name='full Name' value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                            <label htmlFor="exampleInputEmail1" className="form-label mb-2 mx-2">Email address</label>
                            <input type="email" className="form-control mb-4" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                           <h5> write your messages </h5>
                            <div className="form-floating">
                                <textarea className="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea" value={textarea} onChange={(e)=>setTextarea(e.target.value)}></textarea>
                                <label htmlFor="floatingTextarea"> feel free to Comment</label>
                            </div>
                            <button className='btn btn-primary  ' onClick={postDetails}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs