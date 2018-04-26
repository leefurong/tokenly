import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {withStyles} from 'material-ui/styles'
import {Link} from 'react-router-dom'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
})

class Home extends Component {
  state = {
    keyword: '',
  }

  handleChange = event => {
    this.setState({
      keyword: event.target.value,
    })
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <TextField
          name="keywordInput"
          label="Token name"
          onChange={this.handleChange}
        />

        <Link to={`/s/${this.state.keyword}`}>
          <Button className={classes.button} variant="raised" color="primary">
            Go!
          </Button>
        </Link>
      </div>
    )
  }
}

export default withStyles(styles)(Home)