# volvox.js - Self announcing services
![](https://avatars3.githubusercontent.com/u/16361502?v=3&s=200)  

Volvox.js simple framework with powerful service discovery using [Consul](https://www.consul.io/) or [ETCD](https://coreos.com/etcd/)

[![Build Status](https://travis-ci.org/microphonejs/microphone-core.svg?branch=master)](https://travis-ci.org/microphonejs/microphone-core) [![Coverage Status](https://coveralls.io/repos/github/microphonejs/microphone-core/badge.svg?branch=master)](https://coveralls.io/github/microphonejs/microphone-core?branch=master)

> Just develop your app using your favorite framework Express, Hapi, Restify etc then **Volvox.js** takes care of the rest. It starts application on available port registers application to **[Consul](https://www.consul.io/)** or **[ETCD](https://coreos.com/etcd/)** and starts **_worker_** that polls for critical instances and deregister them. **volvox.js** provides **/status** endpoint for [Consul Health Checks](https://www.consul.io/intro/getting-started/checks.html). Also, it provides client to select random instance to communicate.  

![](https://raw.githubusercontent.com/microphonejs/microphone-core/master/misc/microphone-consul-fabio.png)  
