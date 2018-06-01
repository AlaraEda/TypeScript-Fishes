var Bubble = (function () {
    function Bubble() {
        console.log("ik ben een bubble");
        var screenSize = window.innerWidth * 0.9;
        var screenSize2 = window.innerHeight;
        var randomNumber4 = Math.random() * screenSize;
        var randomNumber5 = Math.random() * screenSize2;
        this.bubbles = document.createElement("bubble");
        document.body.appendChild(this.bubbles);
        this.bubbles.style.left = randomNumber4 + "px";
        this.bubbles.style.top = randomNumber5 + "px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        console.log("ik ben een fish");
        var screenSize = window.innerWidth * 0.9;
        var screenSize2 = window.innerHeight * 0.8;
        var randomNumber = Math.random() * screenSize;
        var randomNumber2 = Math.random() * screenSize2;
        var randomNumber3 = Math.random() * 360;
        this.vis = document.createElement("fish");
        document.body.appendChild(this.vis);
        this.vis.style.left = randomNumber + "px";
        this.vis.style.top = randomNumber2 + "px";
        this.vis.style.webkitFilter = "hue-rotate(" + randomNumber3 + "deg)";
        this.vis.style.filter = "hue-rotate(" + randomNumber3 + "deg)";
        this.vis.addEventListener("click", function () { return _this.dooieVis(); });
    }
    Fish.prototype.dooieVis = function () {
        console.log("clicked");
        this.vis.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.i = 0;
        console.log("Start game");
        for (this.i = 0; this.i < 100; this.i++) {
            setTimeout(function () { return _this.createElements(); }, this.i * 300);
        }
    }
    Game.prototype.createElements = function () {
        var f = new Fish();
        var b = new Bubble();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map