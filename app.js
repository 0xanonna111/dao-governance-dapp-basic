import { connectWallet } from "./web3.js";
import { createProposal, voteProposal, getProposals } from "./dao.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  const list = await getProposals();
  document.getElementById("output").innerText = JSON.stringify(list, null, 2);
};

document.getElementById("createBtn").onclick = async () => {
  const text = document.getElementById("proposalInput").value;
  await createProposal(text);
  alert("Proposal created");
};

document.getElementById("voteBtn").onclick = async () => {
  await voteProposal(0);
  alert("Vote sent");
};
