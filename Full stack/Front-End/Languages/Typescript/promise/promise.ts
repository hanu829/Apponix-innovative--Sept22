var dhanushPromise=new Promise((resl,notresol)=>{
    // resl('hello im resolved')
    notresol('not resolved')
 })
 dhanushPromise.then((a)=>{console.log(a)})
 dhanushPromise.catch((a)=>{console.log(a)})