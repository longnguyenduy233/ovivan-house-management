export interface HouseModel {
    id: number;
    model: string;
    media: HouseModelMedia;
}

export interface HouseModelMedia {
    title: string;
    description: string;
    banner: string;
    video: string;
}

export interface House {
    id: number;
    houseNumber: string;
    price: number;
    blockNumber: string;
    landNumber: string;
    houseType: string;
    model?: HouseModel;
    status: string;
}
