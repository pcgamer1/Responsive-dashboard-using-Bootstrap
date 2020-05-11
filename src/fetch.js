const request = require('request')

const fetchdata = (callback) => {
    const url = 'https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test'
    request({url, json:true}, (error, {body}) => {
        if(error) callback(error)
        else callback(undefined, body)
    })
}

module.exports = fetchdata