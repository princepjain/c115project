function setup(){
    mycanvas = createCanvas(700, 450)
    mycanvas.position(350,175)
    //mycanvas.center()
    
    video = createCapture(VIDEO)
    video.hide()
    
    pN = ml5.poseNet(video,modalloaded)
    pN.on('pose', gotPoses)
    
    }
    
    
    function draw(){
        image(video ,0,0,700,450)
    }
    
    function modalloaded(){
       console.log("osnfodfbonposndponopnoanfnasodsofnosnfoasndfosaanfosdnsdfnsfdnbaBFosndosafosnsofnsnoasnf") 
    }
    
    function take_snapshot(){
        save("mustache.png")
    }
    
    
    
    
    
    
    function gotPoses(results){
    console.log("princejain")
        if(results.length > 0){
             console.log(results)
         }
    }
    