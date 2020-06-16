import React, { Component } from 'react'

class Customer extends React {

  render() {
    const { params } = this.props.match
    return (

      <div>
        <h1>Customer</h1>
        <p>{ params.id }</p>
      </div>

    )
  }
}

export default Customer