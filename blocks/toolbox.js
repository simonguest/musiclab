export let toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Loops",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_if"
                },
                {
                    "kind": "block",
                    "type": "controls_repeat_ext",
                    "inputs": {
                        "TIMES": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        }
                    }
                },
                {
                    "kind": "block",
                    "type": "controls_for",
                    "inputs": {
                        "FROM": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        },
                        "TO": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 10
                                }
                            }
                        },
                        "BY": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        },
                    }
                }
            ]
        },
        {
          "kind":"category",
          "name":"Math",
          "contents":[
              {
                  "kind": "block",
                  "type": "logic_compare"
              },
              {
                  "kind": "block",
                  "type": "math_number"
              },
              {
                  "kind": "block",
                  "type": "math_arithmetic"
              },
              {
                  "kind": "block",
                  "type": "math_modulo"
              },
              {
                  "kind":"block",
                  "type":"math_random_int",
                  "inputs": {
                      "FROM": {
                          "block": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 1
                              }
                          }
                      },
                      "TO": {
                          "block": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 100
                              }
                          }
                      }
                  }
              }
          ]
        },
        {
            "kind":"category",
            "name":"Music Control",
            "contents": [
                {
                    "kind":"block",
                    "type":"playSample"
                },
                {
                    "kind":"block",
                    "type":"playNote",
                    "inputs": {
                        "DURATION": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        }
                    }
                },
                {
                    "kind":"block",
                    "type":"track"
                },
                {
                    "kind":"block",
                    "type":"sleep",
                    "inputs": {
                        "DURATION": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        }
                    }
                },
                {
                    "kind":"block",
                    "type":"sleepBeats",
                    "inputs": {
                        "DURATION": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        }
                    }
                },
                {
                    "kind":"block",
                    "type":"volume",
                    "inputs": {
                        "VOLUME": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 100
                                }
                            }
                        }
                    }
                },
                {
                    "kind":"block",
                    "type":"bpm",
                    "inputs": {
                        "BPM": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 100
                                }
                            }
                        }
                    }
                },
                {
                    "kind":"block",
                    "type":"filter",
                    "inputs": {
                        "FILTER": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 100
                                }
                            }
                        }
                    }
                }
            ]
        },
        {
          "kind":"category",
          "name":"Samples",
          "contents": [
              {
                  "kind":"category",
                  "name":"Percussion",
                  "contents": [
                      {
                          "kind":"block",
                          "type":"snare"
                      },
                      {
                          "kind":"block",
                          "type":"kick"
                      },{
                          "kind":"block",
                          "type":"hihat"
                      }
                  ]
              },
              {
                  "kind":"category",
                  "name":"Looping",
                  "contents": [
                      {
                          "kind":"block",
                          "type":"techno"
                      }
                  ]
              }
          ]
        },
        {
            "kind": "category",
            "name": "Variables",
            "custom": "VARIABLE"
        }
    ]
};