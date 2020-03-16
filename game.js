class round{
    constructor(){
        this.circle = document.querySelector(".area__circle");
        this.dot = document.querySelector(".area__dot");
        this.circle.addEventListener("mousemove", this.move);
        this.circleStyle = getComputedStyle(this.circle);
        this.dotStyle = getComputedStyle(this.dot);
        this.R = parseInt(this.circleStyle.width)/2;
        };

    move = (event) =>{
        let position = this.get_position(event.pageX, event.pageY);
        this.dot.style.left = position.x + "px";
        this.dot.style.top = position.y + "px";
    };
    get_position(x, y){
        let coord_r = {x: x - this.R, y: y - this.R};
        let r = Math.sqrt(Math.pow(coord_r.x, 2) + Math.pow(coord_r.y, 2));
        let coef = (this.R - parseInt(this.dotStyle.width)/2)/r;
        return {x: this.R - coef*coord_r.x, y: this.R - coef*coord_r.y};
    };
}
this.document.querySelector(".input__button").onclick = function(){
    let circle = document.querySelector(".area__circle");
    let dot = document.querySelector(".area__dot");
    circle.style.height = circle.style.width = document.getElementById("input__D").value + "px";
    dot.style.height = dot.style.width = document.getElementById("input__d").value + "px";
    dot.style.top = document.getElementById("input__Oy").value + "px";
    dot.style.left = document.getElementById("input__Ox").value + "px";
    let move = new round();
}











