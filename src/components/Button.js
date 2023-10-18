import {useContext} from 'react'

import ThemeContext from '../context/ThemeContext'

function Button() {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div>
      Button 
        <br>
        </br>
        Active Theme in Button: {theme}
        <br>
        </br>
        <button onClick={() => (setTheme(theme === "dark" ? "light" : "dark"))} >Change theme in Button</button>
    </div>
  )
}

export default Button
