let img, bg, imgGap, imgWidth, imgHeight, t, cubeLength, check, imgVarify, imgSuccess,
cubes = new Array(5);
img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, 
img_13, img_14, img_15, img_16, img_17, img_18, img_19, img_20; // Declare variable 'img'.

function setup() {
  createCanvas(682,994);
  img = loadImage('./img/button1.png');
  bg = loadImage("./img/baseboard.png");
  img = loadImage("./img/empire state building.png");
  img_1 = loadImage("./img/image_1.jpg");
  img_2 = loadImage("./img/image_2.jpg");
  img_3 = loadImage("./img/image_3.jpg");
  img_4 = loadImage("./img/image_4.jpg");
  img_5 = loadImage("./img/image_5.png");
  img_6 = loadImage("./img/image_6.jpg");
  img_7 = loadImage("./img/image_7.png");
  img_8 = loadImage("./img/image_8.jpg");
  img_9 = loadImage("./img/image_9.jpg");
  img_10 = loadImage("./img/image_10.jpg");
  img_11 = loadImage("./img/image_11.jpg");
  img_12 = loadImage("./img/image_12.png");
  img_13 = loadImage("./img/image_13.png");
  img_14 = loadImage("./img/image_14.jpg");
  img_15 = loadImage("./img/image_15.png");
  img_16 = loadImage("./img/image_16.jpg");
  img_17 = loadImage("./img/image_17.jpg");
  img_18 = loadImage("./img/image_18.jpg");
  img_19 = loadImage("./img/image_19.jpg");
  img_20 = loadImage("./img/image_20.jpg");
  img_21 = loadImage("./img/image_21.jpg");
  img_22 = loadImage("./img/image_22.jpg");
  img_23 = loadImage("./img/image_23.jpg");
  img_24 = loadImage("./img/image_24.jpg");
  img_25 = loadImage("./img/image_25.jpg");
  imgVarify = loadImage("./img/button1.png")
  imgSuccess = loadImage("./img/button2.png")
    

  check = loadImage("./img/checked.png");
  imgWidth = 124.2;
  imgHeight = 124.2;
  imgGap = 8.79;
  cubeLength = 124.2;
  t = 1;

  // cube array
  for (let i = 0; i< cubes.length; i++){
    cubes[i] = new Array (5);
    for (let j = 0; j<5 ; j++){
      cubes[i][j] = 1;
    }
  }

}

function draw() {

  background (bg);  
  image(img_1, 12.75, 220.68, imgWidth, imgHeight);
  image(img_2, 12.75, 220.68 + imgGap + imgWidth, imgWidth, imgHeight);
  image(img_3, 12.75, 220.68 + (imgGap + imgWidth)* 2, imgWidth, imgHeight);
  image(img_4, 12.75, 220.68 + (imgGap + imgWidth)* 3, imgWidth, imgHeight);
  image(img_5, 12.75, 220.68 + (imgGap + imgWidth)* 4, imgWidth, imgHeight);
  image(img_6, 12.75 + (imgGap + imgHeight), 220.68, imgWidth, imgHeight);
  image(img_7, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth), imgWidth, imgHeight);
  image(img_8, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight);
  image(img_9, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight);
  image(img_10, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight);
  image(img_11, 12.75 + (imgGap + imgHeight) * 2, 220.68, imgWidth, imgHeight);
  image(img_12, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth), imgWidth, imgHeight);
  image(img_13, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight);
  image(img_14, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight);
  image(img_15, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight);
  image(img_16, 12.75 + (imgGap + imgHeight) * 3, 220.68, imgWidth, imgHeight);
  image(img_17, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth), imgWidth, imgHeight);
  image(img_18, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight);
  image(img_19, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight);
  image(img_20, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight);
  image(img_21, 12.75 + (imgGap + imgHeight) * 4, 220.68, imgWidth, imgHeight);
  image(img_22, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth), imgWidth, imgHeight);
  image(img_23, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight);
  image(img_24, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight);
  image(img_25, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight);

  // cube and cube bounda
  a = 12.75;
  b = 220.68;
  num = 0;
  for (let i = 0; i < cubes.length; i ++ ) {
    for (let j = 0; j < 5; j ++){
      if (cubes[i][j] == 1){
        fill(255, 255, 255, 0);
        stroke(225);
        strokeWeight(4);
        rect(a,b, cubeLength, cubeLength);
      } 
      else{noFill();
          stroke("#228b22");
          strokeWeight(4);
          num = num + 1; 
          rect(a + 4, b + 4, cubeLength - 8, cubeLength - 8);
          image(check, a + 4, b + 4, 40, 40);
          
          }  
      a = a + cubeLength + imgGap;
    }
    b = b + cubeLength + imgGap;
    a = 12.75;   
  }

// verify button;
  if (t == 1){
    image(imgVarify, 494.65, 906.41, 174.3, 72.42);
  } else{
    if (num == 25){
      image(imgSuccess, 494.65, 906.41, 174.3, 72.42);
    } else {
      image(imgVarify, 494.65, 906.41, 174.3, 72.42);
      stroke(225);
      fill("#ff461f");
      text("Please select all matching images",  width - 400, height -80);
    }
  }




}


function mousePressed() {
  if(mouseY < (875 + imgGap / 2) && mouseY > (220.68 - imgGap/2) && mouseX < (668 + imgGap/2) && mouseX > (12.75 - imgGap/2)){
    c = int((mouseY-(220.68 - imgGap/2))/(cubeLength + imgGap));
    d = int((mouseX-(12.75 - imgGap/2))/(cubeLength + imgGap));
    cubes[c][d] =  cubes[c][d] * -1;
  } else if(mouseY >= 906.41 && mouseY <= 978.83 && mouseX >= 494.65 && mouseX <= 668.95){
    // let t;
    t = -1;
  }
}

  // if (mouseY < 841.68 && mouseX < 633.75 && mouseY >= 220 && mouseX >= 12.75){
  //   c = int((mouseY-220.68)/cubeLength);
  //   d = int((mouseX-12.75)/cubeLength);
  //   cubes[c][d] =  cubes[c][d] * -1;
  // } else if(mouseY < 841.68 && mouseX <= 668 && mouseY >= 220 && mouseX >= 12.75) {
  //   c = int((mouseY-220.68)/cubeLength );
  //   d = int((mouseX-12.75)/cubeLength );
  //   cubes[c][d-1] =  cubes[c][d-1] * -1;
  // } else if(mouseY <= 875 && mouseX < 633.75 && mouseY >= 220 && mouseX >= 12.75){
  //   c = int((mouseY-220.68)/cubeLength);
  //   d = int((mouseX-12.75)/cubeLength);
  //   cubes[c-1][d] =  cubes[c-1][d] * -1;
  // } else if(mouseY <= 875 && mouseX <= 668 && mouseY >= 220 && mouseX >= 12.75){
  //   c = int((mouseY-220.68)/cubeLength);
  //   d = int((mouseX-12.75)/cubeLength);
  //   cubes[c-1][d-1] =  cubes[c-1][d-1] * -1;
  // } else if(mouseY >= 906.41 && mouseY <= 978.83 && mouseX >= 494.65 && mouseX <= 668.95){
  //   // let t;
  //   t = -1;
  // }
// }
