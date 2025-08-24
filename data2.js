const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', (err) => {
    console.log('redis client Error', err);
});

async function redisDataStructures(){
    try{
        await client.connect();
        console.log('Connected to Redis');
 

    await client.zAdd('cart',[
        {score: 100, value: 'apple'},
        {score: 20, value: 'banana'},
        {score: 300, value: 'cherry'},
    ])
    const cartdata = await client.zRange('cart', 0, -1);
    console.log(cartdata);
    const scoredData = await client.zRangeWithScores('cart', 0, -1);
    console.log(scoredData);
    
    const rank = await client.zRank('cart', 'cherry');
    console.log(rank);
   
     
         
    }catch (e) {
        console.log('redis client Error', e);
    }finally{
        await client.quit();
    }
}
redisDataStructures();