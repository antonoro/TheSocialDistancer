import React from 'react';
import '../gamepanel/gamepanel.css';
import LineChart from '../linechart/linechart.js';

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
        this.setState({
            oldvalue: this.state.datavalue,
            datavalue: (1 + this.state.datavalue*(1+this.state.slope)),
        });

        this.setState({
            dailycases: this.state.datavalue - this.state.oldvalue,
        });

        if(this.state.datavalue > this.state.datamax)
        {
            this.setState({
                datamax: this.state.datavalue,
            });
        }

        if(this.state.daysvaccine > 0)
        {
            this.setState({daysvaccine: this.state.daysvaccine - 1});
        }

        if(this.state.datavalue > Number(20000000))
        {
            clearInterval(this.interval);
            alert("That's the worst epidemic in World's history ; that's why Public Health measures are important!");
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
      
        this.setState(
            {slope: 0.92*this.state.slope}
        );

    }

    wearMask = () => {
        this.setState(
            {slope: 0.96*this.state.slope}
        );
         
    }

    vaccine = () => {
        this.setState(
            {slope: this.state.slope - 0.005}
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
            <div id="#linechart" className="row justify-content-center"><LineChart name={this.state.datadays} value={this.state.datavalue} resetState={this.state.resetGraph}/></div>

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
