//RUNNING THE SERVER
const app = require('../app')
const port = process.env.PORT || 3004

app.listen(port, ()=>{
    console.log(`Server is running here: http://localhost:${port}/`)
})
