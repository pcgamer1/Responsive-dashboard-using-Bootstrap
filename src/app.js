const express = require('express')
const request = require('request')
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

pathAssets = path.join(__dirname,'../assets')
pathViews = path.join(__dirname,'../templates/views')
pathPartials = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', pathViews)
hbs.registerPartials(pathPartials)
const fetchdata = require('../src/fetch')

app.use(express.static(pathAssets))

app.get('', async (req, res) => {
    fetchdata((error, body) => {
        if(error)
            return res.send({
                error
            })
        // res.send(body.)
        res.render('index',{
            ...body.dataForTopFourBoxes,
            ...body.dataForBottomRightTable
        } )
    })
})

app.listen(port, () => {
    console.log('The server is up on port :', port)
})