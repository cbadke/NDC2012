Introduction to Reactive Extensions
Paul Betts
@xpaulbettsx

Why should you use it?
Makes lynq even more awesomer

myObject.ToObservable().Select....

now you're async

myObject
	.ToObservable()
	.Select()
	.TimeOut()
	.Catch(Observable.Return(myFailValue))
	.Subscribe( (x)=>someaction);

Observable.Defer() sets up lazy loading


Reactive Extensions lets you add async/retry/timeout etc to things.
It abstracts those features so that they are now composable.


the core of linq is a sequence (IEnumerable is .nets sequence)

with sequences you can do pipelines
new [] .Select.Where.ForEach()

lazy evaluation lets you seperate the description of what to do with some data from actually doing it.
this is a monad. And NOW they make sense.

a sequence is some STUFF, in a particular order

Events are composable
OnMouseUp + OnMouseDown != OnMouseDoubleClick

an events is some STUFF, in a particular order

SO, Rx lets you apply Linq to events. Instead of IEnumerable<> you have IObservable<>

you get:
OnNext
OnCompleted
OnError

observable.Subscribe(
	x => WriteLine(x),
	() => WriteLine("done"),
	ex => WriteLine("oh noes!"));

you only Dispose the result of Subscribe if you don't want the results

remember property changes in UI is events....

Subscribe() triggers you Observable calculation. just like in linq nothing happens until you foreach or tolist or somehow force the calc

-----
Subject<T> is IObservable and IObserver
lets you call OnNext, OnError etc manually

Rx gives you time considerations


inversely you can use Rx to force async operations to be synch. why would you want this? FOR TESTING!!

Rx can schedule actions to happen on specific threads, for example, run this code on the UI thread.

you can await an IObservable(), you'll get the last item

Github for windows is Rx all over
every api call to github is called with Rx

Rx has a thing called VirtualTime to do some testing voodoo with time based scenarios.

Rx Workshop Videos
amzn.to/programming-rx

Paul wrote a book as well

Rx is available on nuget. easy to pull in ;)

Rx gets rid of the need for locks and timers. The functional style eliminates the need.



This looks like really cool technology
