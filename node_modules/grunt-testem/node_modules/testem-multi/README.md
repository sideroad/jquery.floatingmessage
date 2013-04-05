#testem-multi
Run multiple testems, output to a single tap file.
##Install
```sh
npm install -g testem
npm install -g testem-multi
```

##Usage
1.Prepare testem-multi.json
```js
{
  "launch_in_ci" : [
    "chrome",
    "safari"
  ],
  "files" : [
    "examples/1.html",
    "examples/2.html"
  ]
}
```

2.Execute testem-multi
```sh
testem-multi
```

##Advance
1.Output only failed test
```js
{
  "output" : [
    "pass": false,
    "fail": true
  ],
  "files" : [
    "examples/1.html",
    "examples/2.html"
  ]
}
```

