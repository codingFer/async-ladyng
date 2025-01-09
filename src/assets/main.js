const url = 'https://facebook-events2.p.rapidapi.com/search';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'ea94ef023emsh3095880e82fc99ep13b8fdjsn023759d5843e',
		'x-rapidapi-host': 'facebook-events2.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(
        {
            "searchTerm": "cochabamba",
            "cursor": null,
            "locationId": null
        }
    )
};
const content = null || document.getElementById('content')

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi) {
    const response = await fetch(url, options);
    console.log('test0');
    console.log(response);
    console.log('test0');
    const data = await response.text();
    return JSON.parse(data);
}

console.log('test2');
(async () => {
    try {
        const events = await fetchData(url);
        console.log('test');
        console.log(events);
        console.log('test');
        let view = `
            ${events.events.map(event => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${event?.image_url}" alt="${event?.name}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="inset-0"></span>
                            ${event?.name}
                        </h3>
                        <a target="_blank" href="${event?.url}">more information</a>
                    </div>
                </div>
            `)}
            
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
        content.innerHTML = `We have problems with the request, we have the next error: ${error}`;
    }
})();