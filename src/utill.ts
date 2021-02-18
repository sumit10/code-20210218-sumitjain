import { Stats } from 'fs';
// import * as fs from 'fs/promises';
const fs = require("fs").promises;

export function getfileString(filepath:string):Promise<string>{
    return fs.readFile(filepath,{encoding:'utf-8'})
}


export function getColoumsFromCSVData(data:string,saprator:string):string[]{
    return data.slice(0,data.indexOf("\n")).split(saprator);
}

export function getTotalnumberOfRows(data:string):number{
    return data.split("\n").length - 1 ; 
}

export async function getFileSize(filepath:string):Promise<number>{
    let stats:Stats = await fs.stat(filepath);
    return stats.size;
}