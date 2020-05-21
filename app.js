const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) )

//Express HBS engine 
hbs.registerPartials( __dirname + '/views/partials' );
hbs.registerHelper('getAnio', ()=> {
    return new Date().getFullYear()
})
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home',{
        name: 'Raúl Sulca'
    })
}); 

app.get('/about', function (req, res) {
    res.render('about',{
        name: 'Raúl Sulca'
    })
});

app.listen(port, ()=> {
    console.log(`Server open in ${port}.`);
} );
