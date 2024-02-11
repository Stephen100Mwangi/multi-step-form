import React, { useState } from 'react'
import SignUp from './SignUp'
import Personalinfo from './Personalinfo'
import Other from './Other'

const Form = () => {
    // We use states to keep track each page we are currently in
    const [page, setPage] = useState(0);

    // We crete an array of form  titles
    const formTitles = ["Sign Up","Personal Information","Other"];

    // Logic to display body

    const pageDisplay = () => {
        if (page == 0) {
            return <SignUp formdata={formdata} setFormdata={setFormdata}/>
        }else if(page == 1){
            return <Personalinfo formdata={formdata} setFormdata={setFormdata}/>
        }else{
            return <Other formdata={formdata} setFormdata={setFormdata} />
        }
    }

    // We now hold what users type
    const [formdata,setFormdata]= useState({
        email:"",
        password:"",
        confirmpassword:"",
        firstname:"",
        lastname:"",
        surname:"",
        nationality:"",
        check: false
    });
  return (
    <div className='container'>
        <div className="progressbar">
            <div className="progress" style={{width:page === 0?"33.3%":page === 1?"66.6%":"100%"}}></div>
        </div>
        <div className="formcontainer">
            {/* Three sections */}
            <div className="header">
                {/* We dynamically set the titles of each page */}
                <h2>{formTitles[page]}</h2>
            </div>
            <div className="body">
                {/* Call function that dynamically displays the body */}
                {pageDisplay()}
            </div>
            <div className="footer">
                <button onClick={()=> setPage((currentPage) => currentPage - 1)}
                disabled={page == 0}
                >Prev</button>
                <button onClick={()=>{
                  if(page === formTitles.length -1){
                    alert("Form submitted");
                  }else{
                    setPage((currentPage) => currentPage + 1)} 
                  }
                }
                // Disable button when it exceeds two pages
                disabled={page == formTitles.length}
                >{page === formTitles.length -1?"Submit":"Next"}</button>
            </div>
        </div>
    </div>
  )
}

export default Form
