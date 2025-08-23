const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', (err) => {
    console.log('redis client Error', err);
});

async function testconnection() {
   try{
    await client.connect();
    console.log('Connected to Redis');
   } catch (err) {
    console.log('redis client Error', err);
   }finally{
    await client.quit();
   }
}

testconnection();