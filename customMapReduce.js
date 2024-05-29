Array.prototype.newMap = function(callBackFn){
    const outputs = [];
    for( let i = 0 ; i < this.length ; i++){
        outputs.push(callBackFn(this[i]))
    }
    return outputs;
}

Array.prototype.customReduce = function(fn,initial) {
    let arayEl = this;
    console.log(arayEl);
    let total = initial || 0;
    for(let i=0;i<arayEl.length;i++) {
        total = fn(total,arayEl[i]);
    }
    return total;
}
