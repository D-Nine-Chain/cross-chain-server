export const crossChainD9Contract = {
   "source": {
      "hash": "0x166a29e598da12ac7f721b82d205edb02ecd486a0648597359f53acff7f323bd",
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
      "name": "cross_chain_transfer",
      "version": "0.1.0",
      "authors": [
         "[your_name] <[your_email]>"
      ]
   },
   "spec": {
      "constructors": [
         {
            "args": [
               {
                  "label": "usdt_contract",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               }
            ],
            "default": false,
            "docs": [
               "Constructor that initializes the `bool` value to the given `init_value`."
            ],
            "label": "new",
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink_primitives",
                  "ConstructorResult"
               ],
               "type": 6
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
            "type": 1
         },
         "balance": {
            "displayName": [
               "Balance"
            ],
            "type": 5
         },
         "blockNumber": {
            "displayName": [
               "BlockNumber"
            ],
            "type": 22
         },
         "chainExtension": {
            "displayName": [
               "ChainExtension"
            ],
            "type": 23
         },
         "hash": {
            "displayName": [
               "Hash"
            ],
            "type": 21
         },
         "maxEventTopics": 4,
         "timestamp": {
            "displayName": [
               "Timestamp"
            ],
            "type": 0
         }
      },
      "events": [
         {
            "args": [
               {
                  "docs": [],
                  "indexed": true,
                  "label": "transaction_id",
                  "type": {
                     "displayName": [
                        "String"
                     ],
                     "type": 4
                  }
               },
               {
                  "docs": [],
                  "indexed": true,
                  "label": "from_address",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               },
               {
                  "docs": [],
                  "indexed": true,
                  "label": "amount",
                  "type": {
                     "displayName": [
                        "u128"
                     ],
                     "type": 5
                  }
               }
            ],
            "docs": [],
            "label": "CommitCreated"
         },
         {
            "args": [
               {
                  "docs": [],
                  "indexed": true,
                  "label": "tx_id",
                  "type": {
                     "displayName": [
                        "String"
                     ],
                     "type": 4
                  }
               },
               {
                  "docs": [],
                  "indexed": true,
                  "label": "from_address",
                  "type": {
                     "displayName": [],
                     "type": 16
                  }
               },
               {
                  "docs": [],
                  "indexed": true,
                  "label": "to_address",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               },
               {
                  "docs": [],
                  "indexed": true,
                  "label": "amount",
                  "type": {
                     "displayName": [
                        "u128"
                     ],
                     "type": 5
                  }
               }
            ],
            "docs": [],
            "label": "DispatchCompleted"
         }
      ],
      "lang_error": {
         "displayName": [
            "ink",
            "LangError"
         ],
         "type": 8
      },
      "messages": [
         {
            "args": [
               {
                  "label": "user_id",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "generate_tx_id",
            "mutates": false,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 9
            },
            "selector": "0xfc9bd990"
         },
         {
            "args": [
               {
                  "label": "user_id",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               }
            ],
            "default": false,
            "docs": [
               " get last transaction. function is called on both chains."
            ],
            "label": "get_last_transaction",
            "mutates": false,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 10
            },
            "selector": "0x7081dd38"
         },
         {
            "args": [
               {
                  "label": "user_id",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               }
            ],
            "default": false,
            "docs": [
               " Helper function to get the current transaction nonce for a user"
            ],
            "label": "get_current_nonce",
            "mutates": false,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 17
            },
            "selector": "0xe5219595"
         },
         {
            "args": [
               {
                  "label": "tx_id",
                  "type": {
                     "displayName": [
                        "String"
                     ],
                     "type": 4
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "get_transaction",
            "mutates": false,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 10
            },
            "selector": "0xfeeb858e"
         },
         {
            "args": [
               {
                  "label": "transaction_id",
                  "type": {
                     "displayName": [
                        "String"
                     ],
                     "type": 4
                  }
               },
               {
                  "label": "from_address",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               },
               {
                  "label": "to_address",
                  "type": {
                     "displayName": [],
                     "type": 16
                  }
               },
               {
                  "label": "amount",
                  "type": {
                     "displayName": [
                        "Balance"
                     ],
                     "type": 5
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "asset_commit",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 18
            },
            "selector": "0xc2ad66bb"
         },
         {
            "args": [
               {
                  "label": "from_address",
                  "type": {
                     "displayName": [],
                     "type": 16
                  }
               },
               {
                  "label": "to_address",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               },
               {
                  "label": "amount",
                  "type": {
                     "displayName": [
                        "Balance"
                     ],
                     "type": 5
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "asset_dispatch",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 18
            },
            "selector": "0x535b25a5"
         },
         {
            "args": [
               {
                  "label": "new_controller",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "change_controller",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 6
            },
            "selector": "0xc92e346d"
         },
         {
            "args": [
               {
                  "label": "new_admin",
                  "type": {
                     "displayName": [
                        "AccountId"
                     ],
                     "type": 1
                  }
               }
            ],
            "default": false,
            "docs": [],
            "label": "relinquish_admin",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 6
            },
            "selector": "0xda7dbaee"
         },
         {
            "args": [],
            "default": false,
            "docs": [],
            "label": "claim_admin",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 6
            },
            "selector": "0xa8656c6c"
         },
         {
            "args": [],
            "default": false,
            "docs": [],
            "label": "cancel_admin_transfer",
            "mutates": true,
            "payable": false,
            "returnType": {
               "displayName": [
                  "ink",
                  "MessageResult"
               ],
               "type": 6
            },
            "selector": "0xd45e3d78"
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
                        "root": {
                           "layout": {
                              "leaf": {
                                 "key": "0x8eb615e1",
                                 "ty": 0
                              }
                           },
                           "root_key": "0x8eb615e1"
                        }
                     },
                     "name": "user_transaction_nonce"
                  },
                  {
                     "layout": {
                        "leaf": {
                           "key": "0x00000000",
                           "ty": 1
                        }
                     },
                     "name": "admin"
                  },
                  {
                     "layout": {
                        "leaf": {
                           "key": "0x00000000",
                           "ty": 1
                        }
                     },
                     "name": "new_admin"
                  },
                  {
                     "layout": {
                        "leaf": {
                           "key": "0x00000000",
                           "ty": 1
                        }
                     },
                     "name": "controller"
                  },
                  {
                     "layout": {
                        "leaf": {
                           "key": "0x00000000",
                           "ty": 1
                        }
                     },
                     "name": "usdt_contract"
                  },
                  {
                     "layout": {
                        "root": {
                           "layout": {
                              "struct": {
                                 "fields": [
                                    {
                                       "layout": {
                                          "leaf": {
                                             "key": "0x82645412",
                                             "ty": 4
                                          }
                                       },
                                       "name": "transaction_id"
                                    },
                                    {
                                       "layout": {
                                          "enum": {
                                             "dispatchKey": "0x82645412",
                                             "name": "TransactionType",
                                             "variants": {
                                                "0": {
                                                   "fields": [],
                                                   "name": "Commit"
                                                },
                                                "1": {
                                                   "fields": [],
                                                   "name": "Transfer"
                                                }
                                             }
                                          }
                                       },
                                       "name": "transaction_type"
                                    },
                                    {
                                       "layout": {
                                          "enum": {
                                             "dispatchKey": "0x82645412",
                                             "name": "Chain",
                                             "variants": {
                                                "0": {
                                                   "fields": [],
                                                   "name": "D9"
                                                },
                                                "1": {
                                                   "fields": [],
                                                   "name": "TRON"
                                                }
                                             }
                                          }
                                       },
                                       "name": "from_chain"
                                    },
                                    {
                                       "layout": {
                                          "enum": {
                                             "dispatchKey": "0x82645412",
                                             "name": "AddressType",
                                             "variants": {
                                                "0": {
                                                   "fields": [
                                                      {
                                                         "layout": {
                                                            "array": {
                                                               "layout": {
                                                                  "leaf": {
                                                                     "key": "0x82645412",
                                                                     "ty": 3
                                                                  }
                                                               },
                                                               "len": 21,
                                                               "offset": "0x82645412"
                                                            }
                                                         },
                                                         "name": "0"
                                                      }
                                                   ],
                                                   "name": "Tron"
                                                },
                                                "1": {
                                                   "fields": [
                                                      {
                                                         "layout": {
                                                            "leaf": {
                                                               "key": "0x82645412",
                                                               "ty": 1
                                                            }
                                                         },
                                                         "name": "0"
                                                      }
                                                   ],
                                                   "name": "D9"
                                                }
                                             }
                                          }
                                       },
                                       "name": "from_address"
                                    },
                                    {
                                       "layout": {
                                          "enum": {
                                             "dispatchKey": "0x82645412",
                                             "name": "AddressType",
                                             "variants": {
                                                "0": {
                                                   "fields": [
                                                      {
                                                         "layout": {
                                                            "array": {
                                                               "layout": {
                                                                  "leaf": {
                                                                     "key": "0x82645412",
                                                                     "ty": 3
                                                                  }
                                                               },
                                                               "len": 21,
                                                               "offset": "0x82645412"
                                                            }
                                                         },
                                                         "name": "0"
                                                      }
                                                   ],
                                                   "name": "Tron"
                                                },
                                                "1": {
                                                   "fields": [
                                                      {
                                                         "layout": {
                                                            "leaf": {
                                                               "key": "0x82645412",
                                                               "ty": 1
                                                            }
                                                         },
                                                         "name": "0"
                                                      }
                                                   ],
                                                   "name": "D9"
                                                }
                                             }
                                          }
                                       },
                                       "name": "to_address"
                                    },
                                    {
                                       "layout": {
                                          "leaf": {
                                             "key": "0x82645412",
                                             "ty": 5
                                          }
                                       },
                                       "name": "amount"
                                    },
                                    {
                                       "layout": {
                                          "leaf": {
                                             "key": "0x82645412",
                                             "ty": 0
                                          }
                                       },
                                       "name": "timestamp"
                                    }
                                 ],
                                 "name": "Transaction"
                              }
                           },
                           "root_key": "0x82645412"
                        }
                     },
                     "name": "transactions"
                  }
               ],
               "name": "CrossChainTransfer"
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
               "primitive": "u64"
            }
         }
      },
      {
         "id": 1,
         "type": {
            "def": {
               "composite": {
                  "fields": [
                     {
                        "type": 2,
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
         "id": 2,
         "type": {
            "def": {
               "array": {
                  "len": 32,
                  "type": 3
               }
            }
         }
      },
      {
         "id": 3,
         "type": {
            "def": {
               "primitive": "u8"
            }
         }
      },
      {
         "id": 4,
         "type": {
            "def": {
               "primitive": "str"
            }
         }
      },
      {
         "id": 5,
         "type": {
            "def": {
               "primitive": "u128"
            }
         }
      },
      {
         "id": 6,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 7
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 8
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
                  "type": 7
               },
               {
                  "name": "E",
                  "type": 8
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 7,
         "type": {
            "def": {
               "tuple": []
            }
         }
      },
      {
         "id": 8,
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
         "id": 9,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 4
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 8
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
                  "type": 4
               },
               {
                  "name": "E",
                  "type": 8
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 10,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 11
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 8
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
                  "type": 11
               },
               {
                  "name": "E",
                  "type": 8
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 11,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "index": 0,
                        "name": "None"
                     },
                     {
                        "fields": [
                           {
                              "type": 12
                           }
                        ],
                        "index": 1,
                        "name": "Some"
                     }
                  ]
               }
            },
            "params": [
               {
                  "name": "T",
                  "type": 12
               }
            ],
            "path": [
               "Option"
            ]
         }
      },
      {
         "id": 12,
         "type": {
            "def": {
               "composite": {
                  "fields": [
                     {
                        "name": "transaction_id",
                        "type": 4,
                        "typeName": "String"
                     },
                     {
                        "name": "transaction_type",
                        "type": 13,
                        "typeName": "TransactionType"
                     },
                     {
                        "name": "from_chain",
                        "type": 14,
                        "typeName": "Chain"
                     },
                     {
                        "name": "from_address",
                        "type": 15,
                        "typeName": "AddressType"
                     },
                     {
                        "name": "to_address",
                        "type": 15,
                        "typeName": "AddressType"
                     },
                     {
                        "name": "amount",
                        "type": 5,
                        "typeName": "u128"
                     },
                     {
                        "name": "timestamp",
                        "type": 0,
                        "typeName": "Timestamp"
                     }
                  ]
               }
            },
            "path": [
               "cross_chain_transfer",
               "cross_chain_transfer",
               "Transaction"
            ]
         }
      },
      {
         "id": 13,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "index": 0,
                        "name": "Commit"
                     },
                     {
                        "index": 1,
                        "name": "Transfer"
                     }
                  ]
               }
            },
            "path": [
               "cross_chain_transfer",
               "cross_chain_transfer",
               "TransactionType"
            ]
         }
      },
      {
         "id": 14,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "index": 0,
                        "name": "D9"
                     },
                     {
                        "index": 1,
                        "name": "TRON"
                     }
                  ]
               }
            },
            "path": [
               "cross_chain_transfer",
               "cross_chain_transfer",
               "Chain"
            ]
         }
      },
      {
         "id": 15,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 16,
                              "typeName": "[u8; 21]"
                           }
                        ],
                        "index": 0,
                        "name": "Tron"
                     },
                     {
                        "fields": [
                           {
                              "type": 1,
                              "typeName": "AccountId"
                           }
                        ],
                        "index": 1,
                        "name": "D9"
                     }
                  ]
               }
            },
            "path": [
               "cross_chain_transfer",
               "cross_chain_transfer",
               "AddressType"
            ]
         }
      },
      {
         "id": 16,
         "type": {
            "def": {
               "array": {
                  "len": 21,
                  "type": 3
               }
            }
         }
      },
      {
         "id": 17,
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
                              "type": 8
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
                  "type": 8
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 18,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 19
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 8
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
                  "type": 19
               },
               {
                  "name": "E",
                  "type": 8
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 19,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 4
                           }
                        ],
                        "index": 0,
                        "name": "Ok"
                     },
                     {
                        "fields": [
                           {
                              "type": 20
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
                  "type": 4
               },
               {
                  "name": "E",
                  "type": 20
               }
            ],
            "path": [
               "Result"
            ]
         }
      },
      {
         "id": 20,
         "type": {
            "def": {
               "variant": {
                  "variants": [
                     {
                        "fields": [
                           {
                              "type": 1,
                              "typeName": "AccountId"
                           }
                        ],
                        "index": 0,
                        "name": "Restrictedto"
                     },
                     {
                        "index": 1,
                        "name": "AmountMustBeGreaterThanZero"
                     },
                     {
                        "index": 2,
                        "name": "TransactionAlreadyExists"
                     },
                     {
                        "fields": [
                           {
                              "type": 14,
                              "typeName": "Chain"
                           }
                        ],
                        "index": 3,
                        "name": "InvalidAddressLength"
                     },
                     {
                        "index": 4,
                        "name": "InvalidHexString"
                     },
                     {
                        "index": 5,
                        "name": "DecodedHexLengthInvalid"
                     },
                     {
                        "index": 6,
                        "name": "TronAddressInvalidByteLength"
                     },
                     {
                        "index": 7,
                        "name": "InvalidTronAddress"
                     },
                     {
                        "index": 8,
                        "name": "TronDecodeError"
                     },
                     {
                        "index": 9,
                        "name": "UnableToSendUSDT"
                     },
                     {
                        "index": 10,
                        "name": "InsufficientAllowance"
                     },
                     {
                        "index": 11,
                        "name": "UserUSDTBalanceInsufficient"
                     }
                  ]
               }
            },
            "path": [
               "cross_chain_transfer",
               "cross_chain_transfer",
               "Error"
            ]
         }
      },
      {
         "id": 21,
         "type": {
            "def": {
               "composite": {
                  "fields": [
                     {
                        "type": 2,
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
         "id": 22,
         "type": {
            "def": {
               "primitive": "u32"
            }
         }
      },
      {
         "id": 23,
         "type": {
            "def": {
               "variant": {}
            },
            "path": [
               "d9_chain_extension",
               "D9ChainExtension"
            ]
         }
      }
   ],
   "version": "4"
} 