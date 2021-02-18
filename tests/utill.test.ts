import { expect } from 'chai';
import 'mocha';

import * as utill from '../src/utill';

describe('File data', async () => {

  it('Checking file data', async () => {
    let result = await utill.getfileString("./tests/input/test.txt");
    expect(result).equal("test");
  }); 

  it('throw error on file not found or wrong input', async () => {
    try{
      await utill.getfileString("./tests/input/nofile.txt");
    }catch(err){
      expect(err instanceof Error).equal(true);
    }
  }); 

});

describe('Csv data processing', async () => {
  let fileData:string = "";
  beforeEach(async ()=>{
    fileData = await utill.getfileString("./tests/input/input.csv");
    return "done";
  });
  describe('Csv Column processing',  () => {
    it('Checking csv Coloums',  () => {
      let result:string[] = utill.getColoumsFromCSVData(fileData,',');
      expect(result.length).equal(2);
      expect(result[0]).equal('name');
      expect(result[1]).equal('count');
    }); 
  });

  describe('Csv row count',  () => {
    it('Checking csv row count',  () => {
      let result:number = utill.getTotalnumberOfRows(fileData);
      expect(result).equal(1);
    }); 
  });
});

describe('File size', async () => {

  it('Checking file size of txt', async () => {
    let result = await utill.getFileSize("./tests/input/test.txt");
    expect(result).equal(4);
  }); 

  it('Checking file size of csv', async () => {
    let result = await utill.getFileSize("./tests/input/input.csv");
    expect(result).equal(17);
  }); 

  it('throw error on file not found or wrong input', async () => {
    try{
      await utill.getFileSize("./tests/input/nofile.txt");
    }catch(err){
      expect(err instanceof Error).equal(true);
    }
  }); 

});