import { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import {postCreateUser} from "../services/UserService";
import { toast } from 'react-toastify';

const ModalsAddNew = (props) =>{
    const{ show,handleClose } = props;
    const[name, setName ] = useState("");
    const[job, setJob] = useState("");
    const  handleSaveUser =async() =>{

      let res = await postCreateUser(name,job);
      console.log('check res',res);
      if(res&&res.id){
        handleClose();
        setName('')
        setJob('')
        toast.success("a user is creat done")
        //success
      }else{
       toast.error("Loi cmmr")
      }
    }
    return(
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Them moi nguoi dung</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-add-new">
             
  <div class="mb-3">
    <label  className="form-label">Name</label>
    <input 
    type="text" 
    className="form-control" 
    value={name}
    onChange={(event)=> setName(event.target.value)}
    />
    
  </div>
  <div class="mb-3">
    <label class="form-label">Job</label>
    <input 
    type="text" 
    className="form-control"  
    value={job}
    onChange={(event)=> setJob(event.target.value)}/>
  </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>(handleSaveUser())}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
    }
   
export default ModalsAddNew;