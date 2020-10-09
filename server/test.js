const { mkactivity } = require('./server.js');

var models = require('./server.js').models;

/*models.Profile.findOrCreate({name:'Mike'}, (err, profile)=>{
    if(err){
        console.log("ERROR: ", err);
    }else if(profile){
        profile.email = 'michael@g.com';
        profile.save((ue,updated)=>{
            console.log("updated?", ue, updated);
        });
    }
});         
*/

/*var names = ['michael', 'lihi', 'john', 'alex', 'tal'];
var lastNames = ['Mark','Ofer', 'Kelly', 'Slater', 'Choen'];
let toSave =[];

names.map(name =>{
    lastNames.map(lastName=>{
        var email = (name + lastName + '@gmail.com');
        var nameF = (name+lastName);
        toSave.push({name: nameF, email:email});

    })
})
toSave.map(obj=>{
    models.Profile.create(obj, (err,created)=>{
        console.log("created??", err,created);
    })
})
*/


var filter = {
    where: {
        name: {like: 'alex'}

    },
    order: 'id ASC', // ASC DESC
    limit: 10,
    skip:0,
    fields:{
        email:true
    }
};


models.Profile.findById('5f8030868c17bdadff48b96f',(err,found)=>{
    console.log("found by ID" , err, found);
});
