const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (err) => {
  console.log("redis client Error", err);
});

async function redisDataStructures() {
  try {
    await client.connect();
    console.log("Connected to Redis");
    // String Operations
    await client.mSet(["name", "Naman Kumar", "age", "25"]);
    const [nam, ag] = await client.mGet(["name", "age"]);
    console.log("Name:", nam, "Age:", ag);
    //lists operations => lPort rPort rPop lPop
    // await client.lPush('mylist',[ 'apple', 'banana', 'cherry']);
    const extractedList = await client.lRange("mylist", 0, -1);
    console.log("List:", extractedList);
    const poppedElement = await client.lPop("mylist");
    console.log("Popped Element:", poppedElement);
    const newlist = await client.lRange("mylist", 0, -1);
    console.log("New List:", newlist);
  } catch (e) {
    console.log("redis client Error", e);
  } finally {
    await client.quit();
  }
}
redisDataStructures();
