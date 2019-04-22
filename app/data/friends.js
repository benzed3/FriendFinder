var friendsArray = [
    {
        friendName: "Edward",
        photo: "",
        scores: [3, 4, 1, 5, 4, 4, 4, 4, 5, 3]
    }
];
console.log(friendsArray);


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;