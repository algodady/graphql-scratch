const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const userSchema = require('./schemas/userSchema');
const userController = require('./controllers/userController');
const connectDB = require('./config/db');

dotenv.config();

const app = express();


const PORT = process.env.PORT;
connectDB();

// Set up GraphQL
app.use('/graphql', graphqlHTTP({
  schema: userSchema,
  rootValue: userController,
  graphiql: true,
}));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
