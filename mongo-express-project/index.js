import mongoose from "mongoose";

const connectionString = "mongodb://localhost:27017/Anime";
mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

const db = mongoose.connection;
db.on("error", console.error.bind("There is some error"));

const BestAnimeScheme = new mongoose.Schema({
    code_name : {type: Number},
    real_name : {type: String},
    main_character : {type: String},
    oldNew : {type: String},
});

const Member = mongoose.model("Best_Anime", BestAnimeScheme);

async function createMembers() {
    const Naruto = new Member({
        code_name: 1, 
        real_name: "Naruto Shipudden", 
        main_character: "Naruto", 
        oldNew: "Old"
    });
    Naruto.save();

    const OnePiece = new Member({
        code_name: 2, 
        real_name: "One Piece", 
        main_character: "Lutfi", 
        oldNew: "Old"
    });
    OnePiece.save();

    const atackOnTitan = new Member({
        code_name: 3, 
        real_name: "Attack On Titan", 
        main_character: "Eren", 
        oldNew: "Old"
    });
    atackOnTitan.save();

    const BlackClover = new Member({
        code_name: 4, real_name: "Black Clover", 
        main_character: "Asta", 
        oldNew: "New"
    });

    console.log("CreatesMember run")
    await BlackClover.save();
    process.exit();
}

async function findMember(){
    const target = await Member.findOne({oldNew: "New"});
    console.log(target);
}

async function deleteAll(){
    const target = await Member.deleteMany({oldNew: "New"});
    process.exit();
}

async function updateOne() {
    const target = await Member.findOne({code_name: 2});
    console.log(target);
    const result = await Member.findOneAndUpdate(
        {code_name: 4}, 
        {$set: {main_character: "Yuno"}}, 
        {retutnDocument: "after"});

    console.log(result);

    process.exit();
}

//createMembers();
//findMember();
//deleteAll();
updateOne();
