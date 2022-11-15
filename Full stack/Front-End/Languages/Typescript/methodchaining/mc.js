var Remote = /** @class */ (function () {
    function Remote() {
        this.color = 'red';
        this.buttons = 'on of buttonn 1234';
        this.battry = '2cells';
    }
    Remote.prototype.remotecolor = function () {
        console.log(this.color);
        return 'hello';
    };
    Remote.prototype.remoteButton = function () {
        console.log(this.buttons);
        return this;
    };
    Remote.prototype.remotebattry = function () {
        console.log(this.battry);
        return this;
    };
    return Remote;
}());
var myprojectorremote = new Remote();
console.log(myprojectorremote);
myprojectorremote.remoteButton().remotebattry().remotecolor();
