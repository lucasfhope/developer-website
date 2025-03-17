//import { ethers } from "ethers"
//import { abi, contractAddress } from "./constants"

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

function adjustHeaderWidths() {
  const header = document.querySelector('header .header');
  const headerLeft = document.querySelector('.header-left');
  const headerRight = document.querySelector('.header-right');

  if (header && headerLeft && headerRight) {
    const headerWidth = header.offsetWidth;
    const headerRightWidth = headerRight.offsetWidth;

    let availableWidth = headerWidth - headerRightWidth;

    if (availableWidth < 0) {
      availableWidth = 0;
    }

    headerLeft.style.maxWidth = availableWidth + 'px';
  }
}

// Call the function on page load and resize
window.addEventListener('load', adjustHeaderWidths);
window.addEventListener('resize', adjustHeaderWidths);
