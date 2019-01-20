// ===============================================================================
// DATA
// Below data will hold all of the people using FriendFinder.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
  "name":"Mr. Purrfect",
  "photo":"cat.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1    ]
  },
  {
    "name":"Miriam Jones",
    "photo":"Miriam.jpg",
    "scores":[
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5    ]
    },
    {
      "name":"Bill Green",
      "photo":"Bill.jpg",
      "scores":[
          1,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          5,
          5    ]
      },
      {
        "name":"Jacob Smith",
        "photo":"Jacob.jpg",
        "scores":[
            1,
            4,
            5,
            4,
            5,
            1,
            2,
            4,
            1,
            5    ]
        },
        {
          "name":"Alison Li",
          "photo":"Alison.jpg",
          "scores":[
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              5,
              4,
              1    ]
          }

]  

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
