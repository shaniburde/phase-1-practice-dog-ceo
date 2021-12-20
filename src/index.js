console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
        randomDogs = data;


        randomDogs.message.forEach(link => {
            const img = document.createElement('img');
            img.src = link;
            document.querySelector('#dog-image-container').appendChild(img)
        })
        
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        breedList = data;
    //Object.keys ----> returns the data as an array
        Object.keys(breedList.message).forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            document.querySelector('#dog-breeds').appendChild(li)
        
        })
        


    })


         
    })








})