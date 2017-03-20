#!/usr/bin/env node

'use strict';

const request  = require('request');
const Forecast = require('forecast');

request.get('http://ipinfo.io/', (err, response, body) => {

    let result   = JSON.parse(body);
    let location = result.loc.split(',');
    let forecast = new Forecast({
        service: 'darksky',
        key: 'd3782b73349352d1b9e5a4471f394a94',
        units: 'celcius',
        cache: true,
        lang: 'pt'
    });

    forecast.get(location, (error, weather) => {
        console.log(weather.daily.summary);
    });
});