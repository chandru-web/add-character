import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    charactersList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddCharacters = () => {
    const {userInput} = this.state
    if (userInput.trim() === '') return
    const newCharacter = {
      id: uuidv4(),
      name: userInput,
      length: userInput.length,
    }
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newCharacter],
      userInput: '',
    }))
  }

  render() {
    const {charactersList, userInput} = this.state
    return (
      <div className="app-container">
        <div className="app-card-container">
          <div className="character-count-container">
            <h1 className="count-the-character">
              Count the characters like a Boss...
            </h1>
            <ul className="user-entered-characters-list">
              {charactersList.length === 0 ? (
                <div className="no-character-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="No user inputs"
                    className="no-user-input-img"
                  />
                  <p>No characters added yet!</p>
                </div>
              ) : (
                charactersList.map(eachChar => (
                  <li className="list-item" key={eachChar.id}>
                    <p className="character-name-length">
                      {eachChar.name}: {eachChar.length}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="user-input-container">
            <h1 className="character-counter">Character Counter</h1>
            <form className="input-container">
              <input
                type="text"
                className="text-area"
                onChange={this.onChangeUserInput}
                value={userInput}
                placeholder="Enter the characters here"
              />
              <button
                className="add-button"
                type="submit"
                onClick={this.onAddCharacters}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
