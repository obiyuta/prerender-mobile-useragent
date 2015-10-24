# prerender-mobile-useragent
[Prerender](https://github.com/prerender/prerender) plugin that enables you to create snapshots that prepared for mobile devices(iPhone, Android...).

## How it works

[Prerender](https://github.com/prerender/prerender) creates snapshots with PhantomJS useragent (like the following) even if the original request is from mobiles.

```
PhantomJS/x.x.x ...
```

If you prepare pages, layouts or styles for mobiles depends on those useragent, you need to be requested with mobile useragent.

So this plugin adds 'iPhone'(default) to the useragent when the original request is from mobile devices or bot.

```
PhantomJS/x.x.x ... iPhone
```

## How to use

In your local prerender project run:

```
$ npm install prerender-mobile-useragent --save
```

Then in the server.js that initializes the prerender:

```
server.use(require('prerender-mobile-useragent'));
```

## Using External Configuration

You can use the enviroment variable MOBILE_USER_AGENT

```
export MOBILE_USER_AGENT=mobile-useragent
# default is 'iPhone'
```