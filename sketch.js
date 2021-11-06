var starImg, bgImg;
var star, starBody;
var fada, fadaImg, fadaSom;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    fadaImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
    
    //carregar animação(loadAnimation) de fada (fairyImage1 e 2)

    //carregar loadSound pasta sound
    fadaSom = loadSound("JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada 
    //e ajustar scala

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fada = createSprite(600,500);
    fada.addAnimation("fada",fadaImg);
    fada.scale = 0.2;
    
    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    fadaSom.play();
}
function draw(){
    background(bgImg);
   //add musica
   

   //criar condicionais para fada se movimentar na tela quando
if(keyDown("LEFT_ARROW")) {
fada.velocityX = -2; 
}

if(keyDown("RIGHT_ARROW")) {
fada.velocityX = 2;
}

//apertamos as setas do teclado esquerda e direita.



//Quando apertamos para baixo a estrela cai
    if(keyDown("DOWN_ARROW")) {
        star.x = starBody.position.x;
        star.y = starBody.position.y;
        Matter.Body.setStatic(starBody,false);
    }

    //condicional para a estrela parar na mão da fada 
    //que esta no projeto
    
    if(star.y > 470 && starBody.position.y > 470){
        Matter.body.setStatic(starBody,true); 
    }

    drawSprites();
}

