let wsavax = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade');
let wseth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let wsmatic = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
let wsgraph = new WebSocket('wss://stream.binance.com:9443/ws/grtusdt@trade');
let wshelium = new WebSocket('wss://stream.binance.com:9443/ws/hntusdt@trade');
let wscelo = new WebSocket('wss://stream.binance.com:9443/ws/celousdt@trade');
let wssol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let wssfp = new WebSocket('wss://stream.binance.com:9443/ws/sfpusdt@trade');
let wsdot = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade');
let wslink = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@trade');
let priceHolderAvax = document.getElementById('avax');
let priceHolderEth = document.getElementById('eth');
let priceHolderMatic = document.getElementById('matic');
let priceHolderGraph = document.getElementById('graph');
let priceHolderHelium = document.getElementById('helium');
let priceHolderCelo = document.getElementById('celo');
let priceHolderSolana = document.getElementById('sol');
let priceHolderSfp = document.getElementById('sfp');
let priceHolderDot = document.getElementById('dot');
let priceHolderLink = document.getElementById('link');
let lastPrice = null;


const callBinanceData = (wscoin, holderId) => {
    wscoin.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        let price = parseFloat(stockObject.p).toFixed(4);
        holderId.innerText = price;
        holderId.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
        lastPrice = price;
        if (holderId === priceHolderEth) {
            if (price < 4000) {
                console.log("yes");
            }
        }
    }
}

callBinanceData(wsavax, priceHolderAvax);
callBinanceData(wseth, priceHolderEth);
callBinanceData(wsmatic, priceHolderMatic);
callBinanceData(wsgraph, priceHolderGraph);
callBinanceData(wshelium, priceHolderHelium);
callBinanceData(wscelo, priceHolderCelo);
callBinanceData(wssol, priceHolderSolana);
callBinanceData(wssfp, priceHolderSfp);
callBinanceData(wsdot, priceHolderDot);
callBinanceData(wslink, priceHolderLink);

// const x=11;

// if(x > 10) {
//     document.getElementById('xyz').play();
// }