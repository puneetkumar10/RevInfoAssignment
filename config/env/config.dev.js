var devConfig = {
  database: {
    defaultRole: 'user'
  },
  debug: true,
  allowedOrigins: ['http://localhost:4200' , "*"],
  web3Provider:'https://ropsten.infura.io/v3/0b68e0892bed435b93af3d6c5a0df340',
  contractAddress : '0x64e62cbcab185ae9a80008def1c268705663b244',
  gasPriceInGwei: 25,
}
module.exports = devConfig;