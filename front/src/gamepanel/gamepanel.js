import React from 'react';
import '../gamepanel/gamepanel.css';
import LineChart from '../linechart/linechart.js';

class GamePanel extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            datadays: 0,
            datavalue: 0,
            countOn: false,
            resetGraph: false,
            gameEnd: false
        };
    }

    componentWillUnmount =() => {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            datavalue: Number((1 + this.state.datavalue + this.state.datavalue*0.3).toFixed(0)),
        });

        if(this.state.datavalue > Number(7000000000))
        {
            clearInterval(this.interval);
            this.setState({
                gameEnd: true
            });
        }

        if(this.state.datadays < 360){
            this.setState({
                datadays : this.state.datadays + 1
            });

        }
        else {
            clearInterval(this.interval);
            this.setState({
                datadays : 0
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
            resetGraph: true,
            countOn: false,
            gameEnd: false
        });
    };

    washHands = () => {
        if(this.state.datavalue - 3 > 0)
        {
            this.setState(
                {datavalue: this.state.datavalue - 3}
            );
        }
        else{
            this.setState(
                {datavalue: 0}
            );
        }
    }

    stayHome = () => {
        if(this.state.datavalue - 5 > 0)
        {
            this.setState(
                {datavalue: this.state.datavalue - 5}
            );
        }
        else{
            this.setState(
                {datavalue: 0}
            );
        }

    }

    wearMask = () => {
        if(this.state.datavalue - 2 > 0)
        {
            this.setState(
                {datavalue: this.state.datavalue - 2}
            );
        }
        else
        {
            this.setState(
                {datavalue: 0}
            );
        }
        
    }

    vaccine = () => {
        if(this.state.datavalue - 100 > 0){
            this.setState(
                {datavalue: this.state.datavalue - 100}
            );
        }
        else
        {
            this.setState(
                {datavalue: 0}
            );
        }
    }

    render(){
        return(
        <div className="gamepanel">
            <div id="#linechart" className="row justify-content-center"><LineChart name={this.state.datadays} value={this.state.datavalue} resetState={this.state.resetGraph}/></div>

            <div id="#datainfo" className="row justify-content-center">
                <div className="col-1">

                </div>
                <div className="col-5 text-center">
                    <label>Daily new COVID-19 cases :  </label>
                    <output type="number">{this.state.datavalue}</output>
                </div>
                <div className="col-5 text-center">
                    <label>Days since start of epidemic :  </label>
                    <output type="number">{this.state.datadays}</output>
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
                <div className="col-5 text-center">
                    <label>Public Health Actions :</label>
                </div>
                <div className="col-5 text-center">
                    
                </div>
                <div className="col-1">

                </div>
            </div>
            <div id="#actionsrow" className="row justify-content-center">    
                    <div className="col-3">
                        <button onClick={this.stayHome} className="btn btn-warning btn-md btn-block">Stay home</button>
                    </div>
                    <div className="col-3">
                        <button onClick={this.wearMask} className="btn btn-warning btn-md btn-block">Wear mask</button>
                    </div>
                    <div className="col-3">
                        <button onClick={this.washHands} className="btn btn-warning btn-md btn-block">Wash hands</button>
                    </div>
                    <div className="col-3">
                        <button onClick={this.vaccine} className="btn btn-info btn-md btn-block">Vaccine</button>
                    </div>
            </div>
        </div>
        );
    }

}

export default GamePanel;
