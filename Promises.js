// Before Promises Callbacks

el.addEventListener("click", submitForm);

// callback pyramid of doom
movePlayer(100, 'Left', function(){
    movePlayer(400, 'Left', function(){
        movePlayer(10, 'Right', function(){
            movePlayer(330, 'Left', function(){
            });
        });
    });
});

// With promise 

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))