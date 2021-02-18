const express = require('express')
const app = express()
const port = process.env.PORT || 80

//  CONNECTIE MET POSTGRES
const { Pool } = require('pg')
const pool = new Pool({
    user: 'zgyomwdflmygjt',
    host: 'ec2-54-220-35-19.eu-west-1.compute.amazonaws.com',
    database: 'dbu16atmet63l2',
    password: '556b0d4ebcb675449fb050f42405565f7f5b26a92b5049647b888c97006cee51',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,

    },
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/lijst', (req, res) => {
    //QUERY UITVOEREN
    pool.query('SELECT * FROM LIJST', (err, res2) => {
        //console.log(res2);
        res.send(JSON.stringify(res2.rows));
    })

})


app.get('/test', (req, res) => {
    let arr = ['wesley', 'laura', 'brent'];
    res.send(JSON.stringify(arr));
})

app.listen(port, () => {
    console.log(`App Server luistert op poort ${port}`)
})