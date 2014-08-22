// TileTab = new Meteor.Collection("tiletab");


if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to STEMapp01.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

 // tiles stuff 

  Template.labsTemp.getLabTiles = function() {
    // return 4; 
    console.log("entered getLabTiles");
    //var tiles = Tiles.find({}, {sort:{id:1}})
    var tiles = TileTab.find({}, {sort:{id:-1}});
    console.log("Number of tiles", tiles.count())

    return tiles;
  };


 }


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // Init some tiles to test on
    
    // if (TileTab.find().count()===0){
    //   // TileTab.insert({id:4});

    //   var tileTitles=[["Teachers PWM", "demos"],
    //                   ["HW01",  "HW"],
    //                   ["HW02",  "HW"],
    //                   ["Lab01", "labs"],
    //                   ["lab02", "labs"]];
    //   for (var i=0; i< 5; i++){
    //     TileTab.insert({id:i});
    //     // Tiles.insert({ id: i, 
    //     //                title: tileTitles[i][0], 
    //     //                category: tileTitles[i][1] });
    //   };
    // };


  });
}


