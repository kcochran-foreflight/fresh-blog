# Winter Hack 2022

## Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Introduction

Inside this repo are some interesting technologies that I've been following for
a while but never got around to using in anyway. They are not trying to be
ground breaking in their approach to the web, rather they are meant to provide
a more satisfying dev experience while still outputting high performance web pages.
In the following sections I will give a quick overview of some of the technologies
and then describe what I liked and disliked about each. What follows is my 
opinion.

## Deno - The Next Great Javascript Runtime

Ryan Dahl created Node.js way back in the ancient times (2009) but after years of 
working with the project he found himself having several major regrets about
the design of Node.js which were summarized [here](https://www.youtube.com/watch?v=M3BM9TB-8yA)
in 2018. With those thoughts in mind, [Deno](https://deno.land/) was created!

Coming from Node, Deno is a breath of fresh air. Typescript support out of the
box is definitely what draws me to the platform the most. The team took all
the modern aspects of developing software in Javascript and wrapped them up
in one very well organized binary. It is an empowering feeling to setup a Deno
environment. It does everything you want like provide a bundler and linter but
gets out of your way for the rest. In particular I enjoy having more control over
how modules are resolved. All import paths are either relative or remote
(meaning a URL instead of a local file path) but where Node would force you to
use npm with its `node_modules` directory, Deno lets you decide how to organize
your dependencies. You could have a `deps.ts` file that holds all your remote
URLs or maybe something different, you have the choice and the power to decide.
There are small improvements such as a much more sane module resolution scheme 
but also larger, more important changes as well.

Take for example the permissions system. When running a deno program it by
default has no permission to access the disk, network, etc. until given
explicit and specific privileges to do so. This means that pulling in third
party libraries and executables can be done with much greater confidence.
Remember the last time you ran `npm install` and were presented with a long
list of vulnerabilities you didn't quite know what to do about? Well with
Deno actions can be taken with relative ease. Lets say you are running a linter
locally that one day becomes compromised by a malicious party. This rogue 
dependency could go on to install crypto miners on you machine and send
private data back home. Well that can only happen if you ran the linter with
`--allow-net` and `--allow-write`. If you didn't, you will get a nice message
saying that your linter is doing something weird and can start investigating
immediately instead of when that massive AWS bill comes in later in the month.
This added security makes importing modules from NPM a lot safer but importing
from NPM has its own set of issues.

While Deno and Node share a lot in common they also have considerable
differences. This means importing NPM packages can get a bit messy. There exists
now a compatibility layer to help smooth things over but the documentation 
outright states that
["you're likely find scenarios where something doesn't work"](https://deno.land/manual@v1.28.3/node/npm_specifiers).
NPM has it's issues but most of us would find it difficult to walk away from
such a large repository of useful libraries. Having to wait for your favorite
module to become available makes adopting Deno a hard sell. This is a simple
maturity issue though, and will be solved if a large community decides to
adopt Deno just like they did Node

## Fresh - Server Side Rendering with opt-in Client Side Rendering

Deno is a great platform and a great platform needs a great web framework. And
I can already hear you saying "oh please not another one" but don't worry because
this one takes a lot of the stuff you already use and just gives it a bit of a
remix. Just like with React, you build webpages using JSX, hooks, and your 
favorite UI component library but now it is rendered on the server into an
HTML document. This means that the browser is given a document that it is
able to render **extremely** fast instead having to wait for a Javascript renderer
to load only to do the same thing but slower. This is not a novel approach. Sites
have been built this way for a long time. Where is gets interesting is where you
can add "islands" of interactivity.

If you want to make your site interactive, you need to send Javascript to
the browser to handle those interactions. This was done in the old days by adding
a `<script>` tag to your HTML doc that contained whatever JS your site needed.
Anyone you has done this knows how difficult scaling this approach can be.
Thats where Fresh steps in and makes this a whole lot easier. You write the
interactive parts of the site as if they are mini react app and Fresh will
automatically handle sending a JS bundle and data to hydrate the app.

This takes some getting used to as first. You need to think about old problems
in new ways. State management is what I had the most trouble thinking about.
My gut instinct was to add things like `react-router` and `redux` but these
libraries don't make sense when rendering routes server side and when your app
is distributed across several islands. 

Overall I find Fresh to be a wonderful web framework. Being able to use
JSX without having to ship React was awesome.
