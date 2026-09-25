
const selectElem = document.querySelector('select');
const logo = document.querySelector('img');
const body = document.body;
const university = document.querySelector('.university');
const line = document.querySelector('.line');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    const current = selectElem.value;

    if (current === 'dark') {
        body.style.backgroundColor = '#111';
        body.style.color = '#f5f5f5';
        body.style.borderColor = '#444';
        university.style.color = '#dbeafe';
        line.style.borderTopColor = '#444';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
    } else {
        body.style.backgroundColor = '#fff';
        body.style.color = '#111';
        body.style.borderColor = '#bbb';
        university.style.color = '#1676bd';
        line.style.borderTopColor = '#ddd';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
    }
}

                    