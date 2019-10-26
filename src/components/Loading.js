import React from 'react';
import '../css/loading.css';

export default class extends React.Component{
    render() {
        return (
            <div>
                <div class="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p class="loading-text">Loading</p>
            </div>
        )
    }
}