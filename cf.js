const colors = ['green', 'red', 'rgba(133,122,200', '#f15025']


const btn = document.querySelector('.btn');
const colorname = document.querySelector('.color_name');

btn.addEventListener('click', () => {

    const randomno = Math.floor(Math.random() * 4);

    document.body.style.backgroundColor = `${colors[randomno]}`
    colorname.textContent = colors[randomno]
})

