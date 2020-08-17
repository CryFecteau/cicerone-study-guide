import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    console.log(props.subjects.id)
    const renderSubjectsNav = () => {
        let subject = Object.keys(props.subjects.subjects).map(subjectObj => <NavLink to={`/subject/${subjectObj.id}`}>{subjectObj.title}</NavLink>,
        )
        return subject;
    }
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            {renderSubjectsNav()}
        </div>
    )
}
export default NavBar;