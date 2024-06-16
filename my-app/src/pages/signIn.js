// import React, { useState } from "react";
// import Footer from "../components/Footer";
// function Signin(){
//     const[formData , setFormData]= useState({
//         "username":"",
//         "password":"",
//     })
//     function handleChange(event){
//         setFormData({
//             ...formData,
//             [event.target.id]:event.target.value,
//         });
//     }
//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//             <input
//             type = "text"
//             id="username"
//             value={formData.username}
//             onChange={handleChange}
//             />
//             <input
//             type = "text"
//             id ="password"
//             value ={formData.password}
//             onchange={handleChange}
//             />
//         </form>
//             <Footer/>   
//             </>
//     );

// }
// export default Signin;
