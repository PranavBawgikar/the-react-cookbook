class Resource extends Component {
  state = {
    loading: false,
    payload: []
  }

  componentDidMount() {
    this.setState({ loading: true })
    axios.get(this.props.path).then(res => {
      this.setState({
        payload: res.data,
        loading: false
      })
    })
  }

  render() {
    return this.props.render(this.state)
  }
}

<Resource
  path='/api/puppies'
  render={data => {
    if(data.loading) return <p>Loading puppies...</p>
    return data.payload.map(puppy => <div>{puppy}</div>)
  }}
/>

//In this example, the <Resource> component handles data fetching, loading states, and errors. The rendering function passed as a prop allows you to customize the presentation for different use cases.