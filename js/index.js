
const entries = document.querySelectorAll('p');
console.log(entries);

entries.forEach (entry => {

if (entry.includes('error')) {
entry.classList.add('error');
}

if (entry.includes('success')) {
entry.classList.add('success');
}

    });
