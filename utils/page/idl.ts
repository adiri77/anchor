export type TicTacToe =
    {
        "version": "0.1.0",
        "name": "quick_tac_toe",
        "instructions": [
          {
            "name": "init",
            "accounts": [
              {
                "name": "mint",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "payer",
                "isMut": true,
                "isSigner": true
              },
              {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "rent",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "programState",
                "isMut": true,
                "isSigner": false
              }
            ],
            "args": []
          },
          {
            "name": "createPlayer",
            "accounts": [
              {
                "name": "player",
                "isMut": true,
                "isSigner": true
              },
              {
                "name": "playerPda",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "mint",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "playerTokenAccount",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "associatedTokenProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
              }
            ],
            "args": []
          },
          {
            "name": "createGame",
            "accounts": [
              {
                "name": "game",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "playerX",
                "isMut": true,
                "isSigner": true
              },
              {
                "name": "playerPda",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "mint",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "playerTokenAccount",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "programState",
                "isMut": true,
                "isSigner": false
              }
            ],
            "args": [
              {
                "name": "gameId",
                "type": "u64"
              }
            ]
          },
          {
            "name": "joinGame",
            "accounts": [
              {
                "name": "game",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "playerO",
                "isMut": true,
                "isSigner": true
              },
              {
                "name": "playerPda",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "mint",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "playerTokenAccount",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
              }
            ],
            "args": []
          },
          {
            "name": "play",
            "accounts": [
              {
                "name": "player",
                "isMut": true,
                "isSigner": true
              },
              {
                "name": "playerRecord",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "otherPlayerRecord",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "game",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
              }
            ],
            "args": [
              {
                "name": "square",
                "type": {
                  "defined": "Square"
                }
              }
            ]
          },
          {
            "name": "claimReward",
            "accounts": [
              {
                "name": "player",
                "isMut": true,
                "isSigner": true
              },
              {
                "name": "playerPda",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "metadataAccount",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "editionAccount",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "mintAccount",
                "isMut": true,
                "isSigner": true
              },
              {
                "name": "associatedTokenAccount",
                "isMut": true,
                "isSigner": false
              },
              {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "tokenMetadataProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "associatedTokenProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
              },
              {
                "name": "rent",
                "isMut": false,
                "isSigner": false
              }
            ],
            "args": []
          }
        ],
        "accounts": [
          {
            "name": "Game",
            "type": {
              "kind": "struct",
              "fields": [
                {
                  "name": "id",
                  "type": "u64"
                },
                {
                  "name": "playerX",
                  "type": "publicKey"
                },
                {
                  "name": "playerO",
                  "type": "publicKey"
                },
                {
                  "name": "board",
                  "type": {
                    "array": [
                      {
                        "array": [
                          {
                            "option": {
                              "defined": "Sign"
                            }
                          },
                          3
                        ]
                      },
                      3
                    ]
                  }
                },
                {
                  "name": "state",
                  "type": {
                    "defined": "GameState"
                  }
                },
                {
                  "name": "turn",
                  "type": "u8"
                },
                {
                  "name": "bump",
                  "type": "u8"
                },
                {
                  "name": "winner",
                  "type": {
                    "option": "publicKey"
                  }
                }
              ]
            }
          },
          {
            "name": "Player",
            "type": {
              "kind": "struct",
              "fields": [
                {
                  "name": "auth",
                  "type": "publicKey"
                },
                {
                  "name": "record",
                  "type": {
                    "defined": "Record"
                  }
                },
                {
                  "name": "airdropReceived",
                  "type": "bool"
                },
                {
                  "name": "rewardClaimed",
                  "type": "bool"
                },
                {
                  "name": "bump",
                  "type": "u8"
                }
              ]
            }
          },
          {
            "name": "ProgramState",
            "type": {
              "kind": "struct",
              "fields": [
                {
                  "name": "currentVersion",
                  "type": "u64"
                },
                {
                  "name": "currentGameId",
                  "type": "u64"
                },
                {
                  "name": "bump",
                  "type": "u8"
                }
              ]
            }
          }
        ],
        "types": [
          {
            "name": "Square",
            "type": {
              "kind": "struct",
              "fields": [
                {
                  "name": "row",
                  "type": "u8"
                },
                {
                  "name": "column",
                  "type": "u8"
                }
              ]
            }
          },
          {
            "name": "Record",
            "type": {
              "kind": "struct",
              "fields": [
                {
                  "name": "wins",
                  "type": "u8"
                },
                {
                  "name": "losses",
                  "type": "u8"
                },
                {
                  "name": "ties",
                  "type": "u8"
                }
              ]
            }
          },
          {
            "name": "GameState",
            "type": {
              "kind": "enum",
              "variants": [
                {
                  "name": "NotStarted"
                },
                {
                  "name": "Active"
                },
                {
                  "name": "Tie"
                },
                {
                  "name": "Won"
                }
              ]
            }
          },
          {
            "name": "Sign",
            "type": {
              "kind": "enum",
              "variants": [
                {
                  "name": "X"
                },
                {
                  "name": "O"
                }
              ]
            }
          }
        ],
        "errors": [
          {
            "code": 6000,
            "name": "SquareOffBoard",
            "msg": "Square is not inside 3x3 board"
          },
          {
            "code": 6001,
            "name": "SquareAlreadySet",
            "msg": "Someone has already played this square"
          },
          {
            "code": 6002,
            "name": "GameNotActive",
            "msg": "The game is not active"
          },
          {
            "code": 6003,
            "name": "NotPlayersTurn",
            "msg": "Not your turn"
          },
          {
            "code": 6004,
            "name": "GameAlreadyStarted",
            "msg": "This game has already started"
          },
          {
            "code": 6005,
            "name": "InvalidPlayer",
            "msg": "Invalid Player"
          },
          {
            "code": 6006,
            "name": "RewardAlreadyClaimed",
            "msg": "Reward already claimed"
          },
          {
            "code": 6007,
            "name": "NotEligibleForReward",
            "msg": "Not eligible for reward"
          }
        ]
      }



export const IDL: TicTacToe = {
    "version": "0.1.0",
    "name": "quick_tac_toe",
    "instructions": [
      {
        "name": "init",
        "accounts": [
          {
            "name": "mint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "payer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "programState",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "createPlayer",
        "accounts": [
          {
            "name": "player",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "playerPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "createGame",
        "accounts": [
          {
            "name": "game",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerX",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "playerPda",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "programState",
            "isMut": true,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "gameId",
            "type": "u64"
          }
        ]
      },
      {
        "name": "joinGame",
        "accounts": [
          {
            "name": "game",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerO",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "playerPda",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "mint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "playerTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "play",
        "accounts": [
          {
            "name": "player",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "playerRecord",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "otherPlayerRecord",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "game",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "square",
            "type": {
              "defined": "Square"
            }
          }
        ]
      },
      {
        "name": "claimReward",
        "accounts": [
          {
            "name": "player",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "playerPda",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "metadataAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "editionAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "associatedTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenMetadataProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "Game",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "id",
              "type": "u64"
            },
            {
              "name": "playerX",
              "type": "publicKey"
            },
            {
              "name": "playerO",
              "type": "publicKey"
            },
            {
              "name": "board",
              "type": {
                "array": [
                  {
                    "array": [
                      {
                        "option": {
                          "defined": "Sign"
                        }
                      },
                      3
                    ]
                  },
                  3
                ]
              }
            },
            {
              "name": "state",
              "type": {
                "defined": "GameState"
              }
            },
            {
              "name": "turn",
              "type": "u8"
            },
            {
              "name": "bump",
              "type": "u8"
            },
            {
              "name": "winner",
              "type": {
                "option": "publicKey"
              }
            }
          ]
        }
      },
      {
        "name": "Player",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "auth",
              "type": "publicKey"
            },
            {
              "name": "record",
              "type": {
                "defined": "Record"
              }
            },
            {
              "name": "airdropReceived",
              "type": "bool"
            },
            {
              "name": "rewardClaimed",
              "type": "bool"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "ProgramState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "currentVersion",
              "type": "u64"
            },
            {
              "name": "currentGameId",
              "type": "u64"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "Square",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "row",
              "type": "u8"
            },
            {
              "name": "column",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "Record",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "wins",
              "type": "u8"
            },
            {
              "name": "losses",
              "type": "u8"
            },
            {
              "name": "ties",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "GameState",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "NotStarted"
            },
            {
              "name": "Active"
            },
            {
              "name": "Tie"
            },
            {
              "name": "Won"
            }
          ]
        }
      },
      {
        "name": "Sign",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "X"
            },
            {
              "name": "O"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "SquareOffBoard",
        "msg": "Square is not inside 3x3 board"
      },
      {
        "code": 6001,
        "name": "SquareAlreadySet",
        "msg": "Someone has already played this square"
      },
      {
        "code": 6002,
        "name": "GameNotActive",
        "msg": "The game is not active"
      },
      {
        "code": 6003,
        "name": "NotPlayersTurn",
        "msg": "Not your turn"
      },
      {
        "code": 6004,
        "name": "GameAlreadyStarted",
        "msg": "This game has already started"
      },
      {
        "code": 6005,
        "name": "InvalidPlayer",
        "msg": "Invalid Player"
      },
      {
        "code": 6006,
        "name": "RewardAlreadyClaimed",
        "msg": "Reward already claimed"
      },
      {
        "code": 6007,
        "name": "NotEligibleForReward",
        "msg": "Not eligible for reward"
      }
    ]
  }