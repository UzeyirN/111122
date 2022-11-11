let list=document.getElementById("list")
fetch('http://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then(data => {
 for (const post of data) {
     let div=`<div>${post.title}</div>`
     list.innerHTML+= div;
 }
 {
    let div=`<div>${post.id}</div>`
    list.innerHTML+= div;
 }
 
 }).catch(err=console.log(err))


 