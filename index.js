function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return console.log;
}

function returnsAnAnonymousFunction(){
    return function (a = 'gooby snoobert'){
        return `You're just a big ${a}`;
    }
}