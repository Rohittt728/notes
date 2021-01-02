import React, { Component } from 'react';
import Facebook from './Facebook';
import '../../App.css';

export default class login extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>dev.notes</h1>
                </header>
                <p>
                    To get started, authenticate.
                </p>
                <div>
                    <Facebook />
                </div>
                <div>
                    {/* Google Login */}
                </div>
                <div>
                    {/* Github Login */}
                </div>
            </div>
        )
    }
}
