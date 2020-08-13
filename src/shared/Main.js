import React, { Component } from 'react';
import { SERVING } from './study/serving';
import { STORING } from './study/storing';
import { BEERSTYLES } from './study/beerStyles';
import { PAIRINGBEER } from './study/pairingBeer';
import { BREWING } from './study/brewing';
import { FLAVORS } from './study/flavors';
import Topic from './Topic';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serving: SERVING,
            storing: STORING,
            beerStyles: BEERSTYLES,
            pairingBeer: PAIRINGBEER,
            brewing: BREWING,
            flavors: FLAVORS
        };
    }
    render() {
        return (
            <div>
                <Topic selectedTopic={this.state.serving.filter(serving => serving)[0]} />
            </div>
        )
    }
}
export default Main;
