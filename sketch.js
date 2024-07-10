var sunImg;
var earthImg;
var moonImg;

var starsPlane;
var stars = [];

function preload()
{
    sunImg = loadImage('assets/sun.jpg');
    earthImg = loadImage('assets/earth.jpg');
    moonImg = loadImage('assets/moon.jpg');

    for(var i = 0; i < 1000; i++)
    {
        stars.push({x: random(0,windowWidth), y: random(0,windowHeight)})
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    angleMode(DEGREES);

    starsPlane = createGraphics(windowWidth, windowHeight);
    starsPlane.noStroke();

    // // stars
    // for(var i = 0; i < 200; i++)
    // {
    //     starsPlane.fill(255,255,0);
    //     starsPlane.ellipse(random(starsPlane.width), random(starsPlane.height), 10);
    // }
}

function draw() {
    // camera
    camera(0, -300, height * 1.2, 0, 0, 0, 0, 1, 0);

    // space
    background(128);

    starsPlane.background(0);
    for(var i = 0; i < stars.length; i++)
    {
        var size = map(noise(frameCount*i/50000),0,1,0,1.5);
        starsPlane.fill(255);
        starsPlane.ellipse(stars[i].x, stars[i].y, size);
    }

    push();
    translate(0,800,-height*2);
    texture(starsPlane);
    plane(width*5, height*5);
    pop();

    // // stars
    // for(var i = 0; i < 200; i++)
    // {
    //     starsPlane.fill(255,0,0);
    //     starsPlane.ellipse(random(starsPlane.width), random(starsPlane.height), 10);
    // }
    
    /** Settings for the sun */
    // sun
    push();
    texture(sunImg);
    rotateY(frameCount/5);
    sphere(150, 50, 50);
    pop();
    // sun light
    pointLight(255, 255, 255, 0, 0, 0);
    pointLight(255, 255, 255, 0, 0, 0);
    pointLight(255, 255, 255, 0, 0, 0);

    /** Settings for the planets */
    // earth
    push();
        // earth's orbit
        rotateY(-frameCount/4);
        translate(500, 0, 0);

        ambientMaterial(255, 255, 255);
        texture(earthImg);

        // earth's rotation
        rotateY(-frameCount);

        sphere(40, 50, 50);

        /** moon */
        push();
        rotateY(-frameCount);
        translate(70, 0, 0);
        ambientMaterial(255, 255, 255);
        texture(moonImg);
        sphere(10);
        pop();
    pop();
}
