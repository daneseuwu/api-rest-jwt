# api-jwt

Clone this repository
```bash
npm install
```
```bash
npm run dev
```
```js mdx:preview
const app = express()
```

```jsx mdx:preview
const express = require('express')
const colors = require('colors')

app.listen(port, () => {

    try {
        console.log(colors.blue(`Server listening successfully on port http://localhost:${port}`))

    } catch (error) {
        console.log(colors.red('Failed to listen on server port:', error))
    }

})

}
```
