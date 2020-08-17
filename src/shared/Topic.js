import React, { Component } from 'react';
import Content from './Content';

class Topic extends Component {

    render() {
        if (this.props.selectedTopic) {
            return (
                <div className="container">
                    <div className="row">
                        <Content topic={this.props.selectedTopic} />
                        {/* <button>Prev</button>
                        <button onClick={() => this.handleClickNext(this.props.topic.id)}>Next</button> */}
                    </div>
                </div>
            );
        }
        return <div />;
    }
}
export default Topic;