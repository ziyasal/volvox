# volvox.js - Self announcing services
![](https://avatars3.githubusercontent.com/u/16361502?v=3&s=200)  

Volvox.js simple framework with powerful service discovery using [Consul](https://www.consul.io/) or [ETCD](https://coreos.com/etcd/)

[![Build Status](https://travis-ci.org/volvoxjs/volvox-core.svg?branch=master)](https://travis-ci.org/volvoxjs/volvox-core) [![Coverage Status](https://coveralls.io/repos/github/microphonejs/microphone-core/badge.svg?branch=master)](https://coveralls.io/github/microphonejs/microphone-core?branch=master)

> Just develop your app using your favorite framework Express, Hapi, Restify etc then **Volvox.js** takes care of the rest. It starts application on available port registers application to **[Consul](https://www.consul.io/)** or **[ETCD](https://coreos.com/etcd/)** and starts **_worker_** that polls for critical instances and deregister them. **volvox.js** provides **/status** endpoint for [Consul Health Checks](https://www.consul.io/intro/getting-started/checks.html). Also, it provides client to select random instance to communicate.  

![](https://raw.githubusercontent.com/microphonejs/microphone-core/master/misc/microphone-consul-fabio.png)  

### Here is sample code shows [express.js](https://expressjs.com/) and [Consul](https://www.consul.io/) integration

```js
import Volvox from 'volvox-core';
import vconsul from 'volvox-consul';
import vexpress from 'volvox-express';

import express from 'express'

async function main() {
    let server = express();

    server.get('/customers', (req, res) => {
       res.send({
            customerName: "Test customer",
            customerId: 666
        });
    });

    let volvox = new Volvox(vconsul(), vexpress());
    await volvox.bootstrap(server, "customers", "v1");
}

main();
```
