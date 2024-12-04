// inheritance is one of four pillar of object oriented programming language.
// inheritance allow us to access the properties and method of parent class.
// inheritance are divided into multiple types:-
// single level, multi level, hierarchical .. multiple and hybrid is not working..


//              single Level Inheritance  & multi Level Inheritance :- 

interface sportType{
    PlayerName:string;
    SportName:string;
    Role:string;
    Age:number
}

interface CristanoType{
    value:number;
    Total_Goals:number;
}

interface CristanoJuniorType{
    Name:string;
    JuniorAge:number;
}

class Sport<sportType>{
    protected PlayerName; 
    protected SportName; 
    protected Role;
    protected Age;
    constructor(Name, sportname,role,age){
        this.PlayerName = Name;
        this.SportName = sportname;
        this.Role = role;
        this.Age = age;
    }

    showPlayerDetails(){
        console.log(`Player Name : ${this.PlayerName}`);
        console.log(`Sport Name  : ${this.SportName}`);
        console.log(`Role        : ${this.Role}`);
        console.log(`Age         : ${this.Age}`);
    }
}


class Cristano<CristanoType> extends Sport<sportType>{
    protected Value;
    protected Total_Goals;
    
    constructor(PlayerName,SportName,Role,Age,goals,val){
        super(PlayerName,SportName,Role,Age);
        this.Total_Goals = goals
        this.Value = val;
    }
    showPlayerCar(){
        console.log(`Player Name : ${this.PlayerName}`);
        console.log(`Sport Name  : ${this.SportName}`);
        console.log(`Role        : ${this.Role}`);
        console.log(`Age         : ${this.Age}`);
        console.log(`Total Goals : ${this.Total_Goals}`);
        console.log(`Market Value: ${this.Value}`);
    }
}


class CristanoJunior<CristanoJuniorType> extends Cristano<CristanoType>{
    protected Name;
    protected JuniorAge;
    constructor(PlayerName,SportName,Role,Age,goals,val,name,juniorage){
        super(PlayerName,SportName,Role,Age,goals,val);
        this.Name = name;
        this.Age  =  juniorage;
    }

    showJuniorDetails(){
        console.log(`Father Name : ${this.PlayerName}`);
        console.log(`Father Age  : ${this.Age}`);
        console.log(`Father Goals: ${this.Total_Goals}`);
        console.log(`Name        : ${this.Name}`);
        console.log(`Age         : ${this.Age}`);
    }
}

let playerObj = new CristanoJunior("Cristiano Ronaldo","FootBall","Center Forward / left Wing",40,916,126534311354334342,"Cristiano Junior",15);
playerObj.showJuniorDetails();