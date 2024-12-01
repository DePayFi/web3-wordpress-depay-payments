const package = require('./package.json')
var exec = require('child_process').exec

exec(`git tag v${package.version}`, function(err, stdout, stderr){
  exec(`git push origin v${package.version}`, function(err, stdout, stderr){
  })
})
