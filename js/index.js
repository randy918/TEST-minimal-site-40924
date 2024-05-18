
const entries = document.querySelectorAll('p');

console.log(entries[0]);

entries.forEach(entry => {

if (entry.textContent.includes('error')) {
entry.classList.add('error');
}

if (entry.textContent.includes('success')) {
entry.classList.add('success');
}

    });
x.classList.add('');