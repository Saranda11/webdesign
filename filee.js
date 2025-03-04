fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'Titulli i perditsuar',
        body:'Permbajtja e perditsuar',
        userId:1
    } )
})
.then(response => response.json()) 
.then(data => console.log('Te dhenat jan perditsuar',data))
.catch(error => console.error('Gabimm', error)) ;


