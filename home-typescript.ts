class home{
    name ="Home";
    floors;
    color:string;
    VehicleParking;


    openHome(){
        console.log("Sweet Home");
    }

    closeHome(){
        console.log("Will be Back");
    }

    constructor(hOmeName,hOmeColor,hOmeFloors){
        this.name = hOmeName;
        this.color = hOmeColor;
        this.floors = hOmeFloors;
        console.log(`${this.name}`)
        console.log(`${this.color}`)
        console.log(`${this.floors}`)
        document.body.innerHTML="";
        let outerimage = document.createElement("div");
        outerimage.setAttribute('onclick', 'clickclose()');
        let innerimage = document.createElement('img');
        innerimage.setAttribute("src","C:/Users/shibi/Documents/Guvi Projects/HTML & JavaScript/home.svg");
        innerimage.setAttribute("width","30%");

        outerimage.appendChild(innerimage);
        document.body.appendChild(outerimage);

    }

}

let clickclose = () =>{
    document.body.innerHTML="";
        let outerimages = document.createElement("div");
        outerimages.setAttribute('onclick', 'clickinner()');
        let innerimages = document.createElement('img');
        innerimages.setAttribute("src","C:/Users/shibi/Documents/Guvi Projects/HTML & JavaScript/home1.svg");
        innerimages.setAttribute("width","30%");

        outerimages.appendChild(innerimages);
        document.body.appendChild(outerimages);
}

let clickinner = () => {
    let Home1 = new home('Gloria','Palewhite','2Floor')
    Home1.openHome();
    Home1.closeHome();
    
}



