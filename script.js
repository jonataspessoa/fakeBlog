//https://jsonplaceholder.typicode.com/posts

let area = document.querySelector('#postsArea');

async function showPosts() {

	area.innerHTML = 'Loading...';

	let response = await fetch('https://jsonplaceholder.typicode.com/posts')
	let json = await response.json()

	if(json.length > 0) {

		area.innerHTML = '';

		for(let i in json) {
			let postHTML = `<div><h2>${json[i].title}</h2>${json[i].body}<hr/></div>`;

			area.innerHTML += postHTML;
		}
	} else {
		area.innerHTML = 'Nenhum post';
	}

}

showPosts();

const newPost = async (title, body) => {
	let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
	{
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			title,
			body,
			userId: 17
		})
	})
	
	title = document.querySelector('#titlePost').value = '';
	body = document.querySelector('#bodyPost').value = '';

	showPosts();
}

document.querySelector('#sendPost').addEventListener('click', () => {
	let title = document.querySelector('#titlePost').value;
	let body = document.querySelector('#bodyPost').value;

	if(title && body) {
		newPost(title, body)
	} else {
		alert('Favor, preencher todos os campos!')
	}

})
