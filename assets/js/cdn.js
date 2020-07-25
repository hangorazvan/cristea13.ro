function LoadScripts(async) {
    if (async === undefined) {
        async = false;
    }
    var scripts = [];
    var _scripts = [
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js",
            "../assets/js/script.js"
        ];
    if (async) {
        LoadScriptsAsync(_scripts, scripts);
    } else {
        LoadScriptsSync(_scripts, scripts);
    }
}
function LoadScriptsSync(_scripts, scripts) {
    var x = 0;
    var loopArray = function(_scripts, scripts) {
        loadScript(_scripts[x], scripts[x], function() {
            x++; if (x < _scripts.length) {
                loopArray(_scripts, scripts);   
            }
        }); 
    };
    loopArray(_scripts, scripts);      
}
function LoadScriptsAsync(_scripts, scripts) {
    for (var i = 0; i < _scripts.length; i++) {
        loadScript(_scripts[i], scripts[i], function() {});
    }
}
function loadScript(src, script, callback) {
    script = document.createElement("script");
    script.onload = function() {
        callback();
    };
    script.src = src;
    document.getElementsByTagName("head")[0].appendChild(script);
}
LoadScripts();