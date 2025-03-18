//import { ethers } from "ethers"
//import { abi, contractAddress } from "./constants"

//import { link } from "fs"

//import { link } from "fs"

//import { link } from "fs"

//import { link } from "fs"

const connectButton = document.getElementById("connect")
// const withdrawButton = document.getElementById("withdrawButton")
// const fundButton = document.getElementById("fundButton")
// const balanceButton = document.getElementById("balanceButton")

connectButton.onclick = connect
// withdrawButton.onclick = withdraw
// fundButton.onclick = fund
// balanceButton.onclick = getBalance

async function connect() {
  console.log("pressed")
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" })
    } catch (error) {
      console.log(error)
    }
    connectButton.innerHTML = "Connected"
    const accounts = await ethereum.request({ method: "eth_accounts" })
    console.log(accounts)
  } else {
    connectButton.innerHTML = "Please install MetaMask"
  }
}

// async function withdraw() {
//   console.log(`Withdrawing...`)
//   if (typeof window.ethereum !== "undefined") {
//     const provider = new ethers.BrowserProvider(window.ethereum)
//     await provider.send('eth_requestAccounts', [])
//     const signer = await provider.getSigner()
//     const contract = new ethers.Contract(contractAddress, abi, signer)
//     try {
//       console.log("Processing transaction...")
//       const transactionResponse = await contract.withdraw()
//       await transactionResponse.wait(1)
//       console.log("Done!")
//     } catch (error) {
//       console.log(error)
//     }
//   } else {
//     withdrawButton.innerHTML = "Please install MetaMask"
//   }
// }

// async function fund() {
//   const ethAmount = document.getElementById("ethAmount").value
//   console.log(`Funding with ${ethAmount}...`)
//   if (typeof window.ethereum !== "undefined") {
//     const provider = new ethers.BrowserProvider(window.ethereum)
//     await provider.send('eth_requestAccounts', [])
//     const signer = await provider.getSigner()
//     const contract = new ethers.Contract(contractAddress, abi, signer)
//     try {
//       const transactionResponse = await contract.fund({
//         value: ethers.parseEther(ethAmount),
//       })
//       await transactionResponse.wait(1)
//     } catch (error) {
//       console.log(error)
//     }
//   } else {
//     fundButton.innerHTML = "Please install MetaMask"
//   }
// }

// async function getBalance() {
//   if (typeof window.ethereum !== "undefined") {
//     const provider = new ethers.BrowserProvider(window.ethereum)
//     try {
//       const balance = await provider.getBalance(contractAddress)
//       console.log(ethers.formatEther(balance))
//     } catch (error) {
//       console.log(error)
//     }
//   } else {
//     balanceButton.innerHTML = "Please install MetaMask"
//   }
// }

function adjustHeaderLinksWhenWindowChangesSizes() {
  const github = document.querySelector('.links div #github');
  const linkedin = document.querySelector('.links div #linkedin');
  const kaggle = document.querySelector('.links div #kaggle');
  const linkDivs = document.querySelectorAll('.links div');
  const rightHeader = document.querySelector('.header .header-right');
  
  if(window.innerWidth <= 700) {
    github.src = "./images/github-logo-small.png";
    linkedin.src = "./images/linkedin-logo-small.png";
    kaggle.src = "./images/kaggle-logo-small.webp";

    linkedin.style.width = "100%";
    kaggle.style.width = "100%";
    kaggle.style.height = "100%";
    linkDivs[0].style.padding = "10px";
    linkDivs[2].style.marginBottom = "5px";
    linkDivs[2].style.marginLeft = "5px";
    rightHeader.style.top = "-8px"; 
  } else {
    github.src = "./images/github-logo.png";
    linkedin.src = "./images/linkedin-logo.svg";
    kaggle.src = "./images/kaggle-logo.png";

    linkedin.removeAttribute('style');
    kaggle.removeAttribute('style');
    linkDivs[0].removeAttribute('style');
    linkDivs[2].removeAttribute('style');
    rightHeader.removeAttribute('style');
  }
}

window.addEventListener('load', adjustHeaderLinksWhenWindowChangesSizes);
window.addEventListener('resize', adjustHeaderLinksWhenWindowChangesSizes);
