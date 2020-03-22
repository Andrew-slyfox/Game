class Round{
    #circle;
    #dot;
    #dot_r;
    #circle_R;
    #Ox;
    #Oy;
    constructor(circle, dot, R, d, Ox, Oy){
        this.#circle = circle;
        this.#dot = dot;
        this.#circle.addEventListener("mousemove", this.move);
        this.#dot_r = d / 2;
        this.#circle_R = R;
        this.#Ox = Ox;
        this.#Oy = Oy;
        };

    move = (event) =>{
        let position = this.get_position(event.pageX, event.pageY);
        
        // this.#dot.style.left = position.x + "px";
        // this.#dot.style.top = position.y + "px";
      this.#dot.style.transform = 'translate('+(position.x - this.#Ox - this.#dot_r)+'px, '+(position.y - this.#Oy - this.#dot_r)+'px)';
       
    };
    get_position(x, y){
        let coord_r = {x: x - this.#circle_R, y: y - this.#circle_R};
        let r = Math.sqrt(Math.pow(coord_r.x, 2) + Math.pow(coord_r.y, 2));
        let coef = (this.#circle_R - parseInt(this.#dot_r))/r;
        return {x: this.#circle_R - coef*coord_r.x, y: this.#circle_R - coef*coord_r.y};
    };
}
document.querySelector(".input__button").onclick = function(){
    let circle = document.querySelector(".circle");
    let dot = document.querySelector(".circle__dot");
    let R = document.querySelector(".input__D").value / 2;
    let d = document.querySelector(".input__d").value / 1;
    let Oy = document.querySelector(".input__Oy").value / 1;
    let Ox = document.querySelector(".input__Ox").value / 1;
    if(((R / 2) < d) || (R * R < (Math.pow(Ox - R, 2) + Math.pow(Oy - R, 2))) || R == 0 
        || d == 0 || Ox == 0 || Oy == 0){
        alert("Problems with parameters of a circle or a dot");
    }
    else{
        circle.style.height = circle.style.width = 2 * R + "px";
        dot.style.height = dot.style.width = d + "px";
        dot.style.top = Oy + "px";
        dot.style.left = Ox + "px";
        let move = new Round(circle, dot, R, d, Ox, Oy);
    }
}











