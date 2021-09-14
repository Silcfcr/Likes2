        // Attempt 1
// const like1 = document.querySelector("#like1");
// const like2 = document.querySelector("#like2");
// const like2 = document.querySelector("#like3");
// console.log(like1);
// console.log(like2);
// console.log(like3);

// let likes1 = 1;
// let likes2 = 1;
// let likes3 =1;


// function addLike1() {
//     console.log('Workink1');
//     like1.innerText = `${likes1} likes`;
//     likes1 ++;
// }

// function addLike2() {
//     console.log('Workink1');
//     like2.innerText = `${likes2} likes`;
//     likes2 ++;
// }

// function addLike3() {
//     console.log('Workink1');
//     like3.innerText = `${likes3} likes`;
//     likes3 ++;
// }


        // Attempt 2 Working

// let number1 = document.querySelector("#like1");
// let likes1 = 4;

// function addLike1() {
//     number1.innerText = ` ${likes1} likes`
//     likes1 ++;
// }

// let number2 = document.querySelector("#like2");
// let likes2 = 4;

// function addLike2() {
//     number2.innerText = ` ${likes2} likes`
//     likes2 ++;
// }

// let number3 = document.querySelector("#like3");
// let likes3 = 4;

// function addLike3() {
//     number3.innerText = ` ${likes3} likes`
//     likes3 ++;
// }

// Attempt 3

// let AllLikes = document.querySelectorAll("#like");
let btn = document.querySelectorAll("#button");
console.log(btn);




for (let i=0; i<btn.length; i++) {
        btn[i].addEventListener("click", addLike);

        let likeNumber = 1;
        function addLike(event) {
                let entireElement = event.target.closest('div');
                let currentItem = entireElement.querySelector('#like');
                currentItem.innerText = `${likeNumber} likes`;
                likeNumber = likeNumber+1;
}
}