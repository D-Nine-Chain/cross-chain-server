export const simpleTransferMetadata = {
   "contractName": "SimpleTransfer",
   "abi": [
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "usdtContract",
               "type": "address"
            }
         ],
         "stateMutability": "payable",
         "type": "constructor"
      },
      {
         "inputs": [],
         "name": "ROLE_CONTROLLER",
         "outputs": [
            {
               "internalType": "string",
               "name": "",
               "type": "string"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "admin",
         "outputs": [
            {
               "internalType": "address",
               "name": "",
               "type": "address"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "controller",
         "outputs": [
            {
               "internalType": "address",
               "name": "",
               "type": "address"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [],
         "name": "usdtContractAddress",
         "outputs": [
            {
               "internalType": "contract ITRC20",
               "name": "",
               "type": "address"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "",
               "type": "address"
            }
         ],
         "name": "userTransactionNonce",
         "outputs": [
            {
               "internalType": "uint64",
               "name": "",
               "type": "uint64"
            }
         ],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "newUSDTContract",
               "type": "address"
            }
         ],
         "name": "switchUSDTContract",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "userAddress",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
            }
         ],
         "name": "receiveUSDT",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "userAddress",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
            }
         ],
         "name": "sendUSDT",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "user",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
            }
         ],
         "name": "checkAllowance",
         "outputs": [],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "user",
               "type": "address"
            },
            {
               "internalType": "uint256",
               "name": "amount",
               "type": "uint256"
            }
         ],
         "name": "checkBalance",
         "outputs": [],
         "stateMutability": "view",
         "type": "function"
      },
      {
         "inputs": [
            {
               "internalType": "address",
               "name": "newController",
               "type": "address"
            }
         ],
         "name": "changeController",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
      }
   ],
   "bytecode": "0x6080604052604051610f29380380610f2983398181016040528101906100259190610109565b3360025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610134565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100d8826100af565b9050919050565b6100e8816100ce565b81146100f2575f80fd5b50565b5f81519050610103816100df565b92915050565b5f6020828403121561011e5761011d6100ab565b5b5f61012b848285016100f5565b91505092915050565b610de8806101415f395ff3fe608060405234801561000f575f80fd5b50600436106100a7575f3560e01c80634d7b9bd51161006f5780634d7b9bd51461014d5780635b4df1ca1461016957806367afe31b1461018757806386e83c68146101a3578063f77c4791146101bf578063f851a440146101dd576100a7565b80630db62ae4146100ab5780631739c155146100c7578063388c54de146100f75780633cebb823146101155780633daba0d714610131575b5f80fd5b6100c560048036038101906100c0919061095f565b6101fb565b005b6100e160048036038101906100dc919061099d565b6102ae565b6040516100ee91906109ea565b60405180910390f35b6100ff6102d1565b60405161010c9190610a5e565b60405180910390f35b61012f600480360381019061012a919061099d565b6102f6565b005b61014b6004803603810190610146919061095f565b6103ca565b005b6101676004803603810190610162919061095f565b6104b0565b005b610171610594565b60405161017e9190610b01565b60405180910390f35b6101a1600480360381019061019c919061095f565b6105cd565b005b6101bd60048036038101906101b8919061099d565b61066c565b005b6101c7610740565b6040516101d49190610b30565b60405180910390f35b6101e5610765565b6040516101f29190610b30565b60405180910390f35b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461028b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028290610b93565b60405180910390fd5b61029583836104b0565b61029f83836103ca565b6102a9838361078a565b505050565b5f602052805f5260405f205f915054906101000a900467ffffffffffffffff1681565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037d90610b93565b60405180910390fd5b8160025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84306040518363ffffffff1660e01b8152600401610427929190610bb1565b602060405180830381865afa158015610442573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104669190610bec565b9050808211156104ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a290610c61565b60405180910390fd5b505050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b815260040161050b9190610b30565b602060405180830381865afa158015610526573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061054a9190610bec565b90508082111561058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058690610cc9565b60405180910390fd5b505050565b6040518060400160405280600a81526020017f636f6e74726f6c6c65720000000000000000000000000000000000000000000081525081565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461065d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065490610b93565b60405180910390fd5b610667838361082d565b505050565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f390610b93565b60405180910390fd5b8160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330846040518463ffffffff1660e01b81526004016107e893929190610cf6565b6020604051808303815f875af1158015610804573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108289190610d60565b505050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610889929190610d8b565b6020604051808303815f875af11580156108a5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108c99190610d60565b505050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6108fb826108d2565b9050919050565b61090b816108f1565b8114610915575f80fd5b50565b5f8135905061092681610902565b92915050565b5f819050919050565b61093e8161092c565b8114610948575f80fd5b50565b5f8135905061095981610935565b92915050565b5f8060408385031215610975576109746108ce565b5b5f61098285828601610918565b92505060206109938582860161094b565b9150509250929050565b5f602082840312156109b2576109b16108ce565b5b5f6109bf84828501610918565b91505092915050565b5f67ffffffffffffffff82169050919050565b6109e4816109c8565b82525050565b5f6020820190506109fd5f8301846109db565b92915050565b5f819050919050565b5f610a26610a21610a1c846108d2565b610a03565b6108d2565b9050919050565b5f610a3782610a0c565b9050919050565b5f610a4882610a2d565b9050919050565b610a5881610a3e565b82525050565b5f602082019050610a715f830184610a4f565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610aae578082015181840152602081019050610a93565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610ad382610a77565b610add8185610a81565b9350610aed818560208601610a91565b610af681610ab9565b840191505092915050565b5f6020820190508181035f830152610b198184610ac9565b905092915050565b610b2a816108f1565b82525050565b5f602082019050610b435f830184610b21565b92915050565b7f4e6f742043616c6c61626c6520627920557365720000000000000000000000005f82015250565b5f610b7d601483610a81565b9150610b8882610b49565b602082019050919050565b5f6020820190508181035f830152610baa81610b71565b9050919050565b5f604082019050610bc45f830185610b21565b610bd16020830184610b21565b9392505050565b5f81519050610be681610935565b92915050565b5f60208284031215610c0157610c006108ce565b5b5f610c0e84828501610bd8565b91505092915050565b7f496e73756666696369656e7420416c6c6f77616e6365000000000000000000005f82015250565b5f610c4b601683610a81565b9150610c5682610c17565b602082019050919050565b5f6020820190508181035f830152610c7881610c3f565b9050919050565b7f5553445442616c616e6365496e73756666696369656e740000000000000000005f82015250565b5f610cb3601783610a81565b9150610cbe82610c7f565b602082019050919050565b5f6020820190508181035f830152610ce081610ca7565b9050919050565b610cf08161092c565b82525050565b5f606082019050610d095f830186610b21565b610d166020830185610b21565b610d236040830184610ce7565b949350505050565b5f8115159050919050565b610d3f81610d2b565b8114610d49575f80fd5b50565b5f81519050610d5a81610d36565b92915050565b5f60208284031215610d7557610d746108ce565b5b5f610d8284828501610d4c565b91505092915050565b5f604082019050610d9e5f830185610b21565b610dab6020830184610ce7565b939250505056fea2646970667358221220c96022dbd2945a283352d6961f12b30a4ec2ec3585641c9aa7e4c91a46d49a1564736f6c63430008150033",
   "deployedBytecode": "0x608060405234801561000f575f80fd5b50600436106100a7575f3560e01c80634d7b9bd51161006f5780634d7b9bd51461014d5780635b4df1ca1461016957806367afe31b1461018757806386e83c68146101a3578063f77c4791146101bf578063f851a440146101dd576100a7565b80630db62ae4146100ab5780631739c155146100c7578063388c54de146100f75780633cebb823146101155780633daba0d714610131575b5f80fd5b6100c560048036038101906100c0919061095f565b6101fb565b005b6100e160048036038101906100dc919061099d565b6102ae565b6040516100ee91906109ea565b60405180910390f35b6100ff6102d1565b60405161010c9190610a5e565b60405180910390f35b61012f600480360381019061012a919061099d565b6102f6565b005b61014b6004803603810190610146919061095f565b6103ca565b005b6101676004803603810190610162919061095f565b6104b0565b005b610171610594565b60405161017e9190610b01565b60405180910390f35b6101a1600480360381019061019c919061095f565b6105cd565b005b6101bd60048036038101906101b8919061099d565b61066c565b005b6101c7610740565b6040516101d49190610b30565b60405180910390f35b6101e5610765565b6040516101f29190610b30565b60405180910390f35b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461028b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028290610b93565b60405180910390fd5b61029583836104b0565b61029f83836103ca565b6102a9838361078a565b505050565b5f602052805f5260405f205f915054906101000a900467ffffffffffffffff1681565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037d90610b93565b60405180910390fd5b8160025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84306040518363ffffffff1660e01b8152600401610427929190610bb1565b602060405180830381865afa158015610442573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104669190610bec565b9050808211156104ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a290610c61565b60405180910390fd5b505050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b815260040161050b9190610b30565b602060405180830381865afa158015610526573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061054a9190610bec565b90508082111561058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058690610cc9565b60405180910390fd5b505050565b6040518060400160405280600a81526020017f636f6e74726f6c6c65720000000000000000000000000000000000000000000081525081565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461065d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065490610b93565b60405180910390fd5b610667838361082d565b505050565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f390610b93565b60405180910390fd5b8160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330846040518463ffffffff1660e01b81526004016107e893929190610cf6565b6020604051808303815f875af1158015610804573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108289190610d60565b505050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610889929190610d8b565b6020604051808303815f875af11580156108a5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108c99190610d60565b505050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6108fb826108d2565b9050919050565b61090b816108f1565b8114610915575f80fd5b50565b5f8135905061092681610902565b92915050565b5f819050919050565b61093e8161092c565b8114610948575f80fd5b50565b5f8135905061095981610935565b92915050565b5f8060408385031215610975576109746108ce565b5b5f61098285828601610918565b92505060206109938582860161094b565b9150509250929050565b5f602082840312156109b2576109b16108ce565b5b5f6109bf84828501610918565b91505092915050565b5f67ffffffffffffffff82169050919050565b6109e4816109c8565b82525050565b5f6020820190506109fd5f8301846109db565b92915050565b5f819050919050565b5f610a26610a21610a1c846108d2565b610a03565b6108d2565b9050919050565b5f610a3782610a0c565b9050919050565b5f610a4882610a2d565b9050919050565b610a5881610a3e565b82525050565b5f602082019050610a715f830184610a4f565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610aae578082015181840152602081019050610a93565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610ad382610a77565b610add8185610a81565b9350610aed818560208601610a91565b610af681610ab9565b840191505092915050565b5f6020820190508181035f830152610b198184610ac9565b905092915050565b610b2a816108f1565b82525050565b5f602082019050610b435f830184610b21565b92915050565b7f4e6f742043616c6c61626c6520627920557365720000000000000000000000005f82015250565b5f610b7d601483610a81565b9150610b8882610b49565b602082019050919050565b5f6020820190508181035f830152610baa81610b71565b9050919050565b5f604082019050610bc45f830185610b21565b610bd16020830184610b21565b9392505050565b5f81519050610be681610935565b92915050565b5f60208284031215610c0157610c006108ce565b5b5f610c0e84828501610bd8565b91505092915050565b7f496e73756666696369656e7420416c6c6f77616e6365000000000000000000005f82015250565b5f610c4b601683610a81565b9150610c5682610c17565b602082019050919050565b5f6020820190508181035f830152610c7881610c3f565b9050919050565b7f5553445442616c616e6365496e73756666696369656e740000000000000000005f82015250565b5f610cb3601783610a81565b9150610cbe82610c7f565b602082019050919050565b5f6020820190508181035f830152610ce081610ca7565b9050919050565b610cf08161092c565b82525050565b5f606082019050610d095f830186610b21565b610d166020830185610b21565b610d236040830184610ce7565b949350505050565b5f8115159050919050565b610d3f81610d2b565b8114610d49575f80fd5b50565b5f81519050610d5a81610d36565b92915050565b5f60208284031215610d7557610d746108ce565b5b5f610d8284828501610d4c565b91505092915050565b5f604082019050610d9e5f830185610b21565b610dab6020830184610ce7565b939250505056fea2646970667358221220c96022dbd2945a283352d6961f12b30a4ec2ec3585641c9aa7e4c91a46d49a1564736f6c63430008150033",
   "sourceMap": "915:2142:0:-:0;;;1199:134;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1264:10;1251;;:23;;;;;;;;;;;;;;;;;;1313:12;1284:19;;:42;;;;;;;;;;;;;;;;;;1199:134;915:2142;;88:117:1;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;915:2142:0:-;;;;;;;",
   "deployedSourceMap": "915:2142:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1632:260;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;945:54;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1100:33;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2920:135;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2444:259;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2709:205;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1139:53;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1898:167;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1468:158;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1069:25;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1043:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1632:260;1734:10;;;;;;;;;;;1412:7;1398:21;;:10;:21;;;1390:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;1756:33:::1;1769:11;1782:6;1756:12;:33::i;:::-;1799:35;1814:11;1827:6;1799:14;:35::i;:::-;1844:41;1865:11;1878:6;1844:20;:41::i;:::-;1632:260:::0;;;:::o;945:54::-;;;;;;;;;;;;;;;;;;;;;;:::o;1100:33::-;;;;;;;;;;;;;:::o;2920:135::-;3005:5;;;;;;;;;;;1412:7;1398:21;;:10;:21;;;1390:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;3035:13:::1;3022:10;;:26;;;;;;;;;;;;;;;;;;2920:135:::0;;:::o;2444:259::-;2520:17;2547:19;;;;;;;;;;;2540:37;;;2591:4;2617;2540:92;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2520:112;;2660:9;2650:6;:19;;2642:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;2510:193;2444:259;;:::o;2709:205::-;2783:15;2808:19;;;;;;;;;;;2801:37;;;2839:4;2801:43;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2783:61;;2872:7;2862:6;:17;;2854:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;2773:141;2709:205;;:::o;1139:53::-;;;;;;;;;;;;;;;;;;;:::o;1898:167::-;1997:10;;;;;;;;;;;1412:7;1398:21;;:10;:21;;;1390:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;2019:39:::1;2038:11;2051:6;2019:18;:39::i;:::-;1898:167:::0;;;:::o;1468:158::-;1557:5;;;;;;;;;;;1412:7;1398:21;;:10;:21;;;1390:54;;;;;;;;;;;;:::i;:::-;;;;;;;;;1603:15:::1;1574:19;;:45;;;;;;;;;;;;;;;;;;1468:158:::0;;:::o;1069:25::-;;;;;;;;;;;;;:::o;1043:20::-;;;;;;;;;;;;;:::o;2071:214::-;2163:19;;;;;;;;;;;2156:40;;;2210:11;2243:4;2262:6;2156:122;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2071:214;;:::o;2291:147::-;2381:19;;;;;;;;;;;2374:36;;;2411:11;2424:6;2374:57;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2291:147;;:::o;88:117:1:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:77::-;878:7;907:5;896:16;;841:77;;;:::o;924:122::-;997:24;1015:5;997:24;:::i;:::-;990:5;987:35;977:63;;1036:1;1033;1026:12;977:63;924:122;:::o;1052:139::-;1098:5;1136:6;1123:20;1114:29;;1152:33;1179:5;1152:33;:::i;:::-;1052:139;;;;:::o;1197:474::-;1265:6;1273;1322:2;1310:9;1301:7;1297:23;1293:32;1290:119;;;1328:79;;:::i;:::-;1290:119;1448:1;1473:53;1518:7;1509:6;1498:9;1494:22;1473:53;:::i;:::-;1463:63;;1419:117;1575:2;1601:53;1646:7;1637:6;1626:9;1622:22;1601:53;:::i;:::-;1591:63;;1546:118;1197:474;;;;;:::o;1677:329::-;1736:6;1785:2;1773:9;1764:7;1760:23;1756:32;1753:119;;;1791:79;;:::i;:::-;1753:119;1911:1;1936:53;1981:7;1972:6;1961:9;1957:22;1936:53;:::i;:::-;1926:63;;1882:117;1677:329;;;;:::o;2012:101::-;2048:7;2088:18;2081:5;2077:30;2066:41;;2012:101;;;:::o;2119:115::-;2204:23;2221:5;2204:23;:::i;:::-;2199:3;2192:36;2119:115;;:::o;2240:218::-;2331:4;2369:2;2358:9;2354:18;2346:26;;2382:69;2448:1;2437:9;2433:17;2424:6;2382:69;:::i;:::-;2240:218;;;;:::o;2464:60::-;2492:3;2513:5;2506:12;;2464:60;;;:::o;2530:142::-;2580:9;2613:53;2631:34;2640:24;2658:5;2640:24;:::i;:::-;2631:34;:::i;:::-;2613:53;:::i;:::-;2600:66;;2530:142;;;:::o;2678:126::-;2728:9;2761:37;2792:5;2761:37;:::i;:::-;2748:50;;2678:126;;;:::o;2810:139::-;2873:9;2906:37;2937:5;2906:37;:::i;:::-;2893:50;;2810:139;;;:::o;2955:157::-;3055:50;3099:5;3055:50;:::i;:::-;3050:3;3043:63;2955:157;;:::o;3118:248::-;3224:4;3262:2;3251:9;3247:18;3239:26;;3275:84;3356:1;3345:9;3341:17;3332:6;3275:84;:::i;:::-;3118:248;;;;:::o;3372:99::-;3424:6;3458:5;3452:12;3442:22;;3372:99;;;:::o;3477:169::-;3561:11;3595:6;3590:3;3583:19;3635:4;3630:3;3626:14;3611:29;;3477:169;;;;:::o;3652:246::-;3733:1;3743:113;3757:6;3754:1;3751:13;3743:113;;;3842:1;3837:3;3833:11;3827:18;3823:1;3818:3;3814:11;3807:39;3779:2;3776:1;3772:10;3767:15;;3743:113;;;3890:1;3881:6;3876:3;3872:16;3865:27;3714:184;3652:246;;;:::o;3904:102::-;3945:6;3996:2;3992:7;3987:2;3980:5;3976:14;3972:28;3962:38;;3904:102;;;:::o;4012:377::-;4100:3;4128:39;4161:5;4128:39;:::i;:::-;4183:71;4247:6;4242:3;4183:71;:::i;:::-;4176:78;;4263:65;4321:6;4316:3;4309:4;4302:5;4298:16;4263:65;:::i;:::-;4353:29;4375:6;4353:29;:::i;:::-;4348:3;4344:39;4337:46;;4104:285;4012:377;;;;:::o;4395:313::-;4508:4;4546:2;4535:9;4531:18;4523:26;;4595:9;4589:4;4585:20;4581:1;4570:9;4566:17;4559:47;4623:78;4696:4;4687:6;4623:78;:::i;:::-;4615:86;;4395:313;;;;:::o;4714:118::-;4801:24;4819:5;4801:24;:::i;:::-;4796:3;4789:37;4714:118;;:::o;4838:222::-;4931:4;4969:2;4958:9;4954:18;4946:26;;4982:71;5050:1;5039:9;5035:17;5026:6;4982:71;:::i;:::-;4838:222;;;;:::o;5066:170::-;5206:22;5202:1;5194:6;5190:14;5183:46;5066:170;:::o;5242:366::-;5384:3;5405:67;5469:2;5464:3;5405:67;:::i;:::-;5398:74;;5481:93;5570:3;5481:93;:::i;:::-;5599:2;5594:3;5590:12;5583:19;;5242:366;;;:::o;5614:419::-;5780:4;5818:2;5807:9;5803:18;5795:26;;5867:9;5861:4;5857:20;5853:1;5842:9;5838:17;5831:47;5895:131;6021:4;5895:131;:::i;:::-;5887:139;;5614:419;;;:::o;6039:332::-;6160:4;6198:2;6187:9;6183:18;6175:26;;6211:71;6279:1;6268:9;6264:17;6255:6;6211:71;:::i;:::-;6292:72;6360:2;6349:9;6345:18;6336:6;6292:72;:::i;:::-;6039:332;;;;;:::o;6377:143::-;6434:5;6465:6;6459:13;6450:22;;6481:33;6508:5;6481:33;:::i;:::-;6377:143;;;;:::o;6526:351::-;6596:6;6645:2;6633:9;6624:7;6620:23;6616:32;6613:119;;;6651:79;;:::i;:::-;6613:119;6771:1;6796:64;6852:7;6843:6;6832:9;6828:22;6796:64;:::i;:::-;6786:74;;6742:128;6526:351;;;;:::o;6883:172::-;7023:24;7019:1;7011:6;7007:14;7000:48;6883:172;:::o;7061:366::-;7203:3;7224:67;7288:2;7283:3;7224:67;:::i;:::-;7217:74;;7300:93;7389:3;7300:93;:::i;:::-;7418:2;7413:3;7409:12;7402:19;;7061:366;;;:::o;7433:419::-;7599:4;7637:2;7626:9;7622:18;7614:26;;7686:9;7680:4;7676:20;7672:1;7661:9;7657:17;7650:47;7714:131;7840:4;7714:131;:::i;:::-;7706:139;;7433:419;;;:::o;7858:173::-;7998:25;7994:1;7986:6;7982:14;7975:49;7858:173;:::o;8037:366::-;8179:3;8200:67;8264:2;8259:3;8200:67;:::i;:::-;8193:74;;8276:93;8365:3;8276:93;:::i;:::-;8394:2;8389:3;8385:12;8378:19;;8037:366;;;:::o;8409:419::-;8575:4;8613:2;8602:9;8598:18;8590:26;;8662:9;8656:4;8652:20;8648:1;8637:9;8633:17;8626:47;8690:131;8816:4;8690:131;:::i;:::-;8682:139;;8409:419;;;:::o;8834:118::-;8921:24;8939:5;8921:24;:::i;:::-;8916:3;8909:37;8834:118;;:::o;8958:442::-;9107:4;9145:2;9134:9;9130:18;9122:26;;9158:71;9226:1;9215:9;9211:17;9202:6;9158:71;:::i;:::-;9239:72;9307:2;9296:9;9292:18;9283:6;9239:72;:::i;:::-;9321;9389:2;9378:9;9374:18;9365:6;9321:72;:::i;:::-;8958:442;;;;;;:::o;9406:90::-;9440:7;9483:5;9476:13;9469:21;9458:32;;9406:90;;;:::o;9502:116::-;9572:21;9587:5;9572:21;:::i;:::-;9565:5;9562:32;9552:60;;9608:1;9605;9598:12;9552:60;9502:116;:::o;9624:137::-;9678:5;9709:6;9703:13;9694:22;;9725:30;9749:5;9725:30;:::i;:::-;9624:137;;;;:::o;9767:345::-;9834:6;9883:2;9871:9;9862:7;9858:23;9854:32;9851:119;;;9889:79;;:::i;:::-;9851:119;10009:1;10034:61;10087:7;10078:6;10067:9;10063:22;10034:61;:::i;:::-;10024:71;;9980:125;9767:345;;;;:::o;10118:332::-;10239:4;10277:2;10266:9;10262:18;10254:26;;10290:71;10358:1;10347:9;10343:17;10334:6;10290:71;:::i;:::-;10371:72;10439:2;10428:9;10424:18;10415:6;10371:72;:::i;:::-;10118:332;;;;;:::o",
   "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.9;\n\n// Uncomment this line to use console.log\n// import \"hardhat/console.sol\";\ninterface ITRC20 {\n    function totalSupply() external view returns (uint256);\n\n    function balanceOf(address account) external view returns (uint256);\n\n    function transfer(\n        address recipient,\n        uint256 amount\n    ) external returns (bool);\n\n    function allowance(\n        address owner,\n        address spender\n    ) external view returns (uint256);\n\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) external returns (bool);\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n    event Approval(\n        address indexed owner,\n        address indexed spender,\n        uint256 value\n    );\n}\n\ncontract SimpleTransfer {\n    mapping(address => uint64) public userTransactionNonce; //increments on commits and Transfers\n    address public admin;\n    address public controller;\n    ITRC20 public usdtContractAddress;\n    string public constant ROLE_CONTROLLER = \"controller\";\n\n    constructor(address usdtContract) payable {\n        controller = msg.sender;\n        usdtContractAddress = ITRC20(usdtContract);\n    }\n\n    modifier onlyCallablyBy(address account) {\n        require(msg.sender == account, \"Not Callable by User\");\n        _;\n    }\n\n    function switchUSDTContract(\n        address newUSDTContract\n    ) public onlyCallablyBy(admin) {\n        usdtContractAddress = ITRC20(newUSDTContract);\n    }\n\n    function receiveUSDT(\n        address userAddress,\n        uint256 amount\n    ) public onlyCallablyBy(controller) {\n        checkBalance(userAddress, amount);\n        checkAllowance(userAddress, amount);\n        transferUsdtFromUser(userAddress, amount);\n    }\n\n    function sendUSDT(\n        address userAddress,\n        uint256 amount\n    ) public onlyCallablyBy(controller) {\n        transferUsdtToUser(userAddress, amount);\n    }\n\n    function transferUsdtFromUser(address userAddress, uint256 amount) private {\n        ITRC20(usdtContractAddress).transferFrom(\n            userAddress,\n            address(this),\n            amount\n        );\n    }\n\n    function transferUsdtToUser(address userAddress, uint256 amount) private {\n        ITRC20(usdtContractAddress).transfer(userAddress, amount);\n    }\n\n    function checkAllowance(address user, uint256 amount) public view {\n        uint256 allowance = ITRC20(usdtContractAddress).allowance(\n            user,\n            address(this)\n        );\n        require(amount <= allowance, \"Insufficient Allowance\");\n    }\n\n    function checkBalance(address user, uint256 amount) public view {\n        uint256 balance = ITRC20(usdtContractAddress).balanceOf(user);\n        require(amount <= balance, \"USDTBalanceInsufficient\");\n    }\n\n    function changeController(\n        address newController\n    ) public onlyCallablyBy(admin) {\n        controller = newController;\n    }\n}\n",
   "sourcePath": "/Volumes/deeper_sink/projects/d9/contracts/tron-contracts/contracts/SimpleTransfer.sol",
   "ast": {
      "absolutePath": "project:/contracts/SimpleTransfer.sol",
      "exportedSymbols": {
         "ITRC20": [
            68
         ],
         "SimpleTransfer": [
            272
         ]
      },
      "id": 273,
      "license": "UNLICENSED",
      "nodeType": "SourceUnit",
      "nodes": [
         {
            "id": 1,
            "literals": [
               "solidity",
               "^",
               "0.8",
               ".9"
            ],
            "nodeType": "PragmaDirective",
            "src": "39:23:0"
         },
         {
            "abstract": false,
            "baseContracts": [],
            "canonicalName": "ITRC20",
            "contractDependencies": [],
            "contractKind": "interface",
            "fullyImplemented": false,
            "id": 68,
            "linearizedBaseContracts": [
               68
            ],
            "name": "ITRC20",
            "nameLocation": "149:6:0",
            "nodeType": "ContractDefinition",
            "nodes": [
               {
                  "functionSelector": "18160ddd",
                  "id": 6,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "totalSupply",
                  "nameLocation": "171:11:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 2,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "182:2:0"
                  },
                  "returnParameters": {
                     "id": 5,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 4,
                           "mutability": "mutable",
                           "name": "",
                           "nameLocation": "-1:-1:-1",
                           "nodeType": "VariableDeclaration",
                           "scope": 6,
                           "src": "208:7:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 3,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "208:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "207:9:0"
                  },
                  "scope": 68,
                  "src": "162:55:0",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
               },
               {
                  "functionSelector": "70a08231",
                  "id": 13,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "balanceOf",
                  "nameLocation": "232:9:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 9,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 8,
                           "mutability": "mutable",
                           "name": "account",
                           "nameLocation": "250:7:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 13,
                           "src": "242:15:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 7,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "242:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "241:17:0"
                  },
                  "returnParameters": {
                     "id": 12,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 11,
                           "mutability": "mutable",
                           "name": "",
                           "nameLocation": "-1:-1:-1",
                           "nodeType": "VariableDeclaration",
                           "scope": 13,
                           "src": "282:7:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 10,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "282:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "281:9:0"
                  },
                  "scope": 68,
                  "src": "223:68:0",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
               },
               {
                  "functionSelector": "a9059cbb",
                  "id": 22,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transfer",
                  "nameLocation": "306:8:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 18,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 15,
                           "mutability": "mutable",
                           "name": "recipient",
                           "nameLocation": "332:9:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 22,
                           "src": "324:17:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 14,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "324:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 17,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "359:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 22,
                           "src": "351:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 16,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "351:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "314:57:0"
                  },
                  "returnParameters": {
                     "id": 21,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 20,
                           "mutability": "mutable",
                           "name": "",
                           "nameLocation": "-1:-1:-1",
                           "nodeType": "VariableDeclaration",
                           "scope": 22,
                           "src": "390:4:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                           },
                           "typeName": {
                              "id": 19,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "390:4:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_bool",
                                 "typeString": "bool"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "389:6:0"
                  },
                  "scope": 68,
                  "src": "297:99:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
               },
               {
                  "functionSelector": "dd62ed3e",
                  "id": 31,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "allowance",
                  "nameLocation": "411:9:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 27,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 24,
                           "mutability": "mutable",
                           "name": "owner",
                           "nameLocation": "438:5:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 31,
                           "src": "430:13:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 23,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "430:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 26,
                           "mutability": "mutable",
                           "name": "spender",
                           "nameLocation": "461:7:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 31,
                           "src": "453:15:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 25,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "453:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "420:54:0"
                  },
                  "returnParameters": {
                     "id": 30,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 29,
                           "mutability": "mutable",
                           "name": "",
                           "nameLocation": "-1:-1:-1",
                           "nodeType": "VariableDeclaration",
                           "scope": 31,
                           "src": "498:7:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 28,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "498:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "497:9:0"
                  },
                  "scope": 68,
                  "src": "402:105:0",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "external"
               },
               {
                  "functionSelector": "095ea7b3",
                  "id": 40,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "approve",
                  "nameLocation": "522:7:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 36,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 33,
                           "mutability": "mutable",
                           "name": "spender",
                           "nameLocation": "538:7:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 40,
                           "src": "530:15:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 32,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "530:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 35,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "555:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 40,
                           "src": "547:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 34,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "547:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "529:33:0"
                  },
                  "returnParameters": {
                     "id": 39,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 38,
                           "mutability": "mutable",
                           "name": "",
                           "nameLocation": "-1:-1:-1",
                           "nodeType": "VariableDeclaration",
                           "scope": 40,
                           "src": "581:4:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                           },
                           "typeName": {
                              "id": 37,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "581:4:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_bool",
                                 "typeString": "bool"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "580:6:0"
                  },
                  "scope": 68,
                  "src": "513:74:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
               },
               {
                  "functionSelector": "23b872dd",
                  "id": 51,
                  "implemented": false,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transferFrom",
                  "nameLocation": "602:12:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 47,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 42,
                           "mutability": "mutable",
                           "name": "sender",
                           "nameLocation": "632:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 51,
                           "src": "624:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 41,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "624:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 44,
                           "mutability": "mutable",
                           "name": "recipient",
                           "nameLocation": "656:9:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 51,
                           "src": "648:17:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 43,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "648:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 46,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "683:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 51,
                           "src": "675:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 45,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "675:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "614:81:0"
                  },
                  "returnParameters": {
                     "id": 50,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 49,
                           "mutability": "mutable",
                           "name": "",
                           "nameLocation": "-1:-1:-1",
                           "nodeType": "VariableDeclaration",
                           "scope": 51,
                           "src": "714:4:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                           },
                           "typeName": {
                              "id": 48,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "714:4:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_bool",
                                 "typeString": "bool"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "713:6:0"
                  },
                  "scope": 68,
                  "src": "593:127:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
               },
               {
                  "anonymous": false,
                  "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                  "id": 59,
                  "name": "Transfer",
                  "nameLocation": "732:8:0",
                  "nodeType": "EventDefinition",
                  "parameters": {
                     "id": 58,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 53,
                           "indexed": true,
                           "mutability": "mutable",
                           "name": "from",
                           "nameLocation": "757:4:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 59,
                           "src": "741:20:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 52,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "741:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 55,
                           "indexed": true,
                           "mutability": "mutable",
                           "name": "to",
                           "nameLocation": "779:2:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 59,
                           "src": "763:18:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 54,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "763:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 57,
                           "indexed": false,
                           "mutability": "mutable",
                           "name": "value",
                           "nameLocation": "791:5:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 59,
                           "src": "783:13:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 56,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "783:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "740:57:0"
                  },
                  "src": "726:72:0"
               },
               {
                  "anonymous": false,
                  "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                  "id": 67,
                  "name": "Approval",
                  "nameLocation": "809:8:0",
                  "nodeType": "EventDefinition",
                  "parameters": {
                     "id": 66,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 61,
                           "indexed": true,
                           "mutability": "mutable",
                           "name": "owner",
                           "nameLocation": "843:5:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 67,
                           "src": "827:21:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 60,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "827:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 63,
                           "indexed": true,
                           "mutability": "mutable",
                           "name": "spender",
                           "nameLocation": "874:7:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 67,
                           "src": "858:23:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 62,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "858:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 65,
                           "indexed": false,
                           "mutability": "mutable",
                           "name": "value",
                           "nameLocation": "899:5:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 67,
                           "src": "891:13:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 64,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "891:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "817:93:0"
                  },
                  "src": "803:108:0"
               }
            ],
            "scope": 273,
            "src": "139:774:0",
            "usedErrors": [],
            "usedEvents": [
               59,
               67
            ]
         },
         {
            "abstract": false,
            "baseContracts": [],
            "canonicalName": "SimpleTransfer",
            "contractDependencies": [],
            "contractKind": "contract",
            "fullyImplemented": true,
            "id": 272,
            "linearizedBaseContracts": [
               272
            ],
            "name": "SimpleTransfer",
            "nameLocation": "924:14:0",
            "nodeType": "ContractDefinition",
            "nodes": [
               {
                  "constant": false,
                  "functionSelector": "1739c155",
                  "id": 72,
                  "mutability": "mutable",
                  "name": "userTransactionNonce",
                  "nameLocation": "979:20:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 272,
                  "src": "945:54:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                     "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                     "typeString": "mapping(address => uint64)"
                  },
                  "typeName": {
                     "id": 71,
                     "keyName": "",
                     "keyNameLocation": "-1:-1:-1",
                     "keyType": {
                        "id": 69,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "953:7:0",
                        "typeDescriptions": {
                           "typeIdentifier": "t_address",
                           "typeString": "address"
                        }
                     },
                     "nodeType": "Mapping",
                     "src": "945:26:0",
                     "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                        "typeString": "mapping(address => uint64)"
                     },
                     "valueName": "",
                     "valueNameLocation": "-1:-1:-1",
                     "valueType": {
                        "id": 70,
                        "name": "uint64",
                        "nodeType": "ElementaryTypeName",
                        "src": "964:6:0",
                        "typeDescriptions": {
                           "typeIdentifier": "t_uint64",
                           "typeString": "uint64"
                        }
                     }
                  },
                  "visibility": "public"
               },
               {
                  "constant": false,
                  "functionSelector": "f851a440",
                  "id": 74,
                  "mutability": "mutable",
                  "name": "admin",
                  "nameLocation": "1058:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 272,
                  "src": "1043:20:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                     "typeIdentifier": "t_address",
                     "typeString": "address"
                  },
                  "typeName": {
                     "id": 73,
                     "name": "address",
                     "nodeType": "ElementaryTypeName",
                     "src": "1043:7:0",
                     "stateMutability": "nonpayable",
                     "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                     }
                  },
                  "visibility": "public"
               },
               {
                  "constant": false,
                  "functionSelector": "f77c4791",
                  "id": 76,
                  "mutability": "mutable",
                  "name": "controller",
                  "nameLocation": "1084:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 272,
                  "src": "1069:25:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                     "typeIdentifier": "t_address",
                     "typeString": "address"
                  },
                  "typeName": {
                     "id": 75,
                     "name": "address",
                     "nodeType": "ElementaryTypeName",
                     "src": "1069:7:0",
                     "stateMutability": "nonpayable",
                     "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                     }
                  },
                  "visibility": "public"
               },
               {
                  "constant": false,
                  "functionSelector": "388c54de",
                  "id": 79,
                  "mutability": "mutable",
                  "name": "usdtContractAddress",
                  "nameLocation": "1114:19:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 272,
                  "src": "1100:33:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                     "typeIdentifier": "t_contract$_ITRC20_$68",
                     "typeString": "contract ITRC20"
                  },
                  "typeName": {
                     "id": 78,
                     "nodeType": "UserDefinedTypeName",
                     "pathNode": {
                        "id": 77,
                        "name": "ITRC20",
                        "nameLocations": [
                           "1100:6:0"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 68,
                        "src": "1100:6:0"
                     },
                     "referencedDeclaration": 68,
                     "src": "1100:6:0",
                     "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ITRC20_$68",
                        "typeString": "contract ITRC20"
                     }
                  },
                  "visibility": "public"
               },
               {
                  "constant": true,
                  "functionSelector": "5b4df1ca",
                  "id": 82,
                  "mutability": "constant",
                  "name": "ROLE_CONTROLLER",
                  "nameLocation": "1162:15:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 272,
                  "src": "1139:53:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                     "typeIdentifier": "t_string_memory_ptr",
                     "typeString": "string"
                  },
                  "typeName": {
                     "id": 80,
                     "name": "string",
                     "nodeType": "ElementaryTypeName",
                     "src": "1139:6:0",
                     "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                     }
                  },
                  "value": {
                     "hexValue": "636f6e74726f6c6c6572",
                     "id": 81,
                     "isConstant": false,
                     "isLValue": false,
                     "isPure": true,
                     "kind": "string",
                     "lValueRequested": false,
                     "nodeType": "Literal",
                     "src": "1180:12:0",
                     "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_63d7d2ad08e267c4faee7cf1b3836449cbc52037181def29d0791e89bf99139b",
                        "typeString": "literal_string \"controller\""
                     },
                     "value": "controller"
                  },
                  "visibility": "public"
               },
               {
                  "body": {
                     "id": 98,
                     "nodeType": "Block",
                     "src": "1241:92:0",
                     "statements": [
                        {
                           "expression": {
                              "id": 90,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                 "id": 87,
                                 "name": "controller",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 76,
                                 "src": "1251:10:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                 }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                 "expression": {
                                    "id": 88,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967281,
                                    "src": "1264:3:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_magic_message",
                                       "typeString": "msg"
                                    }
                                 },
                                 "id": 89,
                                 "isConstant": false,
                                 "isLValue": false,
                                 "isPure": false,
                                 "lValueRequested": false,
                                 "memberLocation": "1268:6:0",
                                 "memberName": "sender",
                                 "nodeType": "MemberAccess",
                                 "src": "1264:10:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                 }
                              },
                              "src": "1251:23:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "id": 91,
                           "nodeType": "ExpressionStatement",
                           "src": "1251:23:0"
                        },
                        {
                           "expression": {
                              "id": 96,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                 "id": 92,
                                 "name": "usdtContractAddress",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 79,
                                 "src": "1284:19:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ITRC20_$68",
                                    "typeString": "contract ITRC20"
                                 }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                 "arguments": [
                                    {
                                       "id": 94,
                                       "name": "usdtContract",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 84,
                                       "src": "1313:12:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                       }
                                    }
                                 ],
                                 "expression": {
                                    "argumentTypes": [
                                       {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                       }
                                    ],
                                    "id": 93,
                                    "name": "ITRC20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68,
                                    "src": "1306:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_type$_t_contract$_ITRC20_$68_$",
                                       "typeString": "type(contract ITRC20)"
                                    }
                                 },
                                 "id": 95,
                                 "isConstant": false,
                                 "isLValue": false,
                                 "isPure": false,
                                 "kind": "typeConversion",
                                 "lValueRequested": false,
                                 "nameLocations": [],
                                 "names": [],
                                 "nodeType": "FunctionCall",
                                 "src": "1306:20:0",
                                 "tryCall": false,
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ITRC20_$68",
                                    "typeString": "contract ITRC20"
                                 }
                              },
                              "src": "1284:42:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_contract$_ITRC20_$68",
                                 "typeString": "contract ITRC20"
                              }
                           },
                           "id": 97,
                           "nodeType": "ExpressionStatement",
                           "src": "1284:42:0"
                        }
                     ]
                  },
                  "id": 99,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [],
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 85,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 84,
                           "mutability": "mutable",
                           "name": "usdtContract",
                           "nameLocation": "1219:12:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 99,
                           "src": "1211:20:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 83,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1211:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "1210:22:0"
                  },
                  "returnParameters": {
                     "id": 86,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "1241:0:0"
                  },
                  "scope": 272,
                  "src": "1199:134:0",
                  "stateMutability": "payable",
                  "virtual": false,
                  "visibility": "public"
               },
               {
                  "body": {
                     "id": 112,
                     "nodeType": "Block",
                     "src": "1380:82:0",
                     "statements": [
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "commonType": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    "id": 107,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                       "expression": {
                                          "id": 104,
                                          "name": "msg",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967281,
                                          "src": "1398:3:0",
                                          "typeDescriptions": {
                                             "typeIdentifier": "t_magic_message",
                                             "typeString": "msg"
                                          }
                                       },
                                       "id": 105,
                                       "isConstant": false,
                                       "isLValue": false,
                                       "isPure": false,
                                       "lValueRequested": false,
                                       "memberLocation": "1402:6:0",
                                       "memberName": "sender",
                                       "nodeType": "MemberAccess",
                                       "src": "1398:10:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                       }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "==",
                                    "rightExpression": {
                                       "id": 106,
                                       "name": "account",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 101,
                                       "src": "1412:7:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                       }
                                    },
                                    "src": "1398:21:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_bool",
                                       "typeString": "bool"
                                    }
                                 },
                                 {
                                    "hexValue": "4e6f742043616c6c61626c652062792055736572",
                                    "id": 108,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1421:22:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_stringliteral_58c09f56bb4f52325d4098ab3a15b9c3536982f37acf3f102c4a915fb17ad2a3",
                                       "typeString": "literal_string \"Not Callable by User\""
                                    },
                                    "value": "Not Callable by User"
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_bool",
                                       "typeString": "bool"
                                    },
                                    {
                                       "typeIdentifier": "t_stringliteral_58c09f56bb4f52325d4098ab3a15b9c3536982f37acf3f102c4a915fb17ad2a3",
                                       "typeString": "literal_string \"Not Callable by User\""
                                    }
                                 ],
                                 "id": 103,
                                 "name": "require",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [
                                    4294967278,
                                    4294967278
                                 ],
                                 "referencedDeclaration": 4294967278,
                                 "src": "1390:7:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                 }
                              },
                              "id": 109,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1390:54:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_tuple$__$",
                                 "typeString": "tuple()"
                              }
                           },
                           "id": 110,
                           "nodeType": "ExpressionStatement",
                           "src": "1390:54:0"
                        },
                        {
                           "id": 111,
                           "nodeType": "PlaceholderStatement",
                           "src": "1454:1:0"
                        }
                     ]
                  },
                  "id": 113,
                  "name": "onlyCallablyBy",
                  "nameLocation": "1348:14:0",
                  "nodeType": "ModifierDefinition",
                  "parameters": {
                     "id": 102,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 101,
                           "mutability": "mutable",
                           "name": "account",
                           "nameLocation": "1371:7:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 113,
                           "src": "1363:15:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 100,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1363:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "1362:17:0"
                  },
                  "src": "1339:123:0",
                  "virtual": false,
                  "visibility": "internal"
               },
               {
                  "body": {
                     "id": 127,
                     "nodeType": "Block",
                     "src": "1564:62:0",
                     "statements": [
                        {
                           "expression": {
                              "id": 125,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                 "id": 121,
                                 "name": "usdtContractAddress",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 79,
                                 "src": "1574:19:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ITRC20_$68",
                                    "typeString": "contract ITRC20"
                                 }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                 "arguments": [
                                    {
                                       "id": 123,
                                       "name": "newUSDTContract",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 115,
                                       "src": "1603:15:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                       }
                                    }
                                 ],
                                 "expression": {
                                    "argumentTypes": [
                                       {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                       }
                                    ],
                                    "id": 122,
                                    "name": "ITRC20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 68,
                                    "src": "1596:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_type$_t_contract$_ITRC20_$68_$",
                                       "typeString": "type(contract ITRC20)"
                                    }
                                 },
                                 "id": 124,
                                 "isConstant": false,
                                 "isLValue": false,
                                 "isPure": false,
                                 "kind": "typeConversion",
                                 "lValueRequested": false,
                                 "nameLocations": [],
                                 "names": [],
                                 "nodeType": "FunctionCall",
                                 "src": "1596:23:0",
                                 "tryCall": false,
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ITRC20_$68",
                                    "typeString": "contract ITRC20"
                                 }
                              },
                              "src": "1574:45:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_contract$_ITRC20_$68",
                                 "typeString": "contract ITRC20"
                              }
                           },
                           "id": 126,
                           "nodeType": "ExpressionStatement",
                           "src": "1574:45:0"
                        }
                     ]
                  },
                  "functionSelector": "86e83c68",
                  "id": 128,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                     {
                        "arguments": [
                           {
                              "id": 118,
                              "name": "admin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 74,
                              "src": "1557:5:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           }
                        ],
                        "id": 119,
                        "kind": "modifierInvocation",
                        "modifierName": {
                           "id": 117,
                           "name": "onlyCallablyBy",
                           "nameLocations": [
                              "1542:14:0"
                           ],
                           "nodeType": "IdentifierPath",
                           "referencedDeclaration": 113,
                           "src": "1542:14:0"
                        },
                        "nodeType": "ModifierInvocation",
                        "src": "1542:21:0"
                     }
                  ],
                  "name": "switchUSDTContract",
                  "nameLocation": "1477:18:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 116,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 115,
                           "mutability": "mutable",
                           "name": "newUSDTContract",
                           "nameLocation": "1513:15:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 128,
                           "src": "1505:23:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 114,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1505:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "1495:39:0"
                  },
                  "returnParameters": {
                     "id": 120,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "1564:0:0"
                  },
                  "scope": 272,
                  "src": "1468:158:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
               },
               {
                  "body": {
                     "id": 153,
                     "nodeType": "Block",
                     "src": "1746:146:0",
                     "statements": [
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "id": 139,
                                    "name": "userAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 130,
                                    "src": "1769:11:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "id": 140,
                                    "name": "amount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 132,
                                    "src": "1782:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 ],
                                 "id": 138,
                                 "name": "checkBalance",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 258,
                                 "src": "1756:12:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256) view"
                                 }
                              },
                              "id": 141,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1756:33:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_tuple$__$",
                                 "typeString": "tuple()"
                              }
                           },
                           "id": 142,
                           "nodeType": "ExpressionStatement",
                           "src": "1756:33:0"
                        },
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "id": 144,
                                    "name": "userAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 130,
                                    "src": "1814:11:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "id": 145,
                                    "name": "amount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 132,
                                    "src": "1827:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 ],
                                 "id": 143,
                                 "name": "checkAllowance",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 234,
                                 "src": "1799:14:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256) view"
                                 }
                              },
                              "id": 146,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1799:35:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_tuple$__$",
                                 "typeString": "tuple()"
                              }
                           },
                           "id": 147,
                           "nodeType": "ExpressionStatement",
                           "src": "1799:35:0"
                        },
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "id": 149,
                                    "name": "userAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 130,
                                    "src": "1865:11:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "id": 150,
                                    "name": "amount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 132,
                                    "src": "1878:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 ],
                                 "id": 148,
                                 "name": "transferUsdtFromUser",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 190,
                                 "src": "1844:20:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256)"
                                 }
                              },
                              "id": 151,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1844:41:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_tuple$__$",
                                 "typeString": "tuple()"
                              }
                           },
                           "id": 152,
                           "nodeType": "ExpressionStatement",
                           "src": "1844:41:0"
                        }
                     ]
                  },
                  "functionSelector": "0db62ae4",
                  "id": 154,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                     {
                        "arguments": [
                           {
                              "id": 135,
                              "name": "controller",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 76,
                              "src": "1734:10:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           }
                        ],
                        "id": 136,
                        "kind": "modifierInvocation",
                        "modifierName": {
                           "id": 134,
                           "name": "onlyCallablyBy",
                           "nameLocations": [
                              "1719:14:0"
                           ],
                           "nodeType": "IdentifierPath",
                           "referencedDeclaration": 113,
                           "src": "1719:14:0"
                        },
                        "nodeType": "ModifierInvocation",
                        "src": "1719:26:0"
                     }
                  ],
                  "name": "receiveUSDT",
                  "nameLocation": "1641:11:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 133,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 130,
                           "mutability": "mutable",
                           "name": "userAddress",
                           "nameLocation": "1670:11:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 154,
                           "src": "1662:19:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 129,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1662:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 132,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "1699:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 154,
                           "src": "1691:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 131,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1691:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "1652:59:0"
                  },
                  "returnParameters": {
                     "id": 137,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "1746:0:0"
                  },
                  "scope": 272,
                  "src": "1632:260:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
               },
               {
                  "body": {
                     "id": 169,
                     "nodeType": "Block",
                     "src": "2009:56:0",
                     "statements": [
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "id": 165,
                                    "name": "userAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 156,
                                    "src": "2038:11:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "id": 166,
                                    "name": "amount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 158,
                                    "src": "2051:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 ],
                                 "id": 164,
                                 "name": "transferUsdtToUser",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 206,
                                 "src": "2019:18:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                    "typeString": "function (address,uint256)"
                                 }
                              },
                              "id": 167,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2019:39:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_tuple$__$",
                                 "typeString": "tuple()"
                              }
                           },
                           "id": 168,
                           "nodeType": "ExpressionStatement",
                           "src": "2019:39:0"
                        }
                     ]
                  },
                  "functionSelector": "67afe31b",
                  "id": 170,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                     {
                        "arguments": [
                           {
                              "id": 161,
                              "name": "controller",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 76,
                              "src": "1997:10:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           }
                        ],
                        "id": 162,
                        "kind": "modifierInvocation",
                        "modifierName": {
                           "id": 160,
                           "name": "onlyCallablyBy",
                           "nameLocations": [
                              "1982:14:0"
                           ],
                           "nodeType": "IdentifierPath",
                           "referencedDeclaration": 113,
                           "src": "1982:14:0"
                        },
                        "nodeType": "ModifierInvocation",
                        "src": "1982:26:0"
                     }
                  ],
                  "name": "sendUSDT",
                  "nameLocation": "1907:8:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 159,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 156,
                           "mutability": "mutable",
                           "name": "userAddress",
                           "nameLocation": "1933:11:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 170,
                           "src": "1925:19:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 155,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1925:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 158,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "1962:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 170,
                           "src": "1954:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 157,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1954:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "1915:59:0"
                  },
                  "returnParameters": {
                     "id": 163,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "2009:0:0"
                  },
                  "scope": 272,
                  "src": "1898:167:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
               },
               {
                  "body": {
                     "id": 189,
                     "nodeType": "Block",
                     "src": "2146:139:0",
                     "statements": [
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "id": 181,
                                    "name": "userAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 172,
                                    "src": "2210:11:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "arguments": [
                                       {
                                          "id": 184,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967268,
                                          "src": "2243:4:0",
                                          "typeDescriptions": {
                                             "typeIdentifier": "t_contract$_SimpleTransfer_$272",
                                             "typeString": "contract SimpleTransfer"
                                          }
                                       }
                                    ],
                                    "expression": {
                                       "argumentTypes": [
                                          {
                                             "typeIdentifier": "t_contract$_SimpleTransfer_$272",
                                             "typeString": "contract SimpleTransfer"
                                          }
                                       ],
                                       "id": 183,
                                       "isConstant": false,
                                       "isLValue": false,
                                       "isPure": true,
                                       "lValueRequested": false,
                                       "nodeType": "ElementaryTypeNameExpression",
                                       "src": "2235:7:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                       },
                                       "typeName": {
                                          "id": 182,
                                          "name": "address",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "2235:7:0",
                                          "typeDescriptions": {}
                                       }
                                    },
                                    "id": 185,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2235:13:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "id": 186,
                                    "name": "amount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 174,
                                    "src": "2262:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 ],
                                 "expression": {
                                    "arguments": [
                                       {
                                          "id": 178,
                                          "name": "usdtContractAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 79,
                                          "src": "2163:19:0",
                                          "typeDescriptions": {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       }
                                    ],
                                    "expression": {
                                       "argumentTypes": [
                                          {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       ],
                                       "id": 177,
                                       "name": "ITRC20",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 68,
                                       "src": "2156:6:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_ITRC20_$68_$",
                                          "typeString": "type(contract ITRC20)"
                                       }
                                    },
                                    "id": 179,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2156:27:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_contract$_ITRC20_$68",
                                       "typeString": "contract ITRC20"
                                    }
                                 },
                                 "id": 180,
                                 "isConstant": false,
                                 "isLValue": false,
                                 "isPure": false,
                                 "lValueRequested": false,
                                 "memberLocation": "2184:12:0",
                                 "memberName": "transferFrom",
                                 "nodeType": "MemberAccess",
                                 "referencedDeclaration": 51,
                                 "src": "2156:40:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (address,address,uint256) external returns (bool)"
                                 }
                              },
                              "id": 187,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2156:122:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_bool",
                                 "typeString": "bool"
                              }
                           },
                           "id": 188,
                           "nodeType": "ExpressionStatement",
                           "src": "2156:122:0"
                        }
                     ]
                  },
                  "id": 190,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transferUsdtFromUser",
                  "nameLocation": "2080:20:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 175,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 172,
                           "mutability": "mutable",
                           "name": "userAddress",
                           "nameLocation": "2109:11:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 190,
                           "src": "2101:19:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 171,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2101:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 174,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "2130:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 190,
                           "src": "2122:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 173,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2122:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "2100:37:0"
                  },
                  "returnParameters": {
                     "id": 176,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "2146:0:0"
                  },
                  "scope": 272,
                  "src": "2071:214:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "private"
               },
               {
                  "body": {
                     "id": 205,
                     "nodeType": "Block",
                     "src": "2364:74:0",
                     "statements": [
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "id": 201,
                                    "name": "userAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 192,
                                    "src": "2411:11:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "id": 202,
                                    "name": "amount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 194,
                                    "src": "2424:6:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 ],
                                 "expression": {
                                    "arguments": [
                                       {
                                          "id": 198,
                                          "name": "usdtContractAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 79,
                                          "src": "2381:19:0",
                                          "typeDescriptions": {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       }
                                    ],
                                    "expression": {
                                       "argumentTypes": [
                                          {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       ],
                                       "id": 197,
                                       "name": "ITRC20",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 68,
                                       "src": "2374:6:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_ITRC20_$68_$",
                                          "typeString": "type(contract ITRC20)"
                                       }
                                    },
                                    "id": 199,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2374:27:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_contract$_ITRC20_$68",
                                       "typeString": "contract ITRC20"
                                    }
                                 },
                                 "id": 200,
                                 "isConstant": false,
                                 "isLValue": false,
                                 "isPure": false,
                                 "lValueRequested": false,
                                 "memberLocation": "2402:8:0",
                                 "memberName": "transfer",
                                 "nodeType": "MemberAccess",
                                 "referencedDeclaration": 22,
                                 "src": "2374:36:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (address,uint256) external returns (bool)"
                                 }
                              },
                              "id": 203,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2374:57:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_bool",
                                 "typeString": "bool"
                              }
                           },
                           "id": 204,
                           "nodeType": "ExpressionStatement",
                           "src": "2374:57:0"
                        }
                     ]
                  },
                  "id": 206,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transferUsdtToUser",
                  "nameLocation": "2300:18:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 195,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 192,
                           "mutability": "mutable",
                           "name": "userAddress",
                           "nameLocation": "2327:11:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 206,
                           "src": "2319:19:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 191,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2319:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 194,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "2348:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 206,
                           "src": "2340:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 193,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2340:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "2318:37:0"
                  },
                  "returnParameters": {
                     "id": 196,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "2364:0:0"
                  },
                  "scope": 272,
                  "src": "2291:147:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "private"
               },
               {
                  "body": {
                     "id": 233,
                     "nodeType": "Block",
                     "src": "2510:193:0",
                     "statements": [
                        {
                           "assignments": [
                              214
                           ],
                           "declarations": [
                              {
                                 "constant": false,
                                 "id": 214,
                                 "mutability": "mutable",
                                 "name": "allowance",
                                 "nameLocation": "2528:9:0",
                                 "nodeType": "VariableDeclaration",
                                 "scope": 233,
                                 "src": "2520:17:0",
                                 "stateVariable": false,
                                 "storageLocation": "default",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                 },
                                 "typeName": {
                                    "id": 213,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2520:7:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 },
                                 "visibility": "internal"
                              }
                           ],
                           "id": 225,
                           "initialValue": {
                              "arguments": [
                                 {
                                    "id": 219,
                                    "name": "user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 208,
                                    "src": "2591:4:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 },
                                 {
                                    "arguments": [
                                       {
                                          "id": 222,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4294967268,
                                          "src": "2617:4:0",
                                          "typeDescriptions": {
                                             "typeIdentifier": "t_contract$_SimpleTransfer_$272",
                                             "typeString": "contract SimpleTransfer"
                                          }
                                       }
                                    ],
                                    "expression": {
                                       "argumentTypes": [
                                          {
                                             "typeIdentifier": "t_contract$_SimpleTransfer_$272",
                                             "typeString": "contract SimpleTransfer"
                                          }
                                       ],
                                       "id": 221,
                                       "isConstant": false,
                                       "isLValue": false,
                                       "isPure": true,
                                       "lValueRequested": false,
                                       "nodeType": "ElementaryTypeNameExpression",
                                       "src": "2609:7:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                       },
                                       "typeName": {
                                          "id": 220,
                                          "name": "address",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "2609:7:0",
                                          "typeDescriptions": {}
                                       }
                                    },
                                    "id": 223,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2609:13:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    },
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 ],
                                 "expression": {
                                    "arguments": [
                                       {
                                          "id": 216,
                                          "name": "usdtContractAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 79,
                                          "src": "2547:19:0",
                                          "typeDescriptions": {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       }
                                    ],
                                    "expression": {
                                       "argumentTypes": [
                                          {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       ],
                                       "id": 215,
                                       "name": "ITRC20",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 68,
                                       "src": "2540:6:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_ITRC20_$68_$",
                                          "typeString": "type(contract ITRC20)"
                                       }
                                    },
                                    "id": 217,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2540:27:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_contract$_ITRC20_$68",
                                       "typeString": "contract ITRC20"
                                    }
                                 },
                                 "id": 218,
                                 "isConstant": false,
                                 "isLValue": false,
                                 "isPure": false,
                                 "lValueRequested": false,
                                 "memberLocation": "2568:9:0",
                                 "memberName": "allowance",
                                 "nodeType": "MemberAccess",
                                 "referencedDeclaration": 31,
                                 "src": "2540:37:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address,address) view external returns (uint256)"
                                 }
                              },
                              "id": 224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2540:92:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "nodeType": "VariableDeclarationStatement",
                           "src": "2520:112:0"
                        },
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "commonType": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    },
                                    "id": 229,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                       "id": 227,
                                       "name": "amount",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 210,
                                       "src": "2650:6:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                       }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<=",
                                    "rightExpression": {
                                       "id": 228,
                                       "name": "allowance",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 214,
                                       "src": "2660:9:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                       }
                                    },
                                    "src": "2650:19:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_bool",
                                       "typeString": "bool"
                                    }
                                 },
                                 {
                                    "hexValue": "496e73756666696369656e7420416c6c6f77616e6365",
                                    "id": 230,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2671:24:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_stringliteral_3f0ff8cd200538bae802ddf9006bb5040e9e9ddc88045ad2938dcac06977cbf6",
                                       "typeString": "literal_string \"Insufficient Allowance\""
                                    },
                                    "value": "Insufficient Allowance"
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_bool",
                                       "typeString": "bool"
                                    },
                                    {
                                       "typeIdentifier": "t_stringliteral_3f0ff8cd200538bae802ddf9006bb5040e9e9ddc88045ad2938dcac06977cbf6",
                                       "typeString": "literal_string \"Insufficient Allowance\""
                                    }
                                 ],
                                 "id": 226,
                                 "name": "require",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [
                                    4294967278,
                                    4294967278
                                 ],
                                 "referencedDeclaration": 4294967278,
                                 "src": "2642:7:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                 }
                              },
                              "id": 231,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2642:54:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_tuple$__$",
                                 "typeString": "tuple()"
                              }
                           },
                           "id": 232,
                           "nodeType": "ExpressionStatement",
                           "src": "2642:54:0"
                        }
                     ]
                  },
                  "functionSelector": "3daba0d7",
                  "id": 234,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "checkAllowance",
                  "nameLocation": "2453:14:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 211,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 208,
                           "mutability": "mutable",
                           "name": "user",
                           "nameLocation": "2476:4:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 234,
                           "src": "2468:12:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 207,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2468:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 210,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "2490:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 234,
                           "src": "2482:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 209,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2482:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "2467:30:0"
                  },
                  "returnParameters": {
                     "id": 212,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "2510:0:0"
                  },
                  "scope": 272,
                  "src": "2444:259:0",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
               },
               {
                  "body": {
                     "id": 257,
                     "nodeType": "Block",
                     "src": "2773:141:0",
                     "statements": [
                        {
                           "assignments": [
                              242
                           ],
                           "declarations": [
                              {
                                 "constant": false,
                                 "id": 242,
                                 "mutability": "mutable",
                                 "name": "balance",
                                 "nameLocation": "2791:7:0",
                                 "nodeType": "VariableDeclaration",
                                 "scope": 257,
                                 "src": "2783:15:0",
                                 "stateVariable": false,
                                 "storageLocation": "default",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                 },
                                 "typeName": {
                                    "id": 241,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2783:7:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    }
                                 },
                                 "visibility": "internal"
                              }
                           ],
                           "id": 249,
                           "initialValue": {
                              "arguments": [
                                 {
                                    "id": 247,
                                    "name": "user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 236,
                                    "src": "2839:4:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_address",
                                       "typeString": "address"
                                    }
                                 ],
                                 "expression": {
                                    "arguments": [
                                       {
                                          "id": 244,
                                          "name": "usdtContractAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 79,
                                          "src": "2808:19:0",
                                          "typeDescriptions": {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       }
                                    ],
                                    "expression": {
                                       "argumentTypes": [
                                          {
                                             "typeIdentifier": "t_contract$_ITRC20_$68",
                                             "typeString": "contract ITRC20"
                                          }
                                       ],
                                       "id": 243,
                                       "name": "ITRC20",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 68,
                                       "src": "2801:6:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_ITRC20_$68_$",
                                          "typeString": "type(contract ITRC20)"
                                       }
                                    },
                                    "id": 245,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2801:27:0",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_contract$_ITRC20_$68",
                                       "typeString": "contract ITRC20"
                                    }
                                 },
                                 "id": 246,
                                 "isConstant": false,
                                 "isLValue": false,
                                 "isPure": false,
                                 "lValueRequested": false,
                                 "memberLocation": "2829:9:0",
                                 "memberName": "balanceOf",
                                 "nodeType": "MemberAccess",
                                 "referencedDeclaration": 13,
                                 "src": "2801:37:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) view external returns (uint256)"
                                 }
                              },
                              "id": 248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2801:43:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "nodeType": "VariableDeclarationStatement",
                           "src": "2783:61:0"
                        },
                        {
                           "expression": {
                              "arguments": [
                                 {
                                    "commonType": {
                                       "typeIdentifier": "t_uint256",
                                       "typeString": "uint256"
                                    },
                                    "id": 253,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                       "id": 251,
                                       "name": "amount",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 238,
                                       "src": "2862:6:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                       }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<=",
                                    "rightExpression": {
                                       "id": 252,
                                       "name": "balance",
                                       "nodeType": "Identifier",
                                       "overloadedDeclarations": [],
                                       "referencedDeclaration": 242,
                                       "src": "2872:7:0",
                                       "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                       }
                                    },
                                    "src": "2862:17:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_bool",
                                       "typeString": "bool"
                                    }
                                 },
                                 {
                                    "hexValue": "5553445442616c616e6365496e73756666696369656e74",
                                    "id": 254,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2881:25:0",
                                    "typeDescriptions": {
                                       "typeIdentifier": "t_stringliteral_4bf2cee7a0f5b6ceca672df1f8b64c275d982523a9dd16851f3e1c67865fbb71",
                                       "typeString": "literal_string \"USDTBalanceInsufficient\""
                                    },
                                    "value": "USDTBalanceInsufficient"
                                 }
                              ],
                              "expression": {
                                 "argumentTypes": [
                                    {
                                       "typeIdentifier": "t_bool",
                                       "typeString": "bool"
                                    },
                                    {
                                       "typeIdentifier": "t_stringliteral_4bf2cee7a0f5b6ceca672df1f8b64c275d982523a9dd16851f3e1c67865fbb71",
                                       "typeString": "literal_string \"USDTBalanceInsufficient\""
                                    }
                                 ],
                                 "id": 250,
                                 "name": "require",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [
                                    4294967278,
                                    4294967278
                                 ],
                                 "referencedDeclaration": 4294967278,
                                 "src": "2854:7:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (bool,string memory) pure"
                                 }
                              },
                              "id": 255,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2854:53:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                 "typeIdentifier": "t_tuple$__$",
                                 "typeString": "tuple()"
                              }
                           },
                           "id": 256,
                           "nodeType": "ExpressionStatement",
                           "src": "2854:53:0"
                        }
                     ]
                  },
                  "functionSelector": "4d7b9bd5",
                  "id": 258,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "checkBalance",
                  "nameLocation": "2718:12:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 239,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 236,
                           "mutability": "mutable",
                           "name": "user",
                           "nameLocation": "2739:4:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 258,
                           "src": "2731:12:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 235,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2731:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        },
                        {
                           "constant": false,
                           "id": 238,
                           "mutability": "mutable",
                           "name": "amount",
                           "nameLocation": "2753:6:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 258,
                           "src": "2745:14:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                           },
                           "typeName": {
                              "id": 237,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2745:7:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_uint256",
                                 "typeString": "uint256"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "2730:30:0"
                  },
                  "returnParameters": {
                     "id": 240,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "2773:0:0"
                  },
                  "scope": 272,
                  "src": "2709:205:0",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "public"
               },
               {
                  "body": {
                     "id": 270,
                     "nodeType": "Block",
                     "src": "3012:43:0",
                     "statements": [
                        {
                           "expression": {
                              "id": 268,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                 "id": 266,
                                 "name": "controller",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 76,
                                 "src": "3022:10:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                 }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                 "id": 267,
                                 "name": "newController",
                                 "nodeType": "Identifier",
                                 "overloadedDeclarations": [],
                                 "referencedDeclaration": 260,
                                 "src": "3035:13:0",
                                 "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                 }
                              },
                              "src": "3022:26:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "id": 269,
                           "nodeType": "ExpressionStatement",
                           "src": "3022:26:0"
                        }
                     ]
                  },
                  "functionSelector": "3cebb823",
                  "id": 271,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                     {
                        "arguments": [
                           {
                              "id": 263,
                              "name": "admin",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 74,
                              "src": "3005:5:0",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           }
                        ],
                        "id": 264,
                        "kind": "modifierInvocation",
                        "modifierName": {
                           "id": 262,
                           "name": "onlyCallablyBy",
                           "nameLocations": [
                              "2990:14:0"
                           ],
                           "nodeType": "IdentifierPath",
                           "referencedDeclaration": 113,
                           "src": "2990:14:0"
                        },
                        "nodeType": "ModifierInvocation",
                        "src": "2990:21:0"
                     }
                  ],
                  "name": "changeController",
                  "nameLocation": "2929:16:0",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                     "id": 261,
                     "nodeType": "ParameterList",
                     "parameters": [
                        {
                           "constant": false,
                           "id": 260,
                           "mutability": "mutable",
                           "name": "newController",
                           "nameLocation": "2963:13:0",
                           "nodeType": "VariableDeclaration",
                           "scope": 271,
                           "src": "2955:21:0",
                           "stateVariable": false,
                           "storageLocation": "default",
                           "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                           },
                           "typeName": {
                              "id": 259,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2955:7:0",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                 "typeIdentifier": "t_address",
                                 "typeString": "address"
                              }
                           },
                           "visibility": "internal"
                        }
                     ],
                     "src": "2945:37:0"
                  },
                  "returnParameters": {
                     "id": 265,
                     "nodeType": "ParameterList",
                     "parameters": [],
                     "src": "3012:0:0"
                  },
                  "scope": 272,
                  "src": "2920:135:0",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
               }
            ],
            "scope": 273,
            "src": "915:2142:0",
            "usedErrors": [],
            "usedEvents": []
         }
      ],
      "src": "39:3019:0"
   },
   "compiler": {
      "name": "solc",
      "version": "0.8.21+commit.d9974bed.Emscripten.clang"
   },
   "networks": {
      "1": {
         "events": {},
         "links": {},
         "address": "417061b55c6219925e036123111e36a05526202cb0",
         "transactionHash": "6ebf3d988f57ca79588f455fdc54209705d859df4a27814f74c38b0d9d3546de"
      }
   },
   "schemaVersion": "2.0.1",
   "updatedAt": "2023-12-12T13:49:02.999Z"
}