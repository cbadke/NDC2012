Caring about Code Quality
Venkat Subramaniam
venkats@agiledeveloper.com
@venkat_s

Why should i care?
- you can't be agile if your code sucks. plain and simple.
- it's hard to change bad code and agile is all about fast change.

Programs must be written for people to read, and only
incidentally for machines to execute
- Abelson and Sussman

- any useful software has to evolve and change

- peer reviews catch 60% of defects
- perspective-based reviews catch 35% more defects than non-directed. the reviewer should be someone intimately involved in the project
- disciplined personal practices can reduce defect introductions by up to 75%
- it costs more to make quality software... takes time and effort...

- companies never have time to do things the right way but they always have the time to redo it

- pay your technical debt. don't let the interest build.

- you hate being the guy maintaining a bad code base so don't leave a mess for the next guy.

what is quality?
- unfortunately its subjective and difficult to measure
- LOC is not a good metric so don't bother
- is the code readable?
	- if you want to create readable code then someone needs to read it
	- therefore never leave developers in isolation
- venkat says "I can't right good quality code but i can tell bad quality in other peoples code."

how to improve?
- start early - the earlier you focus on quality the easier it is to make quality
- don't compromise
- schedule time to lower your debt
- make it work, then immediately make it better
- change behaviour, you can't improve by always doing the same thing
- help and be willing to be helped

individual efforts
- care about your work
- KISS
- write tests and run tests before checkin
- good naming, use code reviews to help check these things
- learn good code by reading good code
	- if you find good code, show everybody so everyone can learn
	- we spend too much time reading bad code
- checkin frequently **i can't emphasize this more
	- if your source control locks files -> chuck it out, its garbage
	- never get merge hell, only give it ;)
- really learn your language - read about it, learn its features

team efforts
- avoid shortcuts
- take collective ownership - its the Teams code
	- anyone can modify any area
- promote positive interaction
	- communicate to boost people
	- hate the code not the coder
- constructive
	- not "this code sucks" but rather "maybe we could split this function"
- constant code review (absolutely his strongest recommendation)
	- don't make it political or emotional
	- keep it small and simple
	- tactical code review
		- everyone gets reviewed. no one is os special they don't need review
		- one person reviews, not a group meeting
		- note the good as well as the bad
		- rotate reviewers, not always the same people reviewing for the same people (i guess that needs more than 2 people)
	- "Code Review makes me a Hero or makes me Smarter"
		- either the reviewer sees something new and learns
		- or the reviewee gets shown something new and learns
- don't tolerate trashing the code




- Treat warnings as errors **I absolutely agree. I turn this on for EVERY project
	- if unavoidable, suppress selectively (**I document why if I do this, and NEVER globally suppress only suppress locally)
	- legacy system with a pile of warnings? - add scripts to the build that monitor this and fails the build if warings increase

- reduce complexity
	- long methods are bad news
	- how small is small
		- the method should do ONE thing and be at ONE level of abstraction
- you want low complexity code with high test coverage. thats the lowest risk situation for making changes

**lookup crapforn tool

- don't write clever code, write clear code
	- it won't be clever next week

- comment judiciously
	- comment should say why NOT how
	- good code is like a joke, you shouldn't have to explain it



