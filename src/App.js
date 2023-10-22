import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ModalsAddNew from './components/ModalsAddNews';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const[isShowModalAddNews, setIsShowModalAddNew] = useState(false);

  const handleClose=()=>{
    setIsShowModalAddNew(false);
  }
  return (
    <>
   <div className="app-container">
       <Header/>
    <Container>
       <div className="my-3 add-new">
        <span><b>List Users:</b></span>
        <button className="btn btn-success" onClick={()=>setIsShowModalAddNew(true)}>Add new user</button>
       </div>
       <TableUsers/>
    </Container>
    <ModalsAddNew
    show = {isShowModalAddNews}
    handleClose={handleClose}
    />

   </div>
   <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
   </>
  );
}

export default App;
