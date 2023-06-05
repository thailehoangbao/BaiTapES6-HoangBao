let listData = new ListChousen();

fetch('/data/Data.json')
    .then(response => response.json()) // Chuyển đổi dữ liệu thành đối tượng JavaScript
    .then(data => {
        // Dữ liệu đã được lấy
        console.log(data);
        listData.arrNapbills = data.navPills;
        listData.tabPanes = data.tabPanes;
        console.log(listData.tabPanes);
        renderNapbills(listData.arrNapbills);
        document.querySelector('#tabTopClothes').onclick = function (e) {
            let newArrListItems = listData.findNewArrayItems(listData.tabPanes,'topclothes');
            renderNewArrayItems(listData.findNewArrayItems(listData.tabPanes,'topclothes'));
            newArrListItems.forEach((item) => {
                document.getElementById(`${item.id}`).onclick = function () {
                    document.querySelector('#handbag__items_1').style.background = `url('${item.imgSrc_png}')`;
                };
            })
        };

        document.querySelector('#tabBotClothes').onclick = function (e) {
            let newArrListItems = listData.findNewArrayItems(listData.tabPanes,'botclothes');
            renderNewArrayItems(listData.findNewArrayItems(listData.tabPanes,'botclothes'));
            newArrListItems.forEach((item) => {
                document.getElementById(`${item.id}`).onclick = function () {
                    document.querySelector('#feet__items_1').style.background = `url('${item.imgSrc_png}')`;
                };
            })
        };

        document.querySelector('#tabShoes').onclick = function (e) {
            let newArrListItems = listData.findNewArrayItems(listData.tabPanes,'shoes');
            renderNewArrayItems(listData.findNewArrayItems(listData.tabPanes,'shoes'));
            newArrListItems.forEach((item) => {
                document.getElementById(`${item.id}`).onclick = function () {
                    document.querySelector('#feet__items_2').style.background = `url('${item.imgSrc_png}')`;
                };
            })
        };

        document.querySelector('#tabHandBags').onclick = function (e) {
            let newArrListItems = listData.findNewArrayItems(listData.tabPanes,'handbags');
            renderNewArrayItems(listData.findNewArrayItems(listData.tabPanes,'handbags'));
            newArrListItems.forEach((item) => {
                document.getElementById(`${item.id}`).onclick = function () {
                    document.querySelector('#handbag__items_2').style.background = `url('${item.imgSrc_png}')`;
                };
            })
        };

        document.querySelector('#tabNecklaces').onclick = function (e) {
            let newArrListItems = listData.findNewArrayItems(listData.tabPanes,'necklaces');
            renderNewArrayItems(listData.findNewArrayItems(listData.tabPanes,'necklaces'));
            newArrListItems.forEach((item) => {
                document.getElementById(`${item.id}`).onclick = function () {
                    document.querySelector('#necklace').style.background = `url('${item.imgSrc_png}')`;
                };
            })
        };

        document.querySelector('#tabHairStyle').onclick = function (e) {
            let newArrListItems = listData.findNewArrayItems(listData.tabPanes,'hairstyle');
            renderNewArrayItems(listData.findNewArrayItems(listData.tabPanes,'hairstyle'));
            newArrListItems.forEach((item) => {
                document.getElementById(`${item.id}`).onclick = function () {
                    document.querySelector('#hairstyle__items').style.background = `url('${item.imgSrc_png}')`;
                };
            })
        };

        document.querySelector('#tabBackground').onclick = function (e) {
            let newArrListItems = listData.findNewArrayItems(listData.tabPanes,'background');
            renderNewArrayItems(listData.findNewArrayItems(listData.tabPanes,'background'));
            newArrListItems.forEach((item) => {
                document.getElementById(`${item.id}`).onclick = function () {
                    document.querySelector('#background').style.background = `url('${item.imgSrc_png}')`;
                };
            })
        };
        // document.querySelector('#necklace').style.background = "url('../assets/images/necklaces/necklace2.png')";
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

// export { callData };


