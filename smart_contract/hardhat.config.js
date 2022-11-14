// https://eth-goerli.g.alchemy.com/v2/eLAumq6hOOGcUIGd-cjiWxjemj_DeDhc

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity : '0.8.0',
  networks : {
    goerli : {
      url : 'https://eth-goerli.g.alchemy.com/v2/eLAumq6hOOGcUIGd-cjiWxjemj_DeDhc',
    accounts : ['46a99e8c072294e4dc017acbb1968759f2858e25cb6872e7a257590fd5390236']
  }
  }
}