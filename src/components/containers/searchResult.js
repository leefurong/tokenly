import React, {Component} from 'react'


export default class Result extends Component {
  componentDidMount = _ => {
    const {key} = this.props.match.params
    const {history} = this.props
    const url = `/detail/${key}`
    history.replace(url)
  }
  render = _ => <div></div>
}