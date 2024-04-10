const lastOne = document.querySelector('.main-imagem1')

const myObserver = new IntersectionObserver ( (entries) => {
    console.log(entries)
})

myObserver.observe(lastOne)