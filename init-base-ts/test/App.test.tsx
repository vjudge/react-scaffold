// // import React from 'react'
// import ReactDOM from 'react-dom'
// import App from '../src/App'
//
// import { ResClient } from '@co/res-client'
// import fs from 'fs'
//
// interface FailedRet {
//   code: number;
//   DESC: string;
//   msg: string;
// }
// interface CosProgress {
//   total: number;
//   loaded: number;
//   speed: number;
//   percent: number;
// }
// interface UploadRet {
//   code: number;
//   data: {
//     isExist: boolean;
//     resPath: string;
//   };
// }
// type ProcessCb = (data?: CosProgress) => void
//
// test('renders without crashing', async () => {
//   const resClient = new ResClient()
//   await resClient.init()
//   let processBarCb: ProcessCb = (pb?: CosProgress) => {
//     if (pb) {
//       this.setState({ progress: pb })
//     }
//   }
//   const fileName = 'architecture-diagram.jpeg'
//   const file: ArrayBuffer = genFile(fileName)
//   const firstRet: UploadRet|FailedRet = await resClient.upload(fileName, file, processBarCb)
//   firstRet.code === 0 ? testRet(firstRet as UploadRet) : testFailedRet(firstRet as FailedRet)
//   const secondRet: UploadRet|FailedRet = await resClient.upload(fileName, file, processBarCb)
//   secondRet.code === 0 ? testRet(secondRet as UploadRet) : testFailedRet(secondRet as FailedRet)
// });
//
// function testRet (ret: UploadRet, isExist = true) {
//   expect(ret.code).toBe(0)
//   expect(ret.data).toBeDefined()
//   expect(ret.data).not.toBeNull()
//   expect(ret.data.isExist).toBe(isExist)
//   expect(ret.data.resPath).toBeDefined()
//   expect(ret.data.resPath.length).toBeGreaterThan(0)
// }
//
// function testFailedRet (ret: FailedRet) {
//   expect(ret.code).not.toBe(0)
//   expect(ret.DESC).not.toBeUndefined()
//   expect(ret.msg).not.toBeUndefined()
// }
//
// function genFile (fileName: string): ArrayBuffer {
//   const ret: ArrayBuffer = fs.readFileSync(`${__dirname}/files/${fileName}`)
//   return ret
// }
