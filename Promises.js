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