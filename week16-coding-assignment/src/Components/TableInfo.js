import Button from 'react-bootstrap/Button';
import React from 'react';
import Table from 'react-bootstrap/Table';

function TableInfo(props) {
  const { myList, deletePost } = props;

  return (
    <Table striped bordered hover variant="dark" className='mt-5'>
      <thead>
        <tr>
          <th>Delete</th>
          <th>User Id: </th>
          <th>Name</th>
          <th>Age</th>
          <th>Job title</th>
          <th>Company name</th>
        </tr>
      </thead>
      {/* mapping through data and displaying it to the table*/}
      <tbody>
        {props.myList.map((data, index) => (
          <tr key={index}>            
            <td>
              <Button variant="danger" onClick={() => deletePost(data.id)}>
                Delete
              </Button>
            </td>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.jobTitle}</td>
            <td>{data.companyName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableInfo