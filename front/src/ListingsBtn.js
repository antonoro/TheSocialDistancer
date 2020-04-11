import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Btn.css';

class PublicListings extends React.Component{

    constructor(props){
        super(props);
        this.state = {showlistingsvalue: false};
    }

    listingsHandleClick = () => {

        this.setState(
            {
                showlistingsvalue : !this.state.showlistingsvalue    
            }
        );

    }

    render(){
        
        if(this.state.showlistingsvalue) {
            return( 
                <div className="Btn-header">    
                    <button onClick={this.listingsHandleClick} class="btn btn-primary btn-lg">Hide Book wishlist</button>
                </div>
            )
        }
        return (
            <div className="Btn-header">
                <button onClick={this.listingsHandleClick} class="btn btn-primary btn-lg">Show Book wishlist</button>
            </div>
        );
    }
}


export default PublicListings;
