export interface ItemDTO {
    srno: number;
    itemCode: number;
    barcode: string;
    itemName: string;
    cost: number;
    price: number;
    createDate?: Date;
    updateDate?: Date;
}
