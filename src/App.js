import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{


    state = {
        advice: '',
    };

    fetchAdvice = () => {
        //fetch advice using axios. Api returns random advice on every get request.
        axios.get('https://api.adviceslip.com/advice')
            .then((response) =>{
                console.log(response.data.slip.advice);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    //lifecycle method -> componentdidmount, componentdidupdate, componentwillunmount
    componentDidMount(){
        this.fetchAdvice();
        
    }

    render() {
        return(

            <h1> App </h1>
        );
    }
}

export default App;