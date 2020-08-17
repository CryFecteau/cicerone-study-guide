import React, { Component } from 'react';
import { SERVING } from './subjects/serving';
import { STORING } from './subjects/storing';
import { BEERSTYLES } from './subjects/beerStyles';
import { PAIRINGBEER } from './subjects/pairingBeer';
import { BREWING } from './subjects/brewing';
import { FLAVORS } from './subjects/flavors';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';
import Subject from '../components/Subject';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: {
                SERVING: {
                    id: 0,
                    title: 'Serving Beer',
                    data: SERVING,
                    path: 'serving-beer'
                },
                STORING: {
                    id: 1,
                    title: 'Storing Beer',
                    data: STORING,
                    path: 'storing-beer'
                },
                BEER_STYLES: {
                    id: 2,
                    title: 'Beer Styles',
                    data: BEERSTYLES,
                    path: 'beer-styles'
                },
                PAIRING_BEER: {
                    id: 3,
                    title: 'Pairing Beer',
                    data: PAIRINGBEER,
                    path: 'paring-beer'
                },
                BREWING: {
                    id: 4,
                    title: 'Brewing Beer',
                    data: BREWING,
                    path: 'brewing-beer'
                },
                FLAVORS: {
                    id: 5,
                    title: 'Beer Flavors',
                    data: FLAVORS,
                    path: 'beer-flavors'
                }
            }
        };
    }
    renderSubjects = (routerProps) => {
        let subjectId = parseInt(routerProps.match.params.id);
        let foundSubject = Object.keys(this.state.subjects).find(subjectObj => subjectObj.id === subjectId)[0];
        return (foundSubject ? <Subject subject={foundSubject} /> : <NotFound />)
    }
    render() {
        return (
            <div>
                <NavBar subjects={this.state.subjects} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='subject/:id' render={routerProps => this.renderSubjects(routerProps)} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}
export default Main;
{/* <Router>
                {
                    Object.keys(this.state.subjects).map((subjectKey) => {
                        const { title, path } = this.state.subjects[subjectKey];
                        return (
                            <Link to={`/subject/${path}`}>{title}</Link>
                        )
                    })
                }
                <Switch>
                    <Route path={`/subject/:subject`}>
                        <div>
                            deep div
                        </div>
                    </Route>
                </Switch>
            </Router> */}