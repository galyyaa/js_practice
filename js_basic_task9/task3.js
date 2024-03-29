// Використовуючи fetch та async await зробіть 2 функції, які використовують сайт https://jsonplaceholder.typicode.com/.
// Перша функція - приймає айді посту та виводить його body. Друга функція - за вашим бажанням.

async function getPostById(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    return data;
}

getPostById(2)
.then(data => {
    console.log(data.body);
})

//////////////////

async function printData() {
    const postData = await getPostById(100);
    console.log(postData);
}

printData();

