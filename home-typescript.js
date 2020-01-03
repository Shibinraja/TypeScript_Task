var home = /** @class */ (function () {
    function home(hOmeName, hOmeColor, hOmeFloors) {
        this.name = "Home";
        this.name = hOmeName;
        this.color = hOmeColor;
        this.floors = hOmeFloors;
        console.log("" + this.name);
        console.log("" + this.color);
        console.log("" + this.floors);
        document.body.innerHTML = "";
        var outerimage = document.createElement("div");
        outerimage.setAttribute('onclick', 'clickclose()');
        var innerimage = document.createElement('img');
        innerimage.setAttribute("src", "C:/Users/shibi/Documents/Guvi Projects/HTML & JavaScript/home.svg");
        innerimage.setAttribute("width", "30%");
        outerimage.appendChild(innerimage);
        document.body.appendChild(outerimage);
    }
    home.prototype.openHome = function () {
        console.log("Sweet Home");
    };
    home.prototype.closeHome = function () {
        console.log("Will be Back");
    };
    return home;
}());
