# The React Cookbook

![image](https://github.com/PranavBawgikar/the-react-cookbook/assets/102728016/183f2abd-17a4-4034-b3e7-d5a0b440339b)


## About

Welcome to the **React Cookbook** - your go-to guide for mastering advanced recipes to level up your next app! In this cookbook, we'll explore various design patterns in React, helping you cook up delicious React apps with ease.

### Design Patterns in React

Design patterns are like secret ingredients that make your React apps taste amazing! They provide structured solutions to common problems, making your code more organized and maintainable.

### 📖 Recipe #1: Context API by Kent C. Dodds

**Context API** is our first secret recipe, shared by the React master himself, Kent C. Dodds. It's a fantastic way to pass data through the component tree without the hassle of manually passing props down at each level.

- **Provider & Consumer**: Context API relies on two key components - `<Provider>` and `<Consumer>`. Think of `<Provider>` as a global state container, and `<Consumer>` as the lucky guest with access to that global state.

- **Say Goodbye to Prop Drilling**: Context API eliminates the need for prop drilling in your app, making your code cleaner and more efficient.

**Example:**

```jsx
// Create a provider + consumer pair
const { Provider, Consumer } = React.createContext();

// Wrap your app in the Provider and pass in the value
<Provider value={ /* some value */ }>
  <Consumer>
    {value => /* render something based on the context value */}
  </Consumer>
</Provider>
```

### 📖 Recipe #2: Render Props by Michael Jackson

Our next recipe, courtesy of Michael Jackson, revolves around **Render Props**. Imagine building a Puppy Voting App, and then a Kitten Voting App. Instead of repeating the same logic, we can create a versatile `<PetFeed>` component using Render Props.

- **Common Logic, Different Presentation**: Render Props allow us to share common logic for requesting data from an API, handling loading states, and dealing with errors. The presentation can vary based on the component using the Render Prop.

**Example:**

```jsx
<Resource
  path='/api/puppies'
  render={data => {
    if(data.loading) return <p>Loading puppies...</p>
    return data.payload.map(puppy => <div>{puppy}</div>)
  }}
/>
```

### 📖 Recipe #3: Presentation/Container Components by Dan Abramov

Dan Abramov shares the recipe of **Presentation and Container Components**, a pattern that separates logic from user interface.

- **Container Component for Logic**: The container component focuses on the "what it does" aspect. It requests data, processes it, and stores it in state.

- **Presentation Component for UI**: The presentation component is all about "what it looks like." It receives data as props and handles the visual rendering.

**Example:**

```jsx
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
      <h1>{weather.city} - {waether.country}</h1>
      <ul>
        <li>{weather.temp}</li>
        <li>{weather.description}</li>
      </ul>
    </div>
  )
}
```

This pattern simplifies your code, makes it more readable, and encourages reusability.

Now, put on your chef's hat and start cooking up some amazing React apps with these recipes! 🍽️

---

**Bon Appétit!** 🎉
