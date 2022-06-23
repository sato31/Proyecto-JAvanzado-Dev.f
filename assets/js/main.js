let URL = 'https://rickandmortyapi.com/api/character';
let currentPage = 1;
let totalPages= 0;
let startPagesRender = 0;
let endPagesRender = 0;
let blockPagesRender = 0; 
const divPagination = document.getElementById('pagination')

const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

const getPagination = ()=>{
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            totalPages = data.info.pages;
            blockPagesRender = totalPages/6;
            startPagesRender = blockPagesRender - (blockPagesRender-1);
            endPagesRender = blockPagesRender;
            renderPagination(startPagesRender, endPagesRender);
        })
        .catch(error => console.error(error));
}

getData();
getPagination();


const renderPagination = (startPage, endPage) => {
    cleanPages();
    /*##################### BUTTON START PAGES####################### */
    const divStartPages = document.createElement('div');
    divStartPages.classList.add('page')
    divStartPages.innerHTML = '<<';
    divStartPages.addEventListener('click', startPages);
    divPagination.appendChild(divStartPages);

    /*##################### BUTTON PREVIUS PAGES####################### */
    const divPrePage = document.createElement('div');
    divPrePage.classList.add('page')
    divPrePage.innerHTML = '<';
    divPrePage.addEventListener('click', prevPage);
    divPagination.appendChild(divPrePage);

     /*##################### NUMBER PAGES TO RENDER####################### */
    for (;startPage<= endPage; startPage++) {
        const divPage = document.createElement('div');
        (currentPage === startPage)? divPage.classList.add('page-active') : divPage.classList.add('page'); 
        divPage.innerHTML = startPage;
        divPage.dataset.page = startPage;
        divPage.addEventListener('click', selectPage);
        divPagination.appendChild(divPage);
    }

    /*##################### BUTTON NEXT PAGE####################### */
    const divNextPage = document.createElement('div');
    divNextPage.classList.add('page')
    divNextPage.innerHTML = '>';
    divNextPage.addEventListener('click', nextPage);
    divPagination.appendChild(divNextPage);

    /*##################### BUTTON END PAGES####################### */
    const divEndPages = document.createElement('div');
    divEndPages.classList.add('page')
    divEndPages.innerHTML = '>>';
    divEndPages.addEventListener('click', endPages);
    divPagination.appendChild(divEndPages);
}

const startPages =()=>{
    startPagesRender = blockPagesRender - (blockPagesRender-1);
            endPagesRender = blockPagesRender;
            currentPage = 1;
            renderPagination(startPagesRender, endPagesRender);
            removeCssPreviusPageActive();
            addCssNewPageActive();
}
const nextPage = () => {
    if(currentPage <totalPages){
        changePage(++currentPage);
        if(currentPage>endPagesRender){
            renderPagination(++startPagesRender,++endPagesRender);
        }
        removeCssPreviusPageActive();
        addCssNewPageActive();
    }
    
}

const selectPage = (event) => {
    const divPage = event.target;
    currentPage = divPage.dataset.page;
    changePage(currentPage);
    removeCssPreviusPageActive();
    addCssNewPageActive();
}

const changePage = (page) => {
    fetch(URL + '/?page=' + page)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    //currentPage = page;
}

const prevPage = () => {
    if(currentPage > 1){
        changePage(--currentPage);
        console.log(currentPage);
        if(currentPage<startPagesRender){
            renderPagination(--startPagesRender,--endPagesRender);
        }
    }
    removeCssPreviusPageActive();
    addCssNewPageActive();
}

const endPages =()=>{
    startPagesRender = totalPages -(blockPagesRender-1);
    endPagesRender = totalPages;
    currentPage = totalPages;
    renderPagination(startPagesRender, endPagesRender);
    removeCssPreviusPageActive();
    addCssNewPageActive();
}

const removeCssPreviusPageActive = ()=>{
    const previusPageActive = Array.from(divPagination.childNodes).find(page => page.classList.contains('page-active'));
    console.log(previusPageActive);
    previusPageActive.classList.remove('page-active');
    previusPageActive.classList.add('page');
}

const addCssNewPageActive = ()=>{
    console.log(currentPage);
    const newPageActive = Array.from(divPagination.childNodes).find(page => page.dataset.page == currentPage);
    console.log(newPageActive);
    newPageActive.classList.remove('page');
    newPageActive.classList.add('page-active');
}

const cleanPages =()=>{
    divPagination.innerHTML = '';
}