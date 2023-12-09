import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';



// The formInfo component receives onFormSubmit, from app.js, as a prop using destructuring
function FormInfo({ onFormSubmit, handleSubmitUpdate }) {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        jobTitle: '',
        companyName: '',
        age: '',
    });

    const [updateFormData, setUpdateFormData] = useState({
        id: '',
        name: '',
        jobTitle: '',
        companyName: '',
        age: '',
    });

    // updates the state of a form based on user input, uses setFormData, it is making sure that the state is updated correctly, taking into account the previous state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // updates the state based on user input
    const handleInputUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdateFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    // the function onFormSubmit, passed from app.js, is invoked, and it's provided with the current form data
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        // Clear the form fields after submission
        setFormData({
            id: '',
            name: '',
            jobTitle: '',
            companyName: '',
            age: '',
        });
    };

    // a function triggered when a form for updating data is submitted. It invokes the function handleSubmitUpdate to handle the update which comes from app.js component, and then resets the form fields
    const handleUpdate = (e) => {
        e.preventDefault();
        handleSubmitUpdate(updateFormData); // Assuming that onFormUpdate is a function provided by App.js
        // Clear the form fields after submission
        setUpdateFormData({
            id: '',
            name: '',
            jobTitle: '',
            companyName: '',
            age: '',
        });
    };

    return (
        <>
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h4>Add your data</h4>
                            <Form className='border border-primary' onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formJobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your job title"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formCompanyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your company name"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formAge">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter your age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>

                        <div className="col-sm">
                            <h4>Update your data</h4>
                            <Form className='border border-secondary' onSubmit={handleUpdate}>
                                <Form.Group controlId="userId">
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter User Id"
                                        name="id"
                                        value={updateFormData.id}
                                        onChange={handleInputUpdateChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={updateFormData.name}
                                        onChange={handleInputUpdateChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formJobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your job title"
                                        name="jobTitle"
                                        value={updateFormData.jobTitle}
                                        onChange={handleInputUpdateChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formCompanyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your company name"
                                        name="companyName"
                                        value={updateFormData.companyName}
                                        onChange={handleInputUpdateChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formAge">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter your age"
                                        name="age"
                                        value={updateFormData.age}
                                        onChange={handleInputUpdateChange}
                                    />
                                </Form.Group>

                                <Button variant="info" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>

            </Router>
        </>
    );
}

export default FormInfo