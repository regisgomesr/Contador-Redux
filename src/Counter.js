import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

const Counter = ({count, increment, decrement}) => {
    return (
        <p>
            Contador: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </p>
    )
}

const mapStateToprops = (state) => {
    return {
        count: state.count
    }
}

const mapdispatchToprops = (dispatch) => {
    return {
        increment: () => dispatch(increment),
        decrement: () => dispatch(decrement)
    }
}

export default connect(mapStateToprops, mapdispatchToprops)(Counter)