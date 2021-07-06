class form {
    constructor(){ 
        this.input = createInput('name');
        this.button = createButton('play');
        this.title = createElement();
    }
    hide(){
        this.input.hide();
        this.button.hide();


    }
    display(){
        this.title.html("zombie invasion");
        this.title.position(width/2,50);
        this.title.style('font-size','70px')


        this.input.position(width/2,200);
         this.button.position(width/2,300);

         this.button.mousePressed(()=>{
             this.input.hide();
             this.button.hide();
             var name = this.input.value();
             if(name==="girl"){
                 flag = 1
             }
             else{
                 flag = 0
             }
             state = 1;

         })
    }
}