import React from 'react'
import Room from './Room'
import './Grid.css'

function Grid() {
    return (
        <div className="grid">
            <div className="row row--1">
                <Room number='1' />
                <Room number='2'/>
                <Room number='3'/>
            </div>
            <div className="row row--2">
                <Room number='4'/>
                <Room number='5'/>
                <Room number='6'/>
            </div>
            <div className="row row--3">
                <Room number='7'/>
                <Room number='8'/>
                <Room number='9'/>
            </div>

        </div>
    )
}

export default Grid