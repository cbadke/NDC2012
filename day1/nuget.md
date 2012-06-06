Session: Phil haack on NuGet. 

Time for some fanboy.
 
As hoped, this is about making NuGet packages and NuGet internals
  
NuGet is shipping in vs11

You can define NuGet dependencies in your project templates if you make those.

It seems you can make NuGet packages modify features of vs no just stuff in your project

If you put a readme.txt in the root of your package, vs will pop it open when someone installs your package

Visual source safe is no bueno ;-)

Phil prefers checkin in packages but can understand why people want the package restore feature.

Nuget.org is where packages live. 

It is possible to setup private package repos

NuGet.codeplex.com - Tools for NuGet beyond just NuGet itself.

Assembyinfo.cs - [assembly: AssemblyInformationalInfo("1.0.0-beta")]

Assembly company is where you put the author when NuGet bitches about it.

Recommends using -symbols package. This will generate a second package that has symbols and source to help devs with debugging.

That beta flag above tells NuGet gallery that the package is prerelease which does some filtering on the client.

------------
NuGet packages should use semantic version

Major.Minor.Patches

Major - breaking changes
minor - new features
Patches - bug fixes

I really like this versioning style

The trailing flags (like -beta) are given precedence by alphabet

Alpha<beta<zeta
------------

Dependency version refs seems weird to me. Clnsult docs...


------------
Interesting NuGet is open source. 

Client is on codeplex
Server is on github

Don't know why te split
------------

Docs.nuget.org

Working on plugin for NuGet on monodevelop
