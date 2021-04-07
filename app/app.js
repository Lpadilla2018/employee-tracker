const express = require('express');
const handebars = require('express-handlebars');

const app = express();

//handlebars view engine
app.engine(
  'handlebars',
  handebars({
    defaultLayout: 'main_logo',
  })
);
app.set('view engine', 'handlebars');

// staic resources
app.use(express.static(__dirname + '/public'));

app.use(express.bodyParser.json());
app.use(express.bodyParser.urlencoded({ extended: false }));

// Routing
var routes = require('../Start/routes/index');
app.use('/', routes);

app.use((req, res) => {
  res.status(404);
  res.render('404');
});

app.listen(3000, () => {
  console.log('http://localhost:3000 Started');
});
