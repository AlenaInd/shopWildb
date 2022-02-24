const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')
    
    const getData = () => {
        fetch('/db/db.json')
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                localStorage.setItem('dataBase', JSON.stringify(data));
                console.log(localStorage.getItem('dataBase'));
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })

    localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]))

    const goods = JSON.parse(localStorage.getItem('goods'));
    console.log(goods);

    localStorage.removeItem('goods');
    console.log(localStorage.getItem('goods'));
}

getGoods()