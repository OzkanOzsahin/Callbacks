const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout (() => {
     let output = '';
     posts.forEach ((post, index) => {
     output += '<li>${post.title}</li>';

     });
     document.body.innerHTML = output;

    }, 1000);
}

function createPost(posts) {
    return new Promise ((resolve, reject)) => {
    setTimeout(() => {
posts.push(posts);

    }, 2000);
}
}