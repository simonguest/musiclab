export let toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Loops",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_repeat_ext",
                    "inputs": {
                        "TIMES": {
                            "shadow": {
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
                            "shadow": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 1
                                }
                            }
                        },
                        "TO": {
                            "shadow": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 10
                                }
                            }
                        },
                        "BY": {
                            "shadow": {
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
          "name":"Logic",
          "contents":[
              {
                  "kind": "block",
                  "type": "logic_compare"
              },
              {
                  "kind":"block",
                  "type":"controls_if"
              }
          ]
        },
        {
          "kind":"category",
          "name":"Math",
          "contents":[
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
                          "shadow": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 1
                              }
                          }
                      },
                      "TO": {
                          "shadow": {
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
                    "type":"track"
                },
                {
                    "kind":"block",
                    "type":"trackOnKeyPress"
                },
                {
                    "kind":"block",
                    "type":"playSample"
                },
                {
                    "kind":"block",
                    "type":"playSampleUntilEnd"
                },
                {
                    "kind":"block",
                    "type":"playNote",
                    "inputs": {
                        "DURATION": {
                            "shadow": {
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
                    "type":"playNoteUntilEnd",
                    "inputs": {
                        "DURATION": {
                            "shadow": {
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
                    "type":"playChord",
                    "inputs": {
                        "DURATION": {
                            "shadow": {
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
                    "type":"playChordUntilEnd",
                    "inputs": {
                        "DURATION": {
                            "shadow": {
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
                    "type":"playPianoKey",
                    "inputs": {
                        "KEY": {
                            "shadow": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 40
                                }
                            }
                        },
                        "DURATION": {
                            "shadow": {
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
                    "type":"playPianoKeyUntilEnd",
                    "inputs": {
                        "KEY": {
                            "shadow": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": 40
                                }
                            }
                        },
                        "DURATION": {
                            "shadow": {
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
                    "type":"sleep",
                    "inputs": {
                        "DURATION": {
                            "shadow": {
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
                            "shadow": {
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
                    "type":"setSynth"
                },
                {
                    "kind":"block",
                    "type":"volume",
                    "inputs": {
                        "VOLUME": {
                            "shadow": {
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
                    "type":"pitch",
                    "inputs": {
                        "PITCH": {
                            "shadow": {
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
                    "type":"bpm",
                    "inputs": {
                        "BPM": {
                            "shadow": {
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
                            "shadow": {
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
          "name":"Synth Library",
          "contents": [
              {
                  "kind":"block",
                  "type":"mystic"
              },
              {
                  "kind":"block",
                  "type":"pluck"
              },
              {
                  "kind":"block",
                  "type":"piano"
              },
              {
                  "kind":"block",
                  "type":"violin"
              },
              {
              "kind": "block",
              "type": "customSynth",
                  "inputs": {
                      "ATTACKLEVEL": {
                          "shadow": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 1
                              }
                          }
                      },
                      "ATTACKDURATION": {
                          "shadow": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 0.01
                              }
                          }
                      },
                      "DECAYLEVEL": {
                          "shadow": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 0.35
                              }
                          }
                      },
                      "DECAYDURATION": {
                          "shadow": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 0.1
                              }
                          }
                      },
                      "SUSTAINDURATION": {
                          "shadow": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 0.1
                              }
                          }
                      },
                      "RELEASEDURATION": {
                          "shadow": {
                              "type": "math_number",
                              "fields": {
                                  "NUM": 0.3
                              }
                          }
                      }
                  }
          }
          ]
        },
        {
          "kind":"category",
          "name":"Sample Library",
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
                  "name":"Effects",
                  "contents": [
                      {
                          "kind":"block",
                          "type":"choir"
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
        },
        {
            "kind": "category",
            "name": "Functions",
            "custom": "PROCEDURE"
        }

    ]
};