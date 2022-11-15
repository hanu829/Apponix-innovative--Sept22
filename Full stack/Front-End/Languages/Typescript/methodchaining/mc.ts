class Remote{
    color:string
    buttons: string
    battry:string
    constructor(){
        this.color='red'
        this.buttons='on of buttonn 1234'
        this.battry='2cells'
    }
    remotecolor(){
        console.log(this.color)
        return 'hello'
    }
    remoteButton(){
        console.log(this.buttons)
        return this
    }
    remotebattry(){
        console.log(this.battry)
        return this
    }
}

var myprojectorremote=new Remote()
console.log(myprojectorremote)
myprojectorremote.remoteButton().remotebattry().remotecolor()