import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const daoAddress = "0xYourDAOContract";
const abi = [];

export async function createProposal(text) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(daoAddress, abi, signer);
  await contract.createProposal(text);
}

export async function voteProposal(index) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(daoAddress, abi, signer);
  await contract.vote(index);
}

export async function getProposals() {
  const provider = getProvider();
  const contract = new ethers.Contract(daoAddress, abi, provider);
  return await contract.getProposals();
}
