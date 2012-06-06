Moles, code isolation tool (Fakes, new library)
Isolating Unit Tests
Jonathan "Peli" de Halleux

not going to discuss if this is a good idea
here's a hammer, watch your fingers

same guys as made pex

all the design decisions about  being efficient for use with pex

Moles became Fakes...

statically compiled detour framework

summary - "replace any .NET method with a delegate" - similar to how testers do in ruby and other dynamic langs

//DEMO TIME
demo is using DateTime.Now - i love this - my favourite call to hate when testing

the dream:
DateTime.Now = () => new DateTime(2000, 1, 1);

how do we do?
Right click the reference you want to build fakes for and 'add fakes'
builds on demand, nothing to checkin
generates shims

now you can:
using(ShimsContext.Create()){
	ShimDateTime.NowGet = () => new DateTime(2000, 1, 1);
	//run you tests
}

AND NOW DateTime.Now always returns your delegate within that context. This effects ALL RUNNING CODE. Side effect here, VisualStudio gets message from the year 2000 because the debugger was using DateTime.Now. Good to know...
In the debugger you can step through your delegate code shim.

//END DEMO TIME

Shims does that detouring business. Great for non-virtual stuff.
Stubs is lighter weight and using overloading of virtuals just like any mocking framework.

... i will now go delete my Testable.Net project from github.

because you are using lambdas you can stick Asserts in your overriding delegate if you want.

-------------

constructors
you can shim constructors. You can hijack
var f = new File("myawesomefile")

this is almost too powerful. if not used judiciously it opens you up to making non-modular code.
that explains his hammer comment at the beginning ;)

-------
instance methods

can shim into a specific instance if you capture the contstructor call

-------------

even if your tempted.... never use this in production.

-------
collections

int[] data = {1,2,3};
var shim = new ShimCollectionType<int>(Class1.Col) {
	};
shim.bind(data);

The bind is the magic sauce. Replaces internal calls like GetEnumerator with the calls in the local data array.

--------

rule of thumb: stubs/mocks for your code base, shims when fighting against third party mess *cough* sharepoint *cough*

oh..... not actually released. Comes out with next VS Ultimate... boo..............

This talk will be a movie monday in the near future.
