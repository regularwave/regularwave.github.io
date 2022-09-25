async function getUser() {
    let res = await fetch('https://api.github.com/users/regularwave/repos');
    return await res.json();
}

async function renderUser() {
    let users = await getUser();
    Object.keys(users).forEach(repo => {
        if (users[repo].homepage !== null) {
            if (users[repo].archived !== true) {

                var div = document.createElement('div');
                div.id = 'repocard';

                var a = document.createElement('a');
                a.href = users[repo].homepage;
                a.innerHTML = users[repo].name;

                var span = document.createElement('span');
                span.innerHTML = users[repo].description;

                document.querySelector('#projects').appendChild(div);
                div.appendChild(a);
                div.appendChild(document.createElement('br'));
                div.appendChild(span);
            }
        }

    })
}

renderUser();