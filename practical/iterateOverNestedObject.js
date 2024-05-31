let cars = {
    label: 'Autos',
    subs: [
        {
            label: 'SUVs',
            subs: []
        },
        {
            label: 'trucks',
            subs:[
                {
                    label: '2 wheel drive',
                    subs: []
                },
                {
                    label: '4 wheel drive',
                    subs: [
                        {
                            label: 'sedan car',
                            subs: [
                                {
                                    label: 'brand new car',
                                    subs: []
                                }
                            ]
                        }
                    ]

                }
            ]
        }
    ]
}

//iterate over object and show all the labels

function iterateOverCars(obj){
    let str = "";
    for(var key in obj){
        if(typeof(obj[key]) === 'object' && obj[key] !== null){
            iterateOverCars(obj[key])
        }else{
            console.log(key, obj[key])
        }
    }
}

iterateOverCars(cars);

//to show concatenatin of all labels

function iterateOvercarsForString(obj){
    let object = {str: ""};
    iterateObj(obj,object);
    return object.str;
}

function iterateObj(obj,strObj){
    for(key in obj){
        if(typeof(obj[key]) === "object"){
            iterateObj(obj[key],strObj);
        }else{
            strObj['str'] = strObj['str'] + obj[key];
        }
    }
}

console.log(iterateOvercarsForString(cars));
