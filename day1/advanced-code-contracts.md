Advances in Code Contracts For .NET
research.microsoft.com/contracts
Tom Ball


design by contract

code contracts allow you to (in code) to set pre and post conditions for your functions
uses rosalyn

run-time - acts like asserts
compile time - static analysis 
suggest repairs 
doc gen - enhances intellisense

works in VB and C#. some things work in F#

if you use regular compiler, your contract statements don't build into the bin

if you enable run-time checking, the contract statements get inserted into your code

can generate assemblies (reference assemblies) with just the contract code. helpful for shipping as library i guess

why is it that the MS guys are usually complete goobers?

they've added contracts to a bunch of the .net core libs. hit F12 on String.EndsWith and it'll pull up the metadata and you can see the contracts.
(maybe this isn't available outside of redmond yet?)

the pex test generation tool will generate tests based on your contracts.

pex has a facebook follow link in VS. seriously?

pex generates tests based on walking the IL and finding function inputs to cover uncovered code. sounds like it takes your unit tests into account in that coverage analysis. (this is sort of off topic)

i wouldn't rely on pex for testing but it might be an interesting tool to just see if it can find some funny inputs for you

the contracts showing up in intellisense is kind of interesting. it is nice for users of a published library

this demo was not tested...... MS has the worst presenters, even when their tools are interesting.

this team must be full of very smart people. this is like compiler design + 100

the code analysis will find potential problems, give you warnings and suggest contracts or potentially code changes to fix things

these tools seem useful for input testing on functions. might help with some of the boiler plate tests when doing tdd

theres an option in the build where contracts will generate defensive code...
Contract.Require(myInput != null) ==> if(myInput == null) throw someShit();

the roslyn version of this tool is where the shit is at, i would be more inclined to just have that around than 
dealing with the older style code analysis and pex and all that shiz


