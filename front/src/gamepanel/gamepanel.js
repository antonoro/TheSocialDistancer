import React from 'react';
import './gamepanel.css';
import LineChart from '../linechart/linechart.js';
require("typeface-montserrat-alternates");

class GamePanel extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            datadays: 0,
            datavalue: 0,
            datamax: 0,
            dailycases: 0,
            daysvaccine: 100,
            oldvalue: 0,
            countOn: false,
            resetGraph: false,
            gameEnd: false, 
            slope: 0.2
        };
    }

    componentWillUnmount =() => {
        clearInterval(this.interval);
    }

    tick = () => {
        const oldvalue = this.state.datavalue;

        //create first case at beginning
        if(this.state.datadays === 0)
        {
            this.setState({datavalue: 1});
        }

        // Update active number of cases
        this.setState({
            oldvalue: this.state.datavalue,
            datavalue: (this.state.datavalue*(1+this.state.slope)),
        });

        // calculate daily cases and adjust slope so it's always minimally increasing
        this.setState({
            dailycases: this.state.datavalue - this.state.oldvalue,
            slope: this.state.slope + 0.0005,
        });

        // update maximum cases
        if(this.state.datavalue > this.state.datamax)
        {
            this.setState({
                datamax: this.state.datavalue,
            });
        }

        // update days remaining until vaccine is available
        if(this.state.daysvaccine > 0)
        {
            this.setState({daysvaccine: this.state.daysvaccine - 1});
        }

        // If user gets to 20,000,000 deaths, stop game  
        if((this.state.datamax/20) > Number(20000000))
        {
            clearInterval(this.interval);
            alert("That's the worst epidemic in World's history ; that's why Public Health measures are important!");
            this.setState({
                gameEnd: true
            });
        }
        // after a year, stop game and clock back to zero days
        if(this.state.datadays < 365){
            this.setState({
                datadays : this.state.datadays + 1,
            });

        }
        else {
            clearInterval(this.interval);
            this.setState({
                datadays : 0,
                countOn: false,
                resetGraph: true,
            });
        }
    }

    startCount = () => {
        if(this.state.countOn !== true && this.state.gameEnd !== true)
        {
            this.setState({
                countOn: true,
                resetGraph: false,
                datadays: this.state.datadays
            });
            this.interval = setInterval(() => this.tick(), 1000);
        }
    }

    stopCount = () => {
        clearInterval(this.interval);
        this.setState({
            countOn: false
        });
    }

    resetCount = () => {
        clearInterval(this.interval);
        this.setState({
            datadays: 0,
            datavalue: 0,
            daysvaccine: 100,
            dailycases: 0,
            oldvalue: 0,
            datamax: 0,
            resetGraph: true,
            countOn: false,
            gameEnd: false
        });
    };

    washHands = () => {
        this.setState(
            {slope: 0.98*this.state.slope}
        );
    }

    stayHome = () => {
        
        if(this.state.slope > 0.001)
        {
            this.setState(
                {slope: 0.92*this.state.slope}
            );
    
        }
        else
        {
            this.setState(
                {slope: this.state.slope - 0.0005}
            );
        }
        
    }

    wearMask = () => {
        this.setState(
            {slope: 0.96*this.state.slope}
        );
         
    }

    vaccine = () => {
        this.setState(
            {slope: this.state.slope - 0.008}
        );
    }

    render(){
        return(
        <div className="gamepanel">
            <div id="#datainfo" className="row justify-content-center">
               
                <div className="col-6 text-center">
                    <label>Maximum COVID-19 cases :  </label>
                    <output type="number">{Number(this.state.datamax).toFixed(0)}</output>
                </div>
                <div className="col-6 text-center">
                    <label>Death toll :  </label>
                    <output type="number">{Number(this.state.datamax / 20).toFixed(0)}</output>
                </div>
                
            </div>
            <div id="#linechart" className="row justify-content-center">
                <LineChart name={this.state.datadays} value={this.state.datavalue} resetState={this.state.resetGraph}/>
            </div>

            <div id="#datainfo" className="row justify-content-center">
                <div className="col-5 text-center">
                    <label>Days</label>
                </div>
                
            </div>
            <div id="#datainfo" className="row justify-content-center">
                <div className="col-1">

                </div>
                <div className="col-5 text-center">
                    <label>Active COVID-19 cases :  </label>
                    <output type="number">{Number(this.state.datavalue).toFixed(0)}</output>
                </div>
                <div className="col-5 text-center">
                    <label>Days since start of epidemic :  </label>
                    <output type="number">{this.state.datadays}</output>
                </div>
                <div className="col-1">

                </div>
            </div>

            <div id="#datainfo" className="row justify-content-center">
                <div className="col-1">

                </div>
                <div className="col-5 text-center">
                    <label>Daily new COVID-19 cases :  </label>
                    <output type="number">{Number(this.state.dailycases).toFixed(0)}</output>
                </div>
                <div className="col-5 text-center">
                    <label>Days remaining until vaccine available :  </label>
                    <output type="number">{this.state.daysvaccine}</output>
                </div>
                <div className="col-1">

                </div>
            </div>

            <div id="#startstoprow" className="row justify-content-center">
                <div className="col-3">
                    <button onClick={this.startCount} className="btn btn-secondary btn-md btn-block">Start</button>
                </div>
                <div className="col-3">
                    <button onClick={this.stopCount} className="btn btn-danger btn-md btn-block">Stop</button>
                </div>
                <div className="col-3">
                    <button onClick={this.resetCount} className="btn btn-primary btn-md btn-block">Reset</button>
                </div>
            </div>
            <div id="#datainfo" className="row justify-content-center">
                <div className="col-1">

                </div>
                <div className="col-10 text-center">
                    <label>Public Health Actions : Click repeatedly to see effect on propagation curve</label>
                </div>
                
                <div className="col-1">

                </div>
            </div>
            <div id="#actionsrow" className="row justify-content-center">    
                    
                <div className="col-3">
                    <button onClick={this.wearMask} className="btn btn-warning btn-md btn-block">Wear mask</button>
                </div>
                <div className="col-3">
                    <button onClick={this.washHands} className="btn btn-warning btn-md btn-block">Wash hands</button>
                </div>
                <div className="col-3">
                    <button onClick={this.stayHome} className="btn btn-warning btn-md btn-block">Stay home</button>
                </div>
                <div className="col-3">
                    { this.state.daysvaccine > 0 ?  
                        <button  onClick={this.vaccine} className="btn btn-dark btn-md btn-block" disabled>Vaccine</button>
                    :
                        <button  onClick={this.vaccine} className="btn btn-info btn-md btn-block">Vaccine</button>
                    }
                </div>
            </div>
        </div>
        );
    }

}

export default GamePanel;
