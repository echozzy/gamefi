import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";
import store from '../store'
// import { Dialog } from '../components/dialog/dialog';

import { ElMessage } from 'element-plus'

// 监听钱包状态(可能需要修改)

window.onload=function(){ 
    if(store.state.is_login){
        if (checkProvider()!==false) {
            window.ethereum.on("chainChanged", handleChainChanged);
            window.ethereum.on("accountsChanged", handleAccountsChanged);
        }
    }
}   

let currentAccount

// 网络更改
function handleChainChanged(_chainId) {
    console.log(_chainId);
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        ElMessage({message:"Please connect to MetaMask.",type:"error"})
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        ElMessage({message:"Login wallet succeeded.",type:"success"})
        // Do any other work!
    }
}
function startApp(provider) {
    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    if (provider !== window.ethereum) {
        ElMessage({message:"Do you have multiple wallets installed?",type:"error"})
        return false
    }
    return true
    // Access the decentralized web!
}

// 检测以太坊提供商 ( window.ethereum)
const checkProvider = async function () {
    const provider = await detectEthereumProvider();
    if (provider) {
      let res = startApp(provider); // Initialize your app
      if(res){
        return provider
      }else{
        return false
      }
    } else {
        ElMessage({message:"Please install MetaMask!",type:"error"})
        return false
    }
}

// 获取用户连接网络
const getChainId = async function () {
    if (checkProvider()===false) {
        ElMessage({message:"Please download and install metamask first",type:"error"})
        return
    }
    // 检测用户连接到哪个以太坊网络
    const chainId = await window.ethereum.request({
        method: "eth_chainId",
    });
    console.log(chainId);
    return chainId
}

// 连接钱包授权
const connectWallet = async function (callback) {
    if (checkProvider()===false) {
        // Dialog({title:"消息提示",content:"请先下载安装metamask"})
        ElMessage({message:"Please download and install metamask first",type:"error"})
        return
    }
    // ElAlert({title:"error alert",type:"error","show-icon":true,effect:"dark"})
    // ElMessage({message:"Connecting, please wait..."})
    await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log("Please connect to MetaMask.");
                ElMessage({message:"Please connect to MetaMask",type:"error"})
            } else {
                console.error(err);
            }
            if (typeof callback == 'function') {
                callback();
            }
        });
    return currentAccount
}

// 发送eth交易消息
const ethSend = async function (currentAccount, beneficiaryAddress, sumEth, callback) {
    if (checkProvider()===false) {
        ElMessage({message:"Please download and install metamask first",type:"error"})
        return
    }
    let sumEthStr = ethers.utils.parseEther(sumEth.toString())._hex;
    await window.ethereum
        .request({
            method: "eth_sendTransaction",
            params: [
                {
                    from: currentAccount,
                    to: beneficiaryAddress,
                    value: sumEthStr,
                },
            ],
        })
        .then(callback)
        .catch((error) => {
            console.log(error);
            return error
        });
}

// 交换币
const swap = function(Seller,price) {
    // let Seller = "0x84F0A3553f1bb79082C915F59595cB3F5b891621"
    const GoerliConAdr = "0xA30a4aDB70D1031bCDaea4D61f09F44fbFA8572f"
    const GoerliConAbi = [{"inputs":[{"internalType":"contract IERC20","name":"amsAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"valueEth","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueAms","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"fromAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"valueEth","type":"uint256"}],"name":"WithdrawEther","type":"event"},{"inputs":[],"name":"ETH_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BUY_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amsContract","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalanceEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"getLeftBuyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"seller","type":"address"}],"name":"getLeftSellAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"seller","type":"address"}],"name":"getSllerEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"seller","type":"address"}],"name":"swap","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    //调用连接钱包
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let signer = provider.getSigner()
        
    //签名合约
    let contract = new ethers.Contract(GoerliConAdr, GoerliConAbi, provider)
    let contractWithSigner = contract.connect(signer)
    
    //指定ETH购买数量
    let overRides = {
        value: ethers.utils.parseEther(price)
    }
    contractWithSigner.swap(Seller, overRides)
    ElMessage({message:"peration succeeded",type:"success"})
}

export {checkProvider,getChainId,connectWallet,ethSend,swap};