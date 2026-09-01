document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
    let newNumbers = numbersArray.filter(function (number) {return number > 20});
    console.log("opgave 1", newNumbers)



    // opgave 2

    catsArray.push("Sniffles")
    console.log("opgave 2", catsArray)



    // opgave 3 

    let dogsArrayTrixie = dogsArray.includes("Trixie");
    console.log("opgave 3a", dogsArrayTrixie)

    let dogsArrayBaxter = dogsArray.includes("Baxter");
    console.log("opgave 3b", dogsArrayBaxter);


    // opgave 4

    let catsArrayBagheera = catsArray.find((element) => element == "Bagheera");
    console.log("opgave 4", catsArrayBagheera)

    let catsArraySalem = catsArray.find((element) => element == "Salem");
    console.log("opgave 4", catsArraySalem)

    // opgave 5

    let numberArrayMultiplied = numbersArray.map((x) => x * 3);
    console.log("opgave 5", numberArrayMultiplied)

    // opgave 6

    let dogArrayConcatenated = dogsArray.join("")
    console.log("opgave 6", dogArrayConcatenated);

    // opgave 7

    let fruitsArrayMango = fruitsArray.indexOf("Mango");
    console.log("opgave 7a", fruitsArrayMango);

    let fruitsArrayBlåbær = fruitsArray.indexOf("Blåbær");
    console.log("opgave 7b", fruitsArrayBlåbær);

}) // ends DOMContentLoaded