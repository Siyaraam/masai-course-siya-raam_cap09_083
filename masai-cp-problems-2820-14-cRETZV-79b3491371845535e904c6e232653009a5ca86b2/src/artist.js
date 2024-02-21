function Artist(name, skill, profession) {
    this.name = name;
    this.skill = skill;
    this.profession=profession
}

//create a getprofession method 
artists.prototype.getprofession = function () {
    return this.profession;

};
//again create.prototype method print
artist.prototype.print = function () {
    return "i am preeti" + this.name;

};


// Remove the empty assigned objects and  work on them..
//  create the below object from the above constructor function and pass the follwing values "Rahul Dravid","Cricket","Cricketer"
var artists = new artists("rahul dravid", "cricket", "cricketer");


//create the below object from the above artists objects as per the problem statement
var artistsObject = Object.create(artists);

// Do not change this
export { Artist, artistsObject };
