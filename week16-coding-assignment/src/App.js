import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonNav from './Components/ButtonNav';
import FormInfo from './Components/FormInfo';
import TableInfo from './Components/TableInfo';
import Product from './Components/Product';


function App() {

    const [myList, setMyList] = useState([]);

    const getApi = async () => {
        const { data: response } = await axios.get(`https://65455e5a5a0b4b04436dfb22.mockapi.io/week15`);
        console.log("mock api reponse: ", response);
        setMyList(response)
    }

    useEffect(() => {
        getApi();
    }, []);

    const handleFormSubmit = async (formData) => {
        try {
            // Send the form data to your API endpoint using axios post
            const response = await axios.post('https://65455e5a5a0b4b04436dfb22.mockapi.io/week15', formData);
            console.log('Post successful:', response.data);
            // this re-renders the component after the state is updated
            setMyList([...myList, response.data]);
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors, display an error message, or perform other actions
        }
    };

    const deletePost = async (id) => {

        try {
            await axios.delete(`https://65455e5a5a0b4b04436dfb22.mockapi.io/week15/${id}`);
            console.log("Post successfully deleted");

            // Update the state to remove the deleted item
            setMyList((prevList) => prevList.filter(item => item.id !== id));

        } catch (err) {
            console.log("Post deletion failed");
        }
    };

    //  uses the spread operator to collect the remaining properties into a new object called updateData
    const handleSubmitUpdate = async (updateFormData) => {
        const { id, ...updateData } = updateFormData;

        try {
            // Send the form data to your API endpoint using axios post
            const response = await axios.put(`https://65455e5a5a0b4b04436dfb22.mockapi.io/week15/${id}`, updateData);
            console.log('Post successful:', response.data);


            // this code is creating a new array updatedList where one specific item in the array is updated based on its id. The updated array is then used to update the state variable myList, reflecting the changes in the React component's state. 
            const updatedList = myList.map(item => (item.id === id ? { id, ...updateData } : item));
            setMyList(updatedList);

        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors, display an error message, or perform other actions
        }
    };


    console.log("app mylist state: ", myList)

    return (
        <div className="App">
            <header className='App-header'>
                <Router>
                    <ButtonNav />

                    <Switch>
                        <Route path='/contact'>
                            <Contact />
                        </Route>

                        <Route path='/about'>
                            <About />
                        </Route>

                        <Route path='/'>
                            {myList.length > 0 ? <Home list={myList} /> : null}
                            <Product />
                            {/* pass handleformsubmit function as a prop to formInfo component */}
                            <FormInfo onFormSubmit={handleFormSubmit} handleSubmitUpdate={handleSubmitUpdate} />

                            {myList.length > 0 ? <TableInfo myList={myList} deletePost={deletePost} /> : null}

                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;


