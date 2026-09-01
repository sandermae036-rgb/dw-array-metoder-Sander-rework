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

}) // ends DOMContentLoaded