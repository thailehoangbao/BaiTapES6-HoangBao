import {ListChousen} from '../models/ListChosen.js';
import {renderNapbills,showItems} from '../utils/callData.js';
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