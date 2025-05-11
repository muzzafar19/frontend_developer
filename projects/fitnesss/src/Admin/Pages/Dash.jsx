import React, { useEffect, useState } from 'react'
import AdminHeader from '../Comman/AdminHeader'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function Dash() {

  const [course, setcourse] = useState([]);

  useEffect(() => {
    fetchapi();
  })

  const fetchapi = async () => {
    const res = await axios.get("http://localhost:3000/course")
    // console.log(res)
    setcourse(res.data)
  }
  return (
    <div>
      <AdminHeader />
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Title</th>
            <th scope='col'>Day</th>
            <th scope='col'>Time</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
         {course && course.map((user)=>(
           <tr>
           <td>
             <div className='d-flex align-items-center'>
               <img
                 src={user.img}
                 alt=''
                 style={{ width: '45px', height: '45px' }}
                 className='rounded-circle'
               />
               <div className='ms-3'>
                 <p className='fw-bold mb-1'>{user.id}</p>
                 <p className='text-muted mb-0'>{user.name}</p>
               </div>
             </div>
           </td>
           <td>
             <p className='fw-normal mb-1'>{user.title}</p>
             <p className='text-muted mb-0'>{user.desc.slice(0,30)}</p>
           </td>
           <td>
           <p className='fw-normal mb-1'>{user.day}</p>
           </td>
           <td>{user.time}</td>
           <td>
             <MDBBtn className='btn btn-success'  rounded size='sm'>
               Edit
             </MDBBtn>
           </td>
           <td>
             <MDBBtn className='btn btn-danger'  rounded size='sm'>
               Delete
             </MDBBtn>
           </td>
           <td>
             <MDBBtn className='btn btn-info'  rounded size='sm'>
               View
             </MDBBtn>
           </td>
         </tr>
         ))}
        </MDBTableBody>
      </MDBTable>

    </div>
  )
}

export default Dash
