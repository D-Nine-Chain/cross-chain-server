export const usdtContractABI = {
   "source": {
      "hash": "0xa9818091a11ab96b1f45f85e65c302133d7cd2a6bc72e321d9918f31bf0c3140",
      "language": "ink! 4.3.0",
      "compiler": "rustc 1.72.0",
      "build_info": {
         "build_mode": "Release",
         "cargo_contract_version": "3.2.0",
         "rust_toolchain": "stable-aarch64-apple-darwin",
         "wasm_opt_settings": {
            "keep_debug_symbols": false,
            "optimization_passes": "Z"
         }
      }
   },
   "contract": {
      "name": "d9_usdt",
      "version": "0.1.0",
      "authors": [
         "D9Devs"
      ]
   },
   "spec": {
      "constructors": [
         {
            "args": [
               {
                  "label": "initial_supply",
                  "type": {
                     "displayName": [
                        "Balance"
                     ],
                     "type": 0
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "new",
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink_primitives",
                  "ConstructorResult"
               ],
               "type": 1
            },
            "selector": "0x9bae9d5e"
         }
      ],
      "docs": [],
      "environment": {
         "accountId": {
            "displayName": [
               "AccountId"
            ],
            "type": 4
         },
         "balance": {
            "displayName": [
               "Balance"
            ],
            "type": 0
         },
         "blockNumber": {
            "displayName": [
               "BlockNumber"
            ],
            "type": 15
         },
         "chainExtension": {
            "displayName": [
               "ChainExtension"
            ],
            "type": 16
         },
         "hash": {
            "displayName": [
               "Hash"
            ],
            "type": 13
         },
         "maxEventTopics": 4,
         "timestamp": {
            "displayName": [
               "Timestamp"
            ],
            "type": 14
         }
      },
      "events": [],
      "lang_error": {
         "displayName": [
            "ink",
            "LangError"
         ],
         "type": 3
      },
      "messages": [
         {
            "args": [
               {
                  "label": "owner",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "spender",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "amount",
                  "type": {
                     "displayName": [
                        "Balance"
                     ],
                     "type": 0
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "approve",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 7
            },
            "selector": "0x681266a0"
         },
         {
            "args": [
               {
                  "label": "from",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "TransferFromInput1"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "to",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "TransferFromInput2"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "value",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "TransferFromInput3"
                     ],
                     "type": 0
                  }
               },
               {
                  "label": "data",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "TransferFromInput4"
                     ],
                     "type": 11
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "PSP22::transfer_from",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 7
            },
            "selector": "0x54b3c76e"
         },
         {
            "args": [
               {
                  "label": "spender",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "IncreaseAllowanceInput1"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "delta_value",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "IncreaseAllowanceInput2"
                     ],
                     "type": 0
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "PSP22::increase_allowance",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 7
            },
            "selector": "0x96d6b57a"
         },
         {
            "args": [
               {
                  "label": "spender",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "ApproveInput1"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "value",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "ApproveInput2"
                     ],
                     "type": 0
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "PSP22::approve",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 7
            },
            "selector": "0xb20f1bbd"
         },
         {
            "args": [
               {
                  "label": "owner",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "AllowanceInput1"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "spender",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "AllowanceInput2"
                     ],
                     "type": 4
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "PSP22::allowance",
            "mutates": false,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 12
            },
            "selector": "0x4d47d921"
         },
         {
            "args": [],
            "default": false,
            "docs": [],
            "label": "PSP22::total_supply",
            "mutates": false,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 12
            },
            "selector": "0x162df8c2"
         },
         {
            "args": [
               {
                  "label": "spender",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "DecreaseAllowanceInput1"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "delta_value",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "DecreaseAllowanceInput2"
                     ],
                     "type": 0
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "PSP22::decrease_allowance",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 7
            },
            "selector": "0xfecb57d5"
         },
         {
            "args": [
               {
                  "label": "owner",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "BalanceOfInput1"
                     ],
                     "type": 4
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "PSP22::balance_of",
            "mutates": false,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 12
            },
            "selector": "0x6568382f"
         },
         {
            "args": [
               {
                  "label": "to",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "TransferInput1"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "value",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "TransferInput2"
                     ],
                     "type": 0
                  }
               },
               {
                  "label": "data",
                  "type": {
                     "displayName": [
                        "psp22_external",
                        "TransferInput3"
                     ],
                     "type": 11
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "PSP22::transfer",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 7
            },
            "selector": "0xdb20f9f5"
         }
      ]
   },
   "storage": {
      "root": {
         "layout": {
            "struct": {
               "fields": [
                  {
                     "layout": {
                        "struct": {
                           "fields": [
                              {
                                 "layout": {
                                    "root": {
                                       "layout": {
                                          "leaf": {
                                             "key": "0x270a8fc3",
                                             "ty": 0
                                          }
                                       },
                                       "root_key": "0x270a8fc3"
                                    }
                                 },
                                 "name": "supply"
                              },
                              {
                                 "layout": {
                                    "root": {
                                       "layout": {
                                          "leaf": {
                                             "key": "0xc2664826",
                                             "ty": 0
                                          }
                                       },
                                       "root_key": "0xc2664826"
                                    }
                                 },
                                 "name": "balances"
                              },
                              {
                                 "layout": {
                                    "root": {
                                       "layout": {
                                          "leaf": {
                                             "key": "0xf8d71e22",
                                             "ty": 0
                                          }
                                       },
                                       "root_key": "0xf8d71e22"
                                    }
                                 },
                                 "name": "allowances"
                              }
                           ],
                           "name": "Data"
                        }
                     },
                     "name": "psp22"
                  }
               ],
               "name": "D9USDT"
            }
         },
         "root_key": "0x00000000"
      }
   },
   "types": [
      {
         "id": 0,
         "type": {
            "def": {
               "primitive": "u128"
            }
         }
      },
      {
         "id": 1,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 2
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 3
                           }
                        ],
                        "index": 1,
                        "name": "Err"
                     }
                  ]
               }
            },
            "params": [
               {
                  "name": "T",
                  "type": 2
               },
               {
                  "name": "E",
                  "type": 3
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 2,
         "type": {
            "def": {
               "tuple": []
            }
         }
      },
      {
         "id": 3,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "index": 1,
                        "name": "CouldNotReadInput"
                     }
                  ]
               }
            },
            "path": [
               "ink_primitives",
               "LangError"
            ]
         }
      },
      {
         "id": 4,
         "type": {
            "def": {
               "composite": {
                  "fields": [
                     {
                        "type": 5,
                        "typeName": "[u8; 32]"
                     }
                  ]
               }
            },
            "path": [
               "ink_primitives",
               "types",
               "AccountId"
            ]
         }
      },
      {
         "id": 5,
         "type": {
            "def": {
               "array": {
                  "len": 32,
                  "type": 6
               }
            }
         }
      },
      {
         "id": 6,
         "type": {
            "def": {
               "primitive": "u8"
            }
         }
      },
      {
         "id": 7,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 8
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 3
                           }
                        ],
                        "index": 1,
                        "name": "Err"
                     }
                  ]
               }
            },
            "params": [
               {
                  "name": "T",
                  "type": 8
               },
               {
                  "name": "E",
                  "type": 3
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 8,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 2
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 9
                           }
                        ],
                        "index": 1,
                        "name": "Err"
                     }
                  ]
               }
            },
            "params": [
               {
                  "name": "T",
                  "type": 2
               },
               {
                  "name": "E",
                  "type": 9
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 9,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 10,
                              "typeName": "String"
                           }
                        ],
                        "index": 0,
                        "name": "Custom"
                     },
                     {
                        "index": 1,
                        "name": "InsufficientBalance"
                     },
                     {
                        "index": 2,
                        "name": "InsufficientAllowance"
                     },
                     {
                        "index": 3,
                        "name": "ZeroRecipientAddress"
                     },
                     {
                        "index": 4,
                        "name": "ZeroSenderAddress"
                     },
                     {
                        "fields": [
                           {
                              "type": 10,
                              "typeName": "String"
                           }
                        ],
                        "index": 5,
                        "name": "SafeTransferCheckFailed"
                     }
                  ]
               }
            },
            "path": [
               "openbrush_contracts",
               "traits",
               "errors",
               "psp22",
               "PSP22Error"
            ]
         }
      },
      {
         "id": 10,
         "type": {
            "def": {
               "primitive": "str"
            }
         }
      },
      {
         "id": 11,
         "type": {
            "def": {
               "sequence": {
                  "type": 6
               }
            }
         }
      },
      {
         "id": 12,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 0
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 3
                           }
                        ],
                        "index": 1,
                        "name": "Err"
                     }
                  ]
               }
            },
            "params": [
               {
                  "name": "T",
                  "type": 0
               },
               {
                  "name": "E",
                  "type": 3
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 13,
         "type": {
            "def": {
               "composite": {
                  "fields": [
                     {
                        "type": 5,
                        "typeName": "[u8; 32]"
                     }
                  ]
               }
            },
            "path": [
               "ink_primitives",
               "types",
               "Hash"
            ]
         }
      },
      {
         "id": 14,
         "type": {
            "def": {
               "primitive": "u64"
            }
         }
      },
      {
         "id": 15,
         "type": {
            "def": {
               "primitive": "u32"
            }
         }
      },
      {
         "id": 16,
         "type": {
            "def": {
               "variant": {}
            },
            "path": [
               "ink_env",
               "types",
               "NoChainExtension"
            ]
         }
      }
   ],
   "version": "4"
}