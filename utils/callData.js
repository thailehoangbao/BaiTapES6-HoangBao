let listData = new ListChousen();

fetch('/data/Data.json')
    .then(response => response.json()) // Chuyển đổi dữ liệu thành đối tượng JavaScript
    .then(data => {
        // Dữ liệu đã được lấy
        listData.arrNapbills = data.navPills;
        listData.tabPanes = data.tabPanes;
        renderNapbills(listData.arrNapbills);
        showItems('tabTopClothes',listData,'topclothes','handbag__items_1');
        showItems('tabBotClothes',listData,'botclothes','feet__items_1');
        showItems('tabShoes',listData,'shoes','feet__items_2');
        showItems('tabHandBags',listData,'handbags','handbag__items_2');
        showItems('tabNecklaces',listData,'necklaces','necklace');
        showItems('tabHairStyle',listData,'hairstyle','hairstyle__items');
        showItems('tabBackground',listData,'background','background');
    })
    .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error:', error);
    });



const renderNapbills = (arrNapbills) => {
    let content = ``;
    arrNapbills.forEach((item) => {
        content += `
        <li class="ml-3 ">
            <button class="btn btn-outline-info" id='${item.tabName}'>${item.showName}</button>
        </li>
        `;
    })
    document.querySelector('#nav-pills-items').innerHTML = content;
};


const renderNewArrayItems = (findNewArrayItems) => {
    let content = ``;
    findNewArrayItems.forEach((item) => {
        content += `
        <div class="col-3 mb-2">
            <div class="card bg-dark text-white">
                <img class="card-img-top img-fluid" src="${item.imgSrc_jpg}" alt="" style="width: 200px;height: 210px">
                <div class="card-body p-0">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <button class="btn btn-outline-info w-100" id='${item.id}' onclick='clickItems(${item.id})'>Thử đồ</button>
                </div>
            </div>
        </div>`;
    });
    document.querySelector('#content-items').innerHTML = content;
};

let showItems = (idElement,list,itemsShow,idElementShow) => {
    document.querySelector(`#${idElement}`).onclick = function (e) {
        let newArrListItems = list.findNewArrayItems(list.tabPanes,itemsShow);
        renderNewArrayItems(list.findNewArrayItems(list.tabPanes,itemsShow));
        newArrListItems.forEach((item) => {
            document.getElementById(`${item.id}`).onclick = function () {
                document.querySelector(`#${idElementShow}`).style.background = `url('${item.imgSrc_png}')`;
            };
        })
    };
};

// export { callData };


