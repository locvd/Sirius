/**
 * Created by locvd on 2017/04/30.
 */
// Set up login services
Meteor.startup(function () {
  // Add Facebook configuration entry
  /*
   ServiceConfiguration.configurations.update(
   { service: "facebook" },
   { $set: {
   appId: "XXXXXXXXXXXXXXX",
   secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   }
   },
   { upsert: true }
   );
   */

  // Add GitHub configuration entry
  /*
   ServiceConfiguration.configurations.update(
   { service: "github" },
   { $set: {
   clientId: "XXXXXXXXXXXXXXXXXXXX",
   secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   }
   },
   { upsert: true }
   );
   */

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    {service: "google"},
    {
      $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    {upsert: true}
  );

  // Add Linkedin configuration entry
  /*
   ServiceConfiguration.configurations.update(
   { service: "linkedin" },
   { $set: {
   clientId: "XXXXXXXXXXXXXX",
   secret: "XXXXXXXXXXXXXXXX"
   }
   },
   { upsert: true }
   );
   */
});

Meteor.methods({
  "userExists": function (username) {
    return !!Meteor.users.findOne({username: username});
  }
})