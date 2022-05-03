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
                    "type":"clip"
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
                }
            ]
        },
        {
            "kind":"category",
            "name":"Drums",
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
            "kind": "category",
            "name": "Variables",
            "custom": "VARIABLE"
        }
    ]
};