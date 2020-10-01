# Starting the project

- Create git repo
- Add readme.md file

## React Setup

- RUN create-react-app _folderName_
- CD into _folderName_
- RUN npm start (this is to make sure the frontend server is working)
- Replace favicon.ico file
- Remove and clean up unwanted files (App.css, App.test.js, logo.svg, setupTests.js)
- Change the App.js file to look like this to start:

```
import React from 'react'

function App() {
  return (
    <>
      <h1>Welcome to ProShop</h1>
    </>
  )
}

export default App
```

- Remove index.css styling
- Move .gitignore file to root of project
- Add "node_modules", "node_modules/" and ".env" to the .gitignore file
