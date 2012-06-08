Thinking in Functional Style in F# (and some C#)
Venkat Subramaniam
@venkat_s
code samples: www.agiledeveloper.com downloads link

****** this will be covered in a talk I will be giving ******

What's Functional Programming?
- transformation of state rather than mutability of state
- functional programming is 50 yrs, why a big deal now?
	- multicore processors, concurrency!

mutability is no big deal
sharing is no big deal
shared mutability is devil's work

shared mutability leads to locking hell
	- most concurrent software is broken because of this

easier to prove code correctness without mutability
if functions are pure (no mutations) compilers can do fun optimizations
functional purity makes concurrency easy. nothing mutates so no locking etc

---
f#

not a pure functional lang

let temperature = 25
printfn "%d" temperature
temperature = 15
printfn "%d" temperature

what's the output?
25
25

why?
temperature = 15 is a comparison

let mutable temperature = 25
printfn "%d" temperature
temperature <- 15
printfn "%d" temperature

output:
25
15

so you CAN mutate but you have to be explicit
because fo this syntax it's easy to grep your code to find where you're doing this

-----
higher order functions

functions can be passed around like values

c#
List<int> numbers = new List<int>() { 1, 2, 3}

for(int i = 0; i < numbers.Count; i++) {
	Console.Write(numbers[i] + ' ');
}

foreach(var n in numbers) {
	Console.Write(n + ' ');
}

numbers.ForEach((e) => Console.Write(e + ' ')); //using higher order func

each method more expressive than the last;

f#
let numbers = [1..6]

//imperative style
for e in numbers do
	printf "%d" e
printfn ""

//idiomatic style - each is equiv
List.iter (fun e -> printf "%d " e) numbers
List.iter (printf "%d ") numbers //using currying

------
double a list of numbers

c#
List<int> numbers = new List<int>() {1,2,3};

List<int> doubledBoring = new List<int>();
foreach(var e in numbers) {
	doubledBoruing.Add(e*2);
}
foreach(var e in doubledBoring) {
	Console.Write(e + " ");
}

:(

let's do better
List<int> double = numbers.Select((e)=> e*2);
double.ForEach( (e) => Console.Write(e + " "));

f#
let numbers = [1..6]
printfn "%0" (List.map (fun e -> e*2) numbers)

-------
take the sum of a list

//imperative style first
let numbers = [1..6]
let mutable total = 0
for e in numbers
	total <- total + e

//used a variable and repeatedly mutated it to track the progress of the sum
//how would you multithread this?

//let's do better
let add n1 n2 = n1 + n2
let total = List.reduce add numbers

//this kind of resolves to operating like this
6 + (5 + (4 + (3 + (2 + 1))))
//so no temp variable being used but rather the result of each add gets passed into the next call to add
//this style of function application can be blasted across processors safely without any need for state locking

//think of state transformation like currency
//if you want to split a $20 you don't tear it in half you transform it into 2 $10's

functional development is becoming popular in finance industry because of the data transformation model
-----
function composition
//take even numbers, double them , and sum those

let numbers = [1..6]
let evenOnly = List.filter (fun e -> e % 2 = 0) numbers
let doubled = List.map (fun e -> e * 2) evenOnly
let total = List.reduce (fun n1 n2 -> n1 + n2) doubled

//idiomatically you would use composition syntax:

numbers
 |> List.filter (fun e -> e % 2 = 0)
 |> List.map (fun e -> e * 2)
 |> List.reduce (fun n1 n2 -> n1 + n2)
 |> printfn "Total is %d"

the composition passes the result of each line as the last argument of the operation in the next line

------
note: this is not necessarily as bad on memory as it sounds. interpretter/compiler writers can do some 
really nifty tricks in memory to reuse values since immutablity says that the contents of memory should
never change

------


if you use linq you're already using functional programming whether you realize it or not.
