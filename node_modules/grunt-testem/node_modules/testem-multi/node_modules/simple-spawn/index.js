(function(exports){
  var spawn = require('child_process').spawn;

  exports.spawn = function( cmd, options ){
    var child,
        cmds = cmd.split(' '),
        platform = process.platform,
        base = platform === 'win32' ? 'cmd' : cmds.shift();

    if(platform === 'win32'){
      cmds.unshift('/c');
    }
    return spawn(base, cmds, options);
  };

})(exports);