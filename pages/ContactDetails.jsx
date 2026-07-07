import { useParams } from "react-router-dom";

const ContactDetails = ()=>{

const {id}=useParams();

return(

<div className="dashboard">

<h1>Contact Details</h1>

<p>ID : {id}</p>

</div>

);

};

export default ContactDetails;