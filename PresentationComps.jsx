// Container Component
class WeatherWidgetComponent extends React.Component {
  state = { weather: null }

  componentDidMount() {
    getWeather().then(weather => {
      this.setState({ weather })
    })
  }

  render() {
    return (
      {/* Render the presentation component */}
      <WeatherWidget weather={this.state.weather} />
    )
  }
}

// Presentation Component
const WeatherWidget = (props) => {
  const { weather } = props
  return (
    <div>
      <h1>{weather.city} - {weather.country}</h1>
      <ul>
        <li>{weather.temp}</li>
        <li>{weather.description}</li>
      </ul>
    </div>
  )
}

// In this pattern, the container component handles data fetching and state, while the presentation component focuses solely on rendering the UI. This separation makes your code more readable and reusable.

// Feel free to reach out if you have any questions or need further clarification!