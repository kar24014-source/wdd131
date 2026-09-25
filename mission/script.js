
const selectElem = document.querySelector('select');
const body = document.body;
const logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    if (selectElem.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
    }
}

                    