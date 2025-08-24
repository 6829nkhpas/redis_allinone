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
    client.set('key', 'Naman Kumar ');

    const value = await client.get('key');
    console.log('value', value);
    const deletecount = await client.del('key');
    console.log('Deleted count', deletecount);
    await client.set('val',100);
    console.log(await client.incr('val'));
    
  
    

   } catch (err) {
    console.log('redis client Error', err);
   }finally{
    await client.quit();
   }
}

testconnection();