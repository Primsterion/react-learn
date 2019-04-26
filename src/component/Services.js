import React, { Component } from 'react';
import './style/services.css';
import icon1 from '../img/servs1-icon.svg';
import icon2 from '../img/servs4-icon.svg';
import icon3 from '../img/servs3-icon.svg';
import icon4 from '../img/servs2-icon.svg';


function Service(props){
    return(
        <div className="service_card">
        <object type="image/svg+xml" data={props.service.img}></object>
            <h2>{props.service.header}</h2>
            <p>{props.service.text}</p>
            <div className="border"></div>
        </div>
    )
}

export default class Services extends Component{

    state = {
        services: [
            { header: "Web & App Design", text: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.", img: icon1},
            { header: "Development", text: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.", img: icon2 },
            { header: "Customization", text: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.", img: icon3 },
            { header: "Marketing", text: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.", img: icon4 }
        ]
    }

    render(){
        return(
            <div className="services">
                <div className="wrapper">
                    <div className="services_container">
                        {this.state.services.map(service => {
                            return(
                                <Service service={service} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
            
    }
}