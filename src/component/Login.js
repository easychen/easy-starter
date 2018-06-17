import React, { Component } from 'react';
import { observer , inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject("store")
@observer
export default class Login extends Component
{
    render()
    {
        return <p>Welcome to {this.props.store.appname}</p>;
    }
} 