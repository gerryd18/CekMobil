import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit"; //button optional either button or submit type
}

export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer: string) => void;
}