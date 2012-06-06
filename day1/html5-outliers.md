HTML5 Outliers
Remy Sharp
@rem

** caniuse.com **
Modernizr helps with feature detection

Web Storage
IE8+ has web storage. use it instead of cookies for app state data etc.
API is super simple
Synchronous API
Small data. Don't store megs of data
Storing things triggers events that can help you sync things across tabs.

Web Forms
Not wide spread yet...
<input type=email> no more client side regex. phones also detect and change keyboards
Still validate on server :P

History API - I think Marks used this
Update url on ajax events. allows back button and search engine to work right.

EventSource - see remy workshop notes
Creates persistant connection
One way asynch communication. Server -> Client.
EventSource is good for push notifications.
Possible to polyfill
Auto-reconnect, can resume on last-event-id (requires server setup)
Can to multiplexing based on event type

Drag'n'Drop/File API
You can drag files into gmail. you can't drag a picture into a tweet. try it.
drag-n-drop api is balls but basic file handling isn't too bad to implement

Upload
See flickr's new upload system. I actually used that this week and it's fantastic!
Can attach a listener to an onprogress event and do progress bars


--- future features (somewhat supported today)
dataset and classlist
can attach data to dom elements
classlist can be used to add/remove classes from elemnt kinda like jquery
classlist can be polyfilled in some browsers maybe not IE8

FullScreen
theres an api. you can make any dom element fullscreen
good for video and games
API can be fiddly. prefix hell
you've seen this on speaker deck, youtube, netflix etc

requestAnimationFrame
replace setinterval for anims. timer synched with screen refresh rate
polyfills available - degrades to setinterval

WebGL

Blobs (with urls)
couldn't follow his explanation. something about dynamic binary data on a url

<datalist> - combobox - dropdown + text input

real-time communication
access to camera and audio - html5demos.com/gum



