//Do not name a folder using () because it's directory will not work in terminal.
//JavaScript is a case-sensitive language. e.g., It's false not False etc.
//Js is a dynamically types language. You do not need to explicitly define the type of variable. It is assigned dynamically at the runtime.
let a=10;
a=true;
a='misbah';
console.log(a); //no error because of being dynamically typed.
//Showing Output:
    // Log a statement using console.log()
console.log("Hello from main.js");

//Variables:
    //They are used to store information / any data.
    //They can be declared using var, let and const.
    let age=21; // let can be reassigned.
    age=22;
    console.log(age);

    const salary=15000; //const cannot be assigned again.
    // salary=20000; // throws error: TypeError: Assignment to constant variable.
    console.log(salary);
    //Rule of thumb is to use const unless you know you have to change it.

//Data Types:
    //Specify what type of data can be stored and manipulated within a program. 
    //In Js, Data types are of primitive and non-primitive types.
    //There are 7 primitive (String, Number, Boolean, Undefined, Null, BigInt, Symbol) and 1 non-primitive (Objects) type.

    //String : Sequence of characters that represent a text value. They are surrounded by quotes "" / '' / ``.
    const name="Misbah";
    const language="JavaScript";
    //Number : Integer and Floating points
    const total=0;
    const pi=3.14;
    //Boolean : Logical entities : True or False
    const isPrimary=false;
    const user=true;
    //Undefined : If value is not assigned to any variable, its value will be undefined.
    //You always have to assign const.
    let result;
    console.log(result);
    const res=undefined;
    //Null : Empty or unknown value
    const data=null;
    //BigInt : Integer than what Number can hold.
    //Symbol : Unique and unchangeable.

    //Non-primitive type is the collection of values and not atomic.
    //key is the property.
    const person={
        //key : value
        //for keys, you don't have to use '' if it does not have js keywords
        'name':'Misbah',
        'school':'seecs',
        'age':21,
        lastname:'Juwayriyyah'
    }
    console.log(person.lastname);
    //The above syntax is called 'object literal'

    //Array: collection of similar or different data type items.
    const oddNumbers=[1,3,5,7,9];
    console.log(oddNumbers[3]);

//Operators:
    //Operator (assignment, arithmetic, comparison, logical, string, other...) is a special symbol used to perform operations on values and variables.

    //Assignment : assign value to the variables
    let x=8;
    let y=12;
    //Arithmetic : perform arithmetic operations
    console.log(x+y);
    // console.log(x-y);
    // console.log(x/y);
    // console.log(x*y);
    // console.log(x%y);
    console.log(x++);
    console.log(++x);
    //Comparison Operators : Compare two values and return boolean status
    console.log(x==y);
    // console.log(x===y);
    console.log('10'===10);
    // console.log('10'!==10);
    console.log('10'!=10);
    console.log('10'<=10);
    console.log('10'>10); //and so on
    //Logical Operators : Perform logical operations and return boolean status
    //Figuring out if 9 is in between x and y
    const isValidNumber= (x<=11 && 11<=y); //and
    console.log(isValidNumber);
    //Figuring out if 12 is equal to either x or y
    const isXY= (x==12 || 12==y); //or
    console.log(isXY);
    console.log(!isXY) //not
    //String Operator: + to concat
    console.log('Misbah'+' Juwayriyyah') //not recommended
    //Ternary Operator : Returns a value based on a condition.
    const isEven= 11%2==0? '11 is even':'11 is odd'; // any datatype can be used here.
    console.log(isEven);

//Type Conversions: 
    //Implicit conversion: Js does it automatically
    console.log('23'+23); //auto to string
    console.log('23'*23); //auto to number
    console.log('4'-'2'); //auto to number
    console.log('12'/'2'); //auto to number
    console.log('12'/'meow'); //NaN - not a number
    console.log('5'-true); //true=1 and false=0
    console.log('5'-null); //null=0
    console.log(5+undefined); //NaN
    //Explicit conversion: Manually done by the programmer
    //convert string or boolean into numeric:
    console.log(Number('5')); //5
    console.log(Number(false));//0
    console.log(Number(''));//0
    console.log(parseInt('5'));
    console.log(parseFloat('3.14'));
    //convert others to string
    console.log(String(true)); //string true - represented by not coloured output in the terminal.
    console.log((500).toString()) //does not work on null or undefined. //Paranthesis is a must for constants.
    console.log(x.toString())
    //Convert others to boolean
    console.log(Boolean(500));
    console.log(Boolean(0)); //false
    console.log(Boolean(null)); //false
    console.log(Boolean(undefined)); //false
    console.log(Boolean(NaN)); //false
    console.log(Boolean("")); //false
    console.log(Boolean(' ')); //true
    console.log(Boolean('misbah'));

//Equality:
    const var1=true;
    const var2=1;
    //== allows coercion
    console.log(var1==var2);
    //=== does not allow coercion. Requires the type to be same as well.
    console.log(var1===var2);
    //same goes for '10' and 10 or 0 and ''

//Conditional Statements:
    //if else if else
    const num=0;
    if(num>0){
        console.log(num + ' is positive');
    }else if(num<0){
        console.log(num + ' is negative');
    }else{
        console.log('Number given is zero.');
    }
    //switch
    const color='red';
    switch(color){
        case 'green': console.log('color is green'); break;
        case 'red': console.log('color is red'); break;
        default: console.log('not defined');
    }

// Looping code:
    //for loop
    //for(initializer;condition;final-expression){}
    console.log('For loop:');
    for(i=0;i<10;i+=2){
        console.log(i);
    }
    //while loop
    console.log('While loop:');
    let int=10; //initializer
    while(int>0){//condition
        console.log(int);
        int-=1;//final expression
    }
    //do-while loop
    int=0;//initializer
    console.log('Do-While loop:');
    do{
        console.log(int)
        int--;//final expression
    }while(int>0);//condition
    //for of loop
    let arr=['hi','hello','hey'];
    for (let item of arr){
        console.log(item);
    }
    //use of: to access actual items
    //use in: to access index

//Functions:
    // Function is a block of code designed to perform a particular task. 
    //Functions are reusable, maintainable.
    //function name(param1,param2,...){//code to be executed}
    function greet(name){//parameter while defining function
        console.log('Good Morning '+name);
    }
    greet('Misbah');//Arguments while calling function.
    greet('Saadan');

    function sum(num1,num2){
        return num1+num2;
    }
    const sum1=sum(10,20);
    console.log(sum1);

    //arrow functions
    const arrowSum=(num1,num2)=>{
        return num1+num2;
    } 

    const add=(num1,num2)=>num1+num2; //no need for return if only one statement is there.
    console.log(add(1,2));

    const addFive=num=>num+5;
    console.log(addFive(5));
    
//Scope: 
    //Scope means accessibility and visibility of variables.
    //Block, Function, Global Scope
    //Block Scope - 2015
    {
        let five=5
        console.log(five);
    }
    // console.log(five); error

    //Function Scope
    const Six=()=>{
        let six=6;
        console.log(six);
    };
    Six();
    // console.log(six); //error

    //Global Scope : works everywhere
    const myName='Misbah';
    {
        console.log(myName);
    }
    const Name=()=>{
        console.log(myName);
    };
    Name();




    