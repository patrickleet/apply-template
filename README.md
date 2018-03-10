[![Build Status](https://travis-ci.org/patrickleet/meta-template.svg?branch=master)](https://travis-ci.org/patrickleet/meta-template)

# meta-template

[![Greenkeeper badge](https://badges.greenkeeper.io/patrickleet/meta-template.svg)](https://greenkeeper.io/)
template plugin for meta

## Usage

### Create a template from a git repository

```
meta project add templates/meta-plugin git@github.com:patrickleet/meta-template-meta-plugin.git
```

Templates can contain variables, which the user will be prompted to fill when applying the template.

Example Template File
```
Hello, {[.NAME.]}
```

When applying the above template, the user would be prompted to provide a value for `NAME`

### Applying the template

```
> meta project add plugins/meta-docker-compose git@github.com:patrickleet/meta-docker-compose.git
> meta template apply templates/meta-plugin plugins/meta-docker-compose

Enter a value for 'PLUGIN_NAME': docker-compose
Enter a value for 'FULL_NAME': Patrick Scott
Enter a value for 'GITHUB_USERNAME': patrickleet
Enter a value for 'GITHUB_EMAIL': pat@patscott.io
```

#### Specifying options
It's also possible to set variables when running the command
```
meta template apply templates/test-template --FULL_NAME="Patrick Scott"
```


## Templates

* (meta-plugin)[https://github.com/patrickleet/meta-template-meta-plugin]

Please contibute more templates! It's super easy!
