var dhanushPromise = new Promise(function (resl, notresol) {
    // resl('hello im sresolved')
    notresol('not resolved');
});
dhanushPromise.then(function (a) { console.log(a); });
dhanushPromise["catch"](function (a) { console.log(a); });
