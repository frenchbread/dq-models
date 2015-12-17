# dq-models

Mongoose extension with schema handler.

### Insalling manually:

```
$ npm i git+https://frenchbread:pass@github.com/frenchbread/dq-models.git
```

### Update geo db under its `node_modules`:

```
$ npm run-script updatedb
```

### Models available:

1. `Account`
2. `Article`
3. `Project`
4. `Watcher`
5. `Task`
6. `Hour`
7. `Booking`


```javascript
var M = require('dq-models');

var Account = M.model('Account');

var Article = M.model('Article');

var Project = M.model('Project');

var Watcher = M.model('Watcher');

var Task = M.model('Task');

var Hour = M.model('Hour');

var Booking = M.model('Booking');

```

### Init watcher

```javascript
// watcher
app.use(function (req, res, next) {
    Watcher.watch('project_name', req);
    next();
});
```
-
> Coded by DM.
