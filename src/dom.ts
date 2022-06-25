//const someElement = document.querySelector('#some-element') as HTMLInputElement;

//console.log("someElement" + someElement.value);


const someElement = document.querySelector('#some-element');

someElement.addEventListener('blur', (e) => {
    const target = e.target as HTMLInputElement;
    console.log("event", target.value);
});