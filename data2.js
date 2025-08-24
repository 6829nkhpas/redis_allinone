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
        //set operations
        await client.sAdd('myset', ['Naman', 'kanika', 'armit','arjun']);
        const members = await client.sMembers('myset');
    console.log(members);
    await client.sRem('myset','arjun');    
     console.log(await client.sMembers('myset'));
     console.log(await client.sIsMember('kanika'));
     
         
    }catch (e) {
        console.log('redis client Error', e);
    }finally{
        await client.quit();
    }
}
redisDataStructures();