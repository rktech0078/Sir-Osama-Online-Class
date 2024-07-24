function washing(){
    console.log("washing started...");
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("washing done...");
        },5000)
    }) 

}

function soaking(){
    console.log("soaking started...");
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("soaking done...")
        },5000)
    })
}

function drying (){
    console.log("drying started...");
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("drying done...")
        },5000)
    })
}

async function handleWashing(){
    try {
        const a = await washing()
        console.log(a);
        const b = await soaking()
        console.log(b);
        const c = await drying()
        console.log(c);
        
    } catch (error) {
        
    }finally{
        console.log("Light was gone...");
        
    }
}

handleWashing()