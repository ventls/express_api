//获取随机字符串
function getRandomWorld(num = 1){
    const strArr = []
    if(num > 0){
        for(let i=0; i < num; i++){
            const RandomStr = String.fromCodePoint(Math.round(Math.random() * 10000) + 19968);
            strArr.push(RandomStr)
        }
    }
    return strArr.join("")
}

//生成UUID
function generateUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


//获取唯一的UUID
function getRandomid(array){
    const randomUUID = generateUUID()
    if(array.includes(randomUUID)){
        getRandomid()
    }
    else{
        return randomUUID
    }
}

function getUserList(length = 10){
    const UserList = new Array(length)
    .join('.')
    .split('.')
    .map((item,index,array) => {
        let userObj = {
            name: getRandomWorld(3),
            uuid: getRandomid(array)
        }
        return userObj
    })
    return UserList
}

export default getUserList