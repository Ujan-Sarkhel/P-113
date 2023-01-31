function preload()
{

}

function setup()
{
    canvas = createCanvas(480, 480)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
}

function draw()
{
    
    image(video, 70, 110, 220, 200)
    stroke(128,0,0)
    fill(128, 0, 0)
    rect(30, 89, 300, 22)
    rect(30, 300, 300, 22)
    rect(30, 89, 22, 220)
    rect(310, 89, 22, 220)
    fill(0, 128, 0)
    stroke(0, 128, 0)
    circle(30, 100, 50)
    circle(330, 100, 50)
    circle(30, 310, 50)
    circle(330, 310, 50)
    
}

function take_snapshot()
{
    save("photo_frame.jpg")
}