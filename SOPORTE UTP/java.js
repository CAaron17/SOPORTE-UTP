const hamb = document.querySelector('.hamb');

hamb.addEventListener('click', () => {
    const links = document.querySelector('.links');
    links.classList.toggle('active');
})