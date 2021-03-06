'use strict';

// data
let hdData = require("./data").hd
let hdIndex = hdData.index
const mnemonic = hdData.mnemonic

//  import
let hdAddress = require("../index").HD(mnemonic)


// valid
let addrValid = require("./benchmark/address.valid")


let getAddressTest = async (coinSymbol, network) => {
    let chain = hdAddress[coinSymbol]
    let {address} = await chain.getAddress(hdIndex)
    let validAddress = addrValid(coinSymbol, address)
    console.assert(validAddress, `address invalid : ${coinSymbol}  ${address}`)
    console.assert(address == hdData[coinSymbol], `address is diff: ${coinSymbol}   ${address}`)
}

describe("getAddress", () => {
    it("BTC getAddress", async () => {
        let ok =  getAddressTest("BTC")
    })


    it("BTC TEST getAddress", async () => {
        let ok =  getAddressTest("BTC_TEST")
    })

    it("BCH getAddress", async () => {
        let ok =  getAddressTest("BCH")
    })


    it("LTC getAddress", async () => {
        let ok =  getAddressTest("LTC")
    })


    it("ETH getCoinAddressKeyPair ", async () => {
        let ok =  getAddressTest("ETH")

    })


    it("TRX getCoinAddressKeyPair", async () => {
        let ok = await getAddressTest("TRX")
    })

})

