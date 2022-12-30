 import "./FooterForm.css"
import { useState } from "react";


function FooterForm() {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
 
  const handleButtonChange = (event) => {
    event.target.style.background = "#83CEFD";
    
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  
  return (
    <div className="innate-corp__Footer-Form__container section__padding background_image">

      {/* <div className="innate-corp__Footer-Form__Big-Text"></div> */}
      
        
      <div className="innate-corp__Footer-Form__container-content">
        <h1>Let's Make You Great</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">&nbsp;&nbsp;&nbsp;<strong>Email</strong><br />
              <input 
                type="text" 
                name="email" 
                id="email"
                value={inputs.email || ""} 
                onChange={handleChange}
              />
            </label>
            <br/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="organization">&nbsp;&nbsp;&nbsp;<strong>Organization</strong> <br />
              <input 
                type="text" 
                name="organization" 
                id="organization"
                value={inputs.organization || ""} 
                onChange={handleChange}
              />
            </label>

          </div>
  
          <label htmlFor="Services" >
            <strong>Services Required </strong>
            </label>
          <br />
          <div className="checkbox-wrapper" id="Services">
            <input type="checkbox" name="Services" id="id1" />
            <label htmlFor="id1">Brand Consultancy</label>
          </div>
          <br />

          <div className="checkbox-wrapper">
            <input type="checkbox" name="Services" id="id2" />
            <label htmlFor="id2">User Experience</label>
          </div>
          <br />

          <div className="checkbox-wrapper">  
            <input type="checkbox" name="Services" id="id3" />
            <label htmlFor="id3">Analytics</label>
          </div>
          <br />

          <div className="checkbox-wrapper">  
            <input type="checkbox" name="Services" id="id4" />
            <label htmlFor="id4">Online Sales</label>
          </div>

      <input type="submit" className="shadow-drop-2-center " />

      </form>
      </div>
      </div>
   
  )
}

export default FooterForm