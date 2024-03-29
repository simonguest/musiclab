# MusicLab Prototype

**Update: MusicLab is actively being developed as a Code.org incubator project! You can access the latest version of MusicLab and provide feedback [here](https://studio.code.org/musiclab).** 

MusicLab is a prototype that shows how students (grades 5-12) can use block-based programming to create their own audio and music tracks. 

You can access the prototype here: https://simonguest.github.io/musiclab/

The prototype supports a small selection of samples, notes, chords, and basic synths. Students use computer science concepts such as conditionals, loops, logic, variables, and functions to create tracks, put together note sequences, and other musical concepts.

Under the covers, the prototype uses [Google's Blockly](https://github.com/google/blockly) and makes direct calls to the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) for all audio operations. All public domain samples and effects sourced from [freesound.org](https://freesound.org/).

Example workspaces can be found in the "Example Workspaces..." dropdown at the top of the screen.

![Screenshot 2023-01-31 at 8 28 17 PM](https://user-images.githubusercontent.com/769225/215948389-bd661ab6-ba1a-4325-87e5-f7be8dd36247.png)

# Building and Running Locally

To run the prototype locally, clone the repo and host either through an IDE (e.g., VS Code Live Server) or using a simple Python web server: ```python3 -m http.server```
