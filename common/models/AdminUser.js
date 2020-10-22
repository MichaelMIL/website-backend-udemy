'use strict';


var app = require('../../server/server');

module.exports = function(AdminUser) {
    AdminUser.newAdmin = function(user_id){
        console.log("trieng to create")
            app.models.AdminUser.find({where:{id: user_id}}, (err, users)=> {
                console.log("user",err,users);
                app.models.Role.find({where:{name: 'admin'}}, (err2, role)=>{
                  console.log("role",err2, role);
                  app.models.RoleMapping.create({
                    principalType: app.models.RoleMapping.USER,
                    principalId: users[0].id,
                    roleId: role[0].id
                  }, (err3, principal)=>{
                    console.log("done", err3, principal)
                  })
                })
              });
            
        }
    
    AdminUser.remoteMethod('newAdmin',
    {
        description: 'Create admin user',
        accepts:[
            {arg: 'user_id',type: 'string'},
        ],

    })





};



