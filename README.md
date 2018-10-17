# apply-template
[![Build Status](https://travis-ci.org/patrickleet/apply-template.svg?branch=master)](https://travis-ci.org/patrickleet/apply-template)
[![codecov](https://codecov.io/gh/patrickleet/meta-template/branch/master/graph/badge.svg)](https://codecov.io/gh/patrickleet/meta-template)
[![Greenkeeper badge](https://badges.greenkeeper.io/patrickleet/apply-template.svg)](https://greenkeeper.io/)

use an existing repository as a template

## Usage

Templates can contain variables, which the user will be prompted to fill when applying the template.

Example Template File
```
Hello, {[.NAME.]}
```

When applying the above template, the user would be prompted to provide a value for `NAME`

### Applying the template

```
> apply-template ./my-microservice ./new-microservice

Enter a value for 'MICROSERVICE_NAME': todolist-model-service
```

#### Specifying options
It's also possible to set variables when running the command
```
apply-template templates/test-template my-target-dir --FULL_NAME="Patrick Scott"
```


## Templates

* (meta-plugin)[https://github.com/patrickleet/meta-template-meta-plugin]

Please contibute more templates! It's super easy!
