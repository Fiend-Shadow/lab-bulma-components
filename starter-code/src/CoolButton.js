import React, { Component } from "react";

export default class CoolButton extends Component{
    render(){
     
        return(
            <div>
            
                
                <button className={propertyArr}>{this.props.children}</button>
            </div>
        );
    }
}
