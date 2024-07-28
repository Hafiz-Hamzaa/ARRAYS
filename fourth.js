//////////////////////   ARRRAYS AND METHODS ////////////////////////
//=============>>>> Create an Array
let marks = [23 , 89 , 56 , 78 , 90 , 25]
console.log(marks);
console.log(typeof marks);

//===========>>> Array Properties
//========>>> Length
let friends = ["Ali" , "Zaid" , "Hamza" , "Umer"]
console.log(friends.length);

//===========>>> Array Indices /  or Update value of an Array
let bestFriends = ["Arif" , "Adeel" , "Kashan" , "Hassan"]
console.log(bestFriends[2]);
bestFriends[1] = "Umer"
console.log(bestFriends);

//============>>>> Looping over an Array
//======>>> By using For Loop
let student_marks = [78 , 89 , 90 , 92 , 94]
for(let i = 0 ; i < student_marks.length ; i++) {
    console.log("student marks = " , student_marks[i]);
}

//===========>>> By using For of Loop
let bestHobbies = ["Coding" , "Error Handling" , "Problem Solving"]
for(let hobbie of bestHobbies) {
    console.log(`I like to do ${hobbie}`);
}

//===============>>>>>>> Array Methods
//====>>> Push
let Push = [123 , 567 , 908 , 678 , 890 , 345 , 1240]
Push.push(100)
console.log(Push);

//========>>> Pop
let Pop = [123 , 567 , 908 , 678 , 890 , 345 , 1240]
Pop.pop()
console.log(Pop);

//=======>>> Shift
let Shift = ["Ali" , "Ahad" , "Abdullah", "Aqeel"]
Shift.shift()
console.log(Shift);

//=======>>> Un Shift
let unShift = ["Ali" , "Ahad" , "Abdullah", "Aqeel"]
unShift.unshift("Aqib")
console.log(unShift);

//========>>> toString
let foodItems = ["apple" , "banana" , "mango" , "pear"]
let res = foodItems.toString()
console.log(res);

//======>>> Concat
let friendList1 = ["Ali" , "Abdullah" , "Hamza"] 
let friendList2 = ["Babar" , "Qasim" , "Owais"]
let friendList3 = ["Umer" , "Hassan" , "Mubashir"]
let allFriendsList = friendList1.concat(friendList2 , friendList3);
console.log(allFriendsList);

//=====>>> Slice
let veggies = ["potato" , "carrot" , "onion" , "lemon" , "ladyfinger"]
let result = veggies.slice(1 , 4)
console.log(result);

//=====>>> Splice (add , remove , replace)
//                   0     1     2     3     4     5
let numericalArr = [120 , 130 , 140 , 150 , 160 , 170]
numericalArr.splice(2 , 3 , 180);
console.log(numericalArr); // 120 , 130 , 180 , 170

//================>> Add Element
//                   0         1        2          3
let studentName = ["Zaid" , "Arif" , "Adeel" , "Afreen"]
studentName.splice(2 , 0 , "Amjad" )
console.log(studentName); // Zaid , Arif , Amjad , Adeel , Afreen

//==============>>>>> Remove Elemnet
//                     0        1        2          3         4
let student_name = ["Amna" , "Hiba" , "Hania" , "Ayesha" , "Laiba"]
student_name.splice(3 , 1) // Amna , Hiba , Hania , Laiba
console.log(student_name);

//===============>>>>> Replace Element
//                    0           1        2          3          4
let StudentName = ["Khadija" , "Sana" , "Laiba" , "Fatima" , "Areeba"]
StudentName.splice(2 , 1 , "Maria" )
console.log(StudentName); // Khadija , Sana , Maria , Fatima , Areeba

////////////////////////// PRACTICE QUESTION ///////////////////////
let marksofStudents = [10 , 20 , 30 , 40]
let sum = 0
for(let val of marksofStudents){
    sum += val
}

let average = sum / marksofStudents.length
console.log("Average of marks of students =" , average);

let items = [300 , 900 , 800]
let i = 0
for(let val of items){
    let offer = val / 10
    items[i] = items[i] - offer
    console.log('Values after 10% offf =' , items[i])
    i++ 
}

let companiesName = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"]
companiesName.shift()
console.log(companiesName);
companiesName.splice(1,1,"Ola")
console.log(companiesName);
companiesName.push("Amazon")
console.log(companiesName);


