import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defaultProps } from 'default-props';

const Profile = (props) => {


    return (
        <div>
            <h1>First Name: {props.fname}</h1> <br></br>
            <h1>Last Name:{props.lname}</h1><br></br>
            <h1>Bio:</h1><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum nesciunt quam quas velit veniam odio! Provident, at. Laborum, qui deserunt illum voluptas quod ipsum ipsam. Sunt aut culpa nulla.
    Ullam quidem deserunt quis architecto nam natus ipsam, dicta enim soluta, odit iste consequatur atque distinctio quasi illum. Quaerat facilis, dolore repellat laborum quia quod sequi ratione eveniet delectus molestiae.</p>
            <h1>Profession:{props.pro}</h1>
            <div>{props.children}</div>

        </div>
    );
};
Profile.defaultProps={pro:"i am good"}
Profile.propTypes={
    fname:PropTypes.string,
    lname:PropTypes.string,
    pro:PropTypes.string,
}
export default Profile;