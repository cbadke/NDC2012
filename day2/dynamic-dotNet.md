Dynamic .NET Demystified
Keith Dahlby
@dahlbyk
code samples: https://github.com/dahlbyk/Presentations/tree/master/DLR

the posh git guy!!

not a dynamic vs static talk

IronPython and IronRuby built on the DLR now

dynamic foo = "bar";
string baz = foo;
var qux = foo + baz; //results as dynamic
string qux = foo + baz; //results as string

dynamic x = "2";
dynamic y = Math.Abs(x); //boom

dynamic x = 2;
dynamic y = Math.Abs(x); //yay!

NEED TESTING for dynamic code.

caveats:
conversion/coersion features are more limited than other dynaimc languages
dynamic x = 2;
dynamic y = "2";
x == y //invalid
//i'm not confident on this particular example so don't call me out :P

no extension methods for you
as a result you have to jump through some hoops for linq sometimes

compiler does call site caching so it's not recalculating function routing on each call. it caches the function route calculation for subsequent function calls

DLR is built with expression trees which have been around for a long time but were heavily upgraded in call features in .net 4

lol. he has a graphic showing the expresion tree for basic factorial algo. looks like graphical lisp. awesome.

ExpandoObject - basically a dictionary that can be used dynamically. ViewBag in MVC3 may be expandoobject?
DynamicObject
	- abstractBase class
	- if you want to start writing dynamic behaviour stuff
IDynamicMetaObjectProvider
	- the interface used by DynamicObject
	- for hardcore guys that want to implement IronLua :P



the code demo includes a custom implementation of dynamic objects
it's pretty cool but i cant concetrate and type.

actually shows how he can embed python and ruby into an xml doc and run the scripts from c#

Impromptu.ActLike<>
sort of like casting of dynamics to pass them into static places but keep dynamic behaviour... i think
look it up. basically if you have the bits to honor an interface you can 'cast' to that interface with Impromptu.ActLike even though you don't actually inherit from that interface. You mostly use if with dynamics but i _think_ you could:


interface IMyInterface {
	void Greet();
	}
interface IMyOtherInterface {
	void Swear();
	}

class Doorman : IMyInterface
{
	void Greet() { Console.WriteLine("Greetings!");
	void Swear() { Console.WriteLine("Pants!"); //remysharp swore like this a lot ;)
}

void CallSwear(IMyOtherInterface guy)
{
	guy.Swear();
}

so then you can:

var g = new Doorman();
CallSwear( Impromptu.ActLike<IMyOtherInterface>(g) ); //Pants!


I think all these features are how MassiveORM, dapper, Simple.Data, petapoco(somewhat)  does its voodoos.


nice Impromptu doess function currying via Impromptu.Curry()
may or may not be useful but interesting that it's i c# now.
