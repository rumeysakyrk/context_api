
import {useContext} from 'react'

import ThemeContext from '../context/ThemeContext'

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div>
    Header 
      <br>
      </br>
      Active Theme in Header: {theme}
      <br>
      </br>
      <button onClick={() => (setTheme(theme === "dark" ? "light" : "dark"))} >Change theme in Header</button>
  </div>
  )
}

export default Header
