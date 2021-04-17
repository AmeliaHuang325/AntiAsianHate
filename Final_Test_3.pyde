boxSize = 75
overBox = False
locked = False



def setup():
    size(682,994)
    global img, bg, imgGap, imgWidth, imgHeight, cubes, t, cubeLength, check, imgVarify, imgSuccess
    bg = loadImage("baseboard.png")
    img = loadImage("empire state building.png")
    imgVarify = loadImage("button1.png")
    imgSuccess = loadImage("button2.png")
    
    check = loadImage("checked.png")
    imgWidth = 124.2
    imgHeight = 124.2
    imgGap = 8.79
    cubeLength = 124.2
    cubes = [[1] * 5 for n in range(5)]
    t = 1

    
def draw():
    background (bg)
    
    image(img, 12.75, 220.68, imgWidth, imgHeight)
    image(img, 12.75, 220.68 + imgGap + imgWidth, imgWidth, imgHeight)
    image(img, 12.75, 220.68 + (imgGap + imgWidth)* 2, imgWidth, imgHeight)
    image(img, 12.75, 220.68 + (imgGap + imgWidth)* 3, imgWidth, imgHeight)
    image(img, 12.75, 220.68 + (imgGap + imgWidth)* 4, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight), 220.68, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth), imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight), 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 2, 220.68, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth), imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 2, 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 3, 220.68, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth), imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 3, 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 4, 220.68, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth), imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth) * 2, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth) * 3, imgWidth, imgHeight)
    image(img, 12.75 + (imgGap + imgHeight) * 4, 220.68 + (imgGap + imgWidth) * 4, imgWidth, imgHeight)
    
    
    x, y = 12.75, 220.68
    num = 0
    for row in cubes:
        for col in row:
            if col > -1:                                
                fill(255, 255, 255, 0)
                stroke(225)
                strokeWeight(4)
                rect(x,y, cubeLength, cubeLength)           
            else:                
                noFill()
                stroke("#228b22")
                strokeWeight(4)
                num = num + 1            
                rect(x + 4, y + 4, cubeLength - 8, cubeLength - 8)
                image(check, x + 4, y + 4, 40, 40)
            x = x + cubeLength + imgGap
        y = y + cubeLength + imgGap
        x = 12.75
        
    global t
    if t == 1:
        image(imgVarify, 494.65, 906.41, 174.3, 72.42)
    else:
        if num == 25: ##!!!!!!!
            image(imgSuccess, 494.65, 906.41, 174.3, 72.42)
        else:  
            image(imgVarify, 494.65, 906.41, 174.3, 72.42)
            fill("#ff461f")
            text("Please select all matching images",  width - 400, height -80)
        
            
    
    # global t
    # t = 1
    # if t == 1:
    #     image(imgVarify, 494.65, 906.41, 174.3, 72.42)
                
    # else: 
    #     if col <0:
    #         image(imgSuccess, 494.65, 906.41, 174.3, 72.42)
            
    #     else:
    #         fill("#ff461f")
    #         text("Please select all matching images",  width - 400, height -80) 
        
    # else:
    #     if col < 0:
    #         image(imgSuccess, 494.65, 906.41, 174.3, 72.42)
        
    # global overBox
    # if 500 - boxSize < mouseX < 500 + boxSize and \
    #    900 - boxSize < mouseY < 900 + boxSize:
    #     overBox = True
    #     if not locked:
    #         # stroke(255)
    #         # fill(153)        
    #         if col < 0:
    #             fill("#44cef6")
    #             textAlign(CENTER)
    #             text("Verified",  width - 400, height -80)
    #             image(imgSuccess, 494.65, 906.41, 174.3, 72.42)
    #         else:
    #             fill("#ff461f")
    #             text("Please select all matching images",  width - 400, height -80)
    # else:
    #     stroke(153)
    #     fill(153)
    #     overBox = False
    # # image(imgVarify, 494.65, 906.41, 174.3, 72.42)

        
       
def mousePressed():
    # the cube disappears when the mouse is clicked 
#     # cubes[(mouseY-50)/cubeLength][(mouseX - (width - imgWidth) / 2)/cubeLength] = cubes[(mouseY - 50)/cubeLength][(mouseX - (width - imgWidth) / 2)/cubeLength] * -1
#     # global locked, xOffset, yOffset
    # global t
    # t = 1

    if mouseY < 841.68 and mouseX < 633.75 and mouseY >= 220 and mouseX >= 12.75:
        a = int((mouseY-220.68)/cubeLength )
        b = int((mouseX-12.75)/cubeLength )
        cubes[a][b] =  cubes[a][b] * -1
    elif mouseY < 841.68 and mouseX <= 668 and mouseY >= 220 and mouseX >= 12.75:
        a = int((mouseY-220.68)/cubeLength )
        b = int((mouseX-12.75)/cubeLength )
        cubes[a][b-1] =  cubes[a][b-1] * -1
    elif mouseY <= 875 and mouseX < 633.75 and mouseY >= 220 and mouseX >= 12.75:
        a = int((mouseY-220.68)/cubeLength )
        b = int((mouseX-12.75)/cubeLength )
        cubes[a-1][b] =  cubes[a-1][b] * -1
    elif mouseY <= 875 and mouseX <= 668 and mouseY >= 220 and mouseX >= 12.75:
        a = int((mouseY-220.68)/cubeLength)
        b = int((mouseX-12.75)/cubeLength)
        cubes[a-1][b-1] =  cubes[a-1][b-1] * -1
    elif mouseY >= 906.41 and mouseY <= 978.83 and mouseX >= 494.65 and mouseX <= 668.95:
        global t
        t = -1
        # if overBox:
        #     locked = True
            
        # else:
        #     locked = False
        # xOffset = mouseX - 494.65
        # yOffset = mouseY - 906.41

#     else:
#         fill("#ff461f")
#         text(" not here ", width / 2, height / 2 )
    

    
    
        
        
    # rect(500,900, boxSize, boxSize)
        
    # if col == -1 and t == -1: 
    #     fill("#44cef6")
    
    #     textAlign(CENTER)
    #     text("Verified",  width - 400, height -80)
    # elif col <> - 1 and t == -1:
    #     fill("#ff461f")
    #     text("Please select all matching images",  width - 400, height -80)
    
  
 
     
      
       
         # else:
    #     
