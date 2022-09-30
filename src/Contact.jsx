import React, { useState } from "react";


const Contact = () => {
    const[data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        message:'',
    });
    const InputEvent = (event) => {
        const{name, value} = event.target;

        setData((preData)=>{
            return{
                ...preData,
                [name]: value,
            }
        });
    };

    const Submit = (event) => {
        event.preventDefault();
        alert(`My name is ${data.name}.`);
    };
    return(
    <>
    <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
    </div>
    <div className="container  contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={Submit}>
    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName" name="phone" value={data.name} onChange={InputEvent}  placeholder="Enter Your name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.email} onChange={InputEvent}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputPhone" name="phone" value={data.phone} onChange={InputEvent} placeholder="phone number"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={data.password} onChange={InputEvent} placeholder="password"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Message</label>
    <textarea type="text" class="form-control" id="exampleInputTextarea" name="message" value={data.message} onChange={InputEvent} placeholder="write a note" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
    </div>
    </div> 
    </>
    );
}

export default Contact;