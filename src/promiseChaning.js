let baseAPI = 'https://jsonplaceholder.typicode.com';

let promiseChaining = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Fetch API after 2s');
        resolve('start');
    }, 2000)
})
.then((mess) => {
    if(mess === 'start'){
        let postId = 1;
        return postId;
    }
})
.then((postID) => {
    const postData = {
        id: postID,
        title: 'How to install webpack',
        body: 'checking document',
        userId: 1
    };
    fetch(baseAPI + '/posts/' + postID,
    {
        method: 'PUT',
        header: {
            'Content-type' : 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.id === postID){
            document.getElementById('post-title').innerHTML = postData.title;
        }
       
    })
});