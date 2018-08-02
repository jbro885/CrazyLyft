document.addEventListener("DOMContentLoaded", function (event) {

    var myGamePiece;
    var obstacles = []
    var car = new Image();
    car.src = "./car.svg"

    function startGame() {
        myGameArea.start();
        myGamePiece = new carComponent(25, 25, "rgba(255, 255, 255, 0.4)", 28, 24);
        // myGamePiece

        myObstacle1 = new component(1200, 10, "blue", 0, 0);
        obstacles.push(myObstacle1) ;
        myObstacle2 = new component(1200, 10, "blue", 0, 800);
        obstacles.push(myObstacle2);
        myObstacle3 = new component(5, 800, "blue", 0, 0);
        obstacles.push(myObstacle3);
        myObstacle4 = new component(5, 800, "blue", 1200, 0);
        obstacles.push(myObstacle4)
        myObstacle5 = new component(120, 90, "black", 310, 330);
        obstacles.push(myObstacle5)
        myObstacle6 = new component(120, 90, "black", 714, 330);
        obstacles.push(myObstacle6)
        myObstacle7 = new component(120, 90, "black", 1125, 330);
        obstacles.push(myObstacle7)
        myObstacle8 = new component(80, 140, "balck", 85, 0);
        obstacles.push(myObstacle8)
        myObstacle9 = new component(80, 140, "rgba(255, 255, 255, 0.4)", 490, 0);
        obstacles.push(myObstacle9)
        myObstacle11 = new component(190, 100, "black", 230, 60);
        obstacles.push(myObstacle11)
        myObstacle12 = new component(190, 100, "black", 630, 60);
        obstacles.push(myObstacle12)
        myObstacle13 = new component(190, 100, "black", 1050, 60);
        obstacles.push(myObstacle13)
        myObstacle14 = new component(190, 70, "#FF0000", 310, 210);
        obstacles.push(myObstacle14)
        myObstacle15 = new component(190, 70, "black", 720, 210);
        obstacles.push(myObstacle15)
        myObstacle16 = new component(90, 190, "black", 165, 215);
        obstacles.push(myObstacle16)
        myObstacle17 = new component(90, 190, "black", 570, 215);
        obstacles.push(myObstacle17)
        myObstacle18 = new component(90, 190, "black", 975, 215);
        obstacles.push(myObstacle18)
        myObstacle19 = new component(90, 210, "green", 80, 340);
        obstacles.push(myObstacle19)
        myObstacle20 = new component(90, 210, "green", 480, 340);
        obstacles.push(myObstacle20)
        myObstacle21 = new component(90, 210, "green", 1130, 470);
        obstacles.push(myObstacle21)
        myObstacle22 = new component(90, 210, "green", 890, 340);
        obstacles.push(myObstacle22)
        myObstacle23 = new component(110, 220, "green", 720, 470);
        obstacles.push(myObstacle23)
        myObstacle24 = new component(110, 220, "green", 320, 470);
        obstacles.push(myObstacle24)
        myObstacle25 = new component(80, 180, "green", 170, 630);
        obstacles.push(myObstacle25)
        myObstacle26 = new component(80, 180, "green", 580, 630);
        obstacles.push(myObstacle26)
        myObstacle27 = new component(80, 180, "green", 980, 630);
        obstacles.push(myObstacle27)
        // myObstacle28 = new component(80, 140, "green", 900, 0);
        // obstacles.push(myObstacle28)
        // myObstacle29 = new component(80, 140, "green", 900, 0);
        // obstacles.push(myObstacle29)

        pass1 = new passanger( 25,25, 'green', 30 ,30)


    }
    var direction = ''
    var myGameArea = {
        canvas: document.getElementById("myCanvas"),
        start: function () {
            // this.canvas.width = 1200;
            // this.canvas.height = 800;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
    }

    function passanger(width, height, color, x, y) {
        
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.update = function (color) {
            ctx = myGameArea.context;
            ctx.beginPath();
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fill();
            ctx.closePath()
        }
    }

    function component(width, height, color, x, y) {
        
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.update = function (color) {
            ctx = myGameArea.context;
            ctx.beginPath();
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fill();
            ctx.closePath()
            
            
        };
    }

    function carComponent(width, height, color, x, y) {

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.moveAngle = 180
        this.drawImage = function (deg){
            ctx.save();
            
            ctx.translate(this.x+this.width/2, this.y+this.height/2);
            ctx.rotate(deg*Math.PI/180.0);
            ctx.translate(-this.x-this.width/2, -this.y-this.height/2);
            ctx.drawImage(car, this.x-20, this.y-40, this.width+40, this.height+90);
            ctx.fillRect(this.x, this.y, this.width, this.height)
            ctx.fillStyle = color;
            ctx.restore();
        }
      
            // ctx = myGameArea.context;
            // ctx.rotate(90*Math.PI/180)
            // ctx.drawImage(car, -this.width / 2, -this.height / 2);
        
        this.update = function () {
            ctx = myGameArea.context;
            // ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            // ctx.translate(canvas.width/2,canvas.height/2);
            // ctx.rotate(90*Math.PI/180);
            ctx.drawImage(car,this.x-15, this.y-20, this.width+30, this.height+50)
        };
        // this.newPos = function() {
        //     this.angle += this.moveAngle 
        //     this.x += this.speed ;
        //     this.y -= this.speed ;
        // };
        this.crashWith = function (otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
    
            // var touch = function () {
                if (myleft - 4 < otherright &&
                    myright + 4 > otherleft &&
                    mytop - 4 < otherbottom &&
                    mybottom + 4 > othertop) {
                    // console.log('true');
                    return true
                }
            // }
            // if ((myleft <= otherright &&
            //         // myleft   <=   otherleft &&
            //         // myright  <=  otherright &&
            //         myright >= otherleft &&
            //         mytop > othertop &&
            //         mytop <= otherbottom &&
            //         mybottom > othertop &&
            //         mybottom > otherbottom) //&& touch()
            // ) {
            //     console.log('touch top prefent W87');
            //     direction = 'w'
            //     // updateMove(direction)
            //     return true
            // }
            // if ((myleft <= otherright &&
            //         // myleft   >=   otherleft &&
            //         // myright  <=  otherright &&
            //         myright >= otherleft &&
            //         mytop < othertop &&
            //         mytop < otherbottom &&
            //         mybottom >= othertop &&
            //         mybottom < otherbottom) // && touch()
            // ) {
            //     console.log('touch bottom, prefent S83');
            //     return true
            // }
            // if ((myleft < otherright &&
            //         myleft < otherleft &&
            //         myright < otherright &&
            //         myright >= otherleft &&
            //         mytop <= otherbottom &&
            //         mybottom >= othertop) //&& touch()
            // ) {
            //     console.log('touch right, prefent D68');
            //     return true
            // }
            // if ((myleft <= otherright &&
            //         myleft > otherleft &&
            //         myright > otherright &&
            //         myright > otherleft &&
            //         mytop <= otherbottom &&
            //         mybottom >= othertop) // && touch()
            // ) {
            //     console.log('touch left, prefent A65');
            //     direction = 'a'
            //     return true
            // }
        }
    }
    function updateMove(direction) {
        // debugger
        stopMove()
        if (direction === 'w') {
            myGamePiece.speedY += 100
            // debugger
        }
        if (direction === 'a') {
            stopMove()
            myGamePiece.speedX = 100
            // debugger
        }
    }

    function stopMove() {
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
    }

    function checkAllObsticals() {
        var res = []
        obstacles.forEach((obst) =>{
            if(myGamePiece.crashWith(obst)) {
                res.push('x')
            }
        })
        return res.length > 0 ? true : false
    }

    function renderAllObsticals(color) {
        obstacles.map((ob)=>{
            ob.update(color)
            // debugger
        })
    }

    function updateGameArea() {
        console.log(myGamePiece.speedX, myGamePiece.speedY);
        checkAllObsticals()
        // debugger
        myGameArea.clear();
        console.log(myGamePiece.x, myGamePiece.y);
        
        // stopMove()
        playerMove()
        renderAllObsticals("rgba(255, 255, 255, 0.4)")
        // myGamePiece.newPos();
        // myGamePiece.update();
        myGamePiece.drawImage(dir);
        pass1.update();
    }
    

    const speed = 4
    const slowD = 3
    var keys = [];
    var dir = 0
    function playerMove(e) {
        // console.log(e)
        if (keys[87] && !checkAllObsticals()) {
            dir = 180
            myGamePiece.y -= speed;
        }
        if (keys[87] && checkAllObsticals()) {
            myGamePiece.y -= speed - slowD ;
            dir = 180
        }
        if (keys[83] && !checkAllObsticals()) {
            dir = 0
            myGamePiece.y += speed ;
        }
        if (keys[83] && checkAllObsticals()) {
            dir = 0
            myGamePiece.y += speed - slowD;
        }
        if(keys[87] && keys[68]){
            dir = 45
        }
        if (keys[65] && !checkAllObsticals()) {
            dir = 90
            myGamePiece.x -= speed;
        }
        if (keys[65] && checkAllObsticals()) {
            dir = 90
            myGamePiece.x -= speed - slowD;
        }
        if (keys[68] && !checkAllObsticals()) {
            dir = 270
            myGamePiece.x += speed;
        }
        if (keys[68] && (checkAllObsticals())) {
            dir = 270
            myGamePiece.x += speed - slowD;
        }

        return false;
    }

    document.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });

    document.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
    startGame()

})
