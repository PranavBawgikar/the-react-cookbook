const { Provider, Consumer } = React.createContext();

class App extends Component {
  state = {
    user: {
      name: 'Peanut Butter Waffles'
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        <Dashboard />
      </Provider>
    )
  }
}

const Dashboard = () => {
  return <Sidebar />
}

const Sidebar = () => {
  return (
    <Consumer>
      {value => <h1>{value.user.name}</h1>}
    </Consumer>
  )
}

// This example showcases how to use Context API to pass user data from the top-level App component down to deeply nested Sidebar components without explicitly passing props through every intermediate component.