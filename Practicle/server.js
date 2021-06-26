const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4500;

const app = express();
app.use(bodyParser.json())

const logger = require('morgan');
app.use(logger('dev'))


const passport = require('passport');
const passportJWT = require('passport-jwt');
const CONSTANTS = require('./config/constants');
const services = require('./services')

let ExtractJwt = passportJWT.ExtractJwt;

let JwtStrategy = passportJWT.Strategy;

let strategy = new JwtStrategy(CONSTANTS.jwtOptions, async function (jwt_payload, next){
    console.log('payload received', jwt_payload);
    let user = await services.getUser({ id: jwt_payload.id });
    if(user) {
        next(null, user);
    } else {
        next(null, false); 
    }
});

passport.use(strategy);

app.use(passport.initialize());
app.get('/protected', passport.authenticate('jwt', { session: false }), function(req, res) {
    res.json({ msg: 'Congrats! you are seeing this because you are authorized'});
});

app.use('/auth', routes.authRoutes);

app.listen(PORT, () => console.log(`Listening on posrt: ${PORT}`))

