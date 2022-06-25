//const someElement = document.querySelector('#some-element') as HTMLInputElement;
//console.log("someElement" + someElement.value);
var someElement = document.querySelector('#some-element');
someElement.addEventListener('blur', function (e) {
    var target = e.target;
    console.log("event", target.value);
});
