// domain/.netlify/functions/1-hello

const items = require('../assets/data')

exports.handler = async (event,context, cb) => {
    return {
        headers:{
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify(items),
    }
}