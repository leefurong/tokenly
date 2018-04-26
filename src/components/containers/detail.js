import React, {Component} from 'react'

export default class Detail extends Component {
  state={
    whitepaperUrl: '',
  }
  componentDidMount(){
    this.fetchDetail()
  }
  fetchDetail(){
    const {token} = this.props.match.params
    // todo
  }
  render() {
    return <div>
      <h1>
        detail for <strong>token</strong>
      </h1>
      <span>
        <a href={this.state.whitepaperUrl}>White paper</a>
      </span>
    </div>
  }
}