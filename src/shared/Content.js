import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class Content extends Component {
    render() {
        return (
            <div className="col-md-5 m-1" >
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.topic.title}</CardTitle>
                        <CardText>{this.props.topic.text}</CardText>
                    </CardBody>
                </Card>
            </div >
        )
    }

}
export default Content;