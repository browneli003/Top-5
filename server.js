const express = require('express');
const routes = require('./routes');

// Handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})


// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});



