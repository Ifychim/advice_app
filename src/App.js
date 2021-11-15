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
                const {advice} = response.data.slip;

                this.setState({advice});
                
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
        const {advice} = this.state;
        return(
            
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;