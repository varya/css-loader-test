import React, { Component } from 'react'

//import style from './style.css'
let style = {}

export default class Layout extends Component {

  render() {
    return (
      <div className={style.layout}>
        <section className={style.main}>
          { this.props.children }
        </section>
      </div>
    )

  }

}
