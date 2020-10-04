/*
CodeOp assessment question 3

The population of a town is currently 600,000. This represents an increase of 72% from the population 
8 years ago. Find the population of the town 8 years ago. Round to the nearest whole number if necessary.
*/


function population(num, percent){
    let value = num * (percent/100);
    let oldPopulation = num - value;
    return `The population of the town 8 years ago was ${oldPopulation}`;
}

population(600000, 72);

