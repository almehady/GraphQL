const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// connect to mongodb database
mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.ko23d.mongodb.net/graphql?retryWrites=true&w=majority')
mongoose.connection.once('open', ()=>{
    console.log('database connected')
})
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('now listening for request on port 4000')
})