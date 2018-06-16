const joinNames = (namesObj) => {

  //STEP OPTION 1
  //use a map to convert array of objects into arrays of strings
  //join the array with comma space
  //
//STEPS OPTION 1
  //use map to create array of names
  //use pop to take the last name off the name of the array and store in a variable
  //use join with comma and space to format the first two names. Use concat to add maggie
  //template string
  [
    {name: "Bart"},
    {name: "Lisa"},
    {name: "Maggie"}
  ].map(function(array){
      return array.name;
  }).join(",");
}

  //array.map(x => x.name).join(', ');
  //const array = [{
   // name: 'Bart'
  //}, {
  //  name: 'Lisa'
  //}, {
  //  name: 'Maggie'
  //}];

  //for(let i = 0; i < array.length; i++){
  //console.log(array[i].name);


//}



module.exports = joinNames;
