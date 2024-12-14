// import React, { useState } from "react";

// function FormComponent() {
//   const [user, setUser] = useState("");
//   const [result, setResult] = useState("");

//   const handleInput = (e) => {
//     setUser(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setResult(user);
//     setUser("")
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="User" value={user} onChange={handleInput} />
//         <input type="submit" />
//       </form>
//       <h1>{result}</h1>
//     </div>
//   );
// }

// export default FormComponent;


import React, { useState } from "react";
import MyVerticallyCenteredModal from "./modalComponent";
import TajMahal from "./Taj Mahal.jpeg"


function FormComponent() {
    const [modalShow, setModalShow] = React.useState(false);

  const [formData, setformData] = useState({user:"",mobile:"",email:""});

  const handleInput = (e) => {
    // console.log(e.target.name);
    const {name,value}=e.target
    setformData((a)=>{
        console.log(a,"Curent State")
        return{
            ...a,
            [name]:value

        }
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    // alert(formData.user+" "+formData.mobile+" "+formData.email)
    setModalShow(true)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" value={formData.user} onChange={handleInput} />
        <input type="mobile" name="mobile" value={formData.mobile} onChange={handleInput} />
        <input type="email" name="email" value={formData.email} onChange={handleInput} />
        <input type="submit" />
      </form>

      {/* <h1>{formData.user}</h1>
      <h1>{formData.mobile}</h1>
      <h1>{formData.email}</h1> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
      />
    </div>
  );
}

export default FormComponent;



