const gallerySnapStart = document.getElementById('gallery-snap-start');
const gallerySnapCenter = document.getElementById('gallery-snap-center');
const gallerySnapEnd = document.getElementById('gallery-snap-end');

loadGalleries();

async function loadGalleries() {

    const UNSPLASH_ACCESS_KEY = 'UNSPLASH-ACCESS-KEY';
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch('https://api.unsplash.com/search/photos/?query=color&page=1&per_page=30' +
        `&client_id=${UNSPLASH_ACCESS_KEY}`, config);

    const data = await res.json();

    data?.results?.slice(0, 10).forEach(photo => {
        const item = getSnapStartItem();
        const img = getImg(photo);

        item.appendChild(img);
        gallerySnapStart.appendChild(item);
    });

    data?.results?.slice(10, 20).forEach(photo => {
        const item = getSnapCenterItem();
        const img = getImg(photo);

        item.appendChild(img);
        gallerySnapCenter.appendChild(item);
    });

    data?.results?.slice(20, 30).forEach(photo => {
        const item = getSnapEndItem();
        const img = getImg(photo);

        item.appendChild(img);
        gallerySnapEnd.appendChild(item);
    });
}

function getSnapStartItem() {
    const item = document.createElement('div');
    item.classList.add('gallery__item');
    item.classList.add('gallery__item--scroll-snap-start');
    return item;
}

function getSnapCenterItem() {
    const item = document.createElement('div');
    item.classList.add('gallery__item');
    item.classList.add('gallery__item--scroll-snap-center');
    return item;
}

function getSnapEndItem() {
    const item = document.createElement('div');
    item.classList.add('gallery__item');
    item.classList.add('gallery__item--scroll-snap-end');
    return item;
}

function getImg(photo) {
    const img = document.createElement('img')
    img.src = getPhotoUrl(photo);
    return img;
}

function getPhotoUrl(photo) {
    return `${photo.urls.raw}&fit=crop&w=200&h=100`;
}