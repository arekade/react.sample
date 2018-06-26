// Service to fetch data from endpoint
export default function() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
}