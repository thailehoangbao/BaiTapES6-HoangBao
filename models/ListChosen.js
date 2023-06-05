function ListChousen() {
    this.arrNapbills = [];
    this.arrtabPanes = [];

    this.findNewArrayItems = (arr,type) => {
        let newArrItem = [];
        arr.forEach((item, i) => {
            if (item.type === type) {
                newArrItem.push(item);
            };
        })
        return newArrItem;
    };
};