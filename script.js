async function getUser() {
    let res = await fetch('https://api.github.com/users/regularwave/repos');
    return await res.json();
}

async function renderUser() {
    let users = await getUser();
    Object.keys(users).forEach(repo => {
        if (users[repo].homepage !== null && users[repo].archived !== true && users[repo].name !== "regularwave.github.io" && users[repo].name !== "ns-controller") {

            var div = document.createElement('div');
            div.id = 'repocard';

            var row1Div = document.createElement('div');
            row1Div.id = 'row1Div';

            var repoNameDiv = document.createElement('div');
            repoNameDiv.id = 'repoNameDiv';

            var a = document.createElement('a');
            a.href = users[repo].homepage;
            a.innerHTML = users[repo].name;

            var tDiv = document.createElement('div');
            tDiv.id = 'tDiv';

            var tspan = document.createElement('span');
            tspan.innerHTML = '<i class="fa-solid fa-hourglass-half"></i> ' + users[repo].updated_at;

            var raDiv = document.createElement('div');
            raDiv.id = 'raDiv';

            var ra = document.createElement('a');
            ra.href = users[repo].html_url;
            ra.innerHTML = '<i class="fa-brands fa-github"></i>';

            var dspan = document.createElement('span');
            dspan.innerHTML = users[repo].description;

            document.querySelector('#projects').appendChild(div);
            div.appendChild(row1Div);
            row1Div.appendChild(repoNameDiv);
            repoNameDiv.appendChild(a);
            row1Div.appendChild(raDiv);
            raDiv.appendChild(ra);
            row1Div.appendChild(tDiv);
            tDiv.appendChild(tspan);
            div.appendChild(dspan);
        }
    })
}

renderUser();