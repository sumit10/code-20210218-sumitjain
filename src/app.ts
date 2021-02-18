import * as utill from "./utill";

const SAPRATOR = ";";

async function run(){
    let [filepath] = process.argv.slice(2);
    if(!filepath){
        return console.log("Kindly provide filepath as first argument");
    }
    try{
        let data:string = await utill.getfileString(filepath);
        console.log("1. Columns in csv ->",utill.getColoumsFromCSVData(data,SAPRATOR).join(' , '));
        console.log("2. Total size in bytes of the file ->",await utill.getFileSize(filepath));
        console.log("3. Total number of rows ->",utill.getTotalnumberOfRows(data));
    }catch(err){
        console.log(err);
    }
}


run();