'use strict';
// const loopback = require('loopback');
// const { Role, Principal } = require('loopback');

var app = require('../../server/server');

//const app = module.exports = loopback();

module.exports = function(user) {
    user.newAdmin = function(user_id){
            app.models.user.find({where:{id: user_id}}, (err, users)=> {
              if(!err&&users){
                app.models.Role.find({where:{name: 'admin'}}, (err2, role)=>{
                  if(!err2&& role){
                    app.models.RoleMapping.create({
                      principalType: app.models.RoleMapping.USER,
                      principalId: users[0].id,
                      roleId: role[0].id
                    }, (err3, principal)=>{
                      if(!err3,principal){
                        console.log("admin set", principal)
                      }else{
                        console.log("cant create proncipal", err3)
                      }
                    })
                  }else{
                    console.log("cant find admin role", err2)
                  }
                })
              }else{
                console.log("cant find admin user", err);
              }
              });           
        }
    
    user.remoteMethod('newAdmin',
    {
        description: 'Create admin user',
        accepts:[
            {arg: 'user_id',type: 'string'},
        ],

    })





};



