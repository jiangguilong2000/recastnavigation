/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Recast Navigation", "index.html", [
    [ "Introduction", "md_Docs_2__1__Introduction.html", [
      [ "🚀 Features", "index.html#autotoc_md-features", null ],
      [ "⚡ Getting Started", "index.html#autotoc_md-getting-started", null ],
      [ "⚙ How it Works", "index.html#autotoc_md-how-it-works", null ],
      [ "📚 Documentation & Links", "index.html#autotoc_md-documentation--links", null ],
      [ "❤ Community", "index.html#autotoc_md-community", null ],
      [ "⚖ License", "index.html#autotoc_md-license", null ],
      [ "What is a Navmesh and how does it work?", "md_Docs_2__1__Introduction.html#what-is-a-navmesh-and-how-does-it-work", [
        [ "Agent Attributes", "md_Docs_2__1__Introduction.html#agent-attributes", null ]
      ] ],
      [ "What is a Navmesh not?", "md_Docs_2__1__Introduction.html#what-is-a-navmesh-not", null ],
      [ "What is Recast Navigation?", "md_Docs_2__1__Introduction.html#what-is-recast-navigation", null ],
      [ "High-level overview of the Recast Navmesh-Building Process", "md_Docs_2__1__Introduction.html#high-level-overview-of-the-recast-navmesh-building-process", null ]
    ] ],
    [ "Building & Integrating", "md_Docs_2__2__BuildingAndIntegrating.html", [
      [ "Building RecastDemo", "md_Docs_2__2__BuildingAndIntegrating.html#building-recastdemo", [
        [ "Windows", "md_Docs_2__2__BuildingAndIntegrating.html#windows", null ],
        [ "macOS", "md_Docs_2__2__BuildingAndIntegrating.html#macos", null ],
        [ "Linux", "md_Docs_2__2__BuildingAndIntegrating.html#linux", null ]
      ] ],
      [ "Preprocessor Defines", "md_Docs_2__2__BuildingAndIntegrating.html#preprocessor-defines", null ],
      [ "Running Unit tests", "md_Docs_2__2__BuildingAndIntegrating.html#running-unit-tests", null ],
      [ "Integration", "md_Docs_2__2__BuildingAndIntegrating.html#integration", [
        [ "Source Integration", "md_Docs_2__2__BuildingAndIntegrating.html#source-integration", null ],
        [ "Installation through vcpkg", "md_Docs_2__2__BuildingAndIntegrating.html#installation-through-vcpkg", null ]
      ] ],
      [ "Customizing Allocation Behavior", "md_Docs_2__2__BuildingAndIntegrating.html#customizing-allocation-behavior", null ],
      [ "A Note on DLL exports and C API", "md_Docs_2__2__BuildingAndIntegrating.html#a-note-on-dll-exports-and-c-api", null ]
    ] ],
    [ "FAQ", "md_Docs_2__3__FAQ.html", [
      [ "Which C++ version and features do Recast use?", "md_Docs_2__3__FAQ.html#which-c-version-and-features-do-recast-use", null ],
      [ "What coordinate system and triangle winding order does Recast use?", "md_Docs_2__3__FAQ.html#what-coordinate-system-and-triangle-winding-order-does-recast-use", null ],
      [ "Why doesn't Recast use STL/Exceptions/RTTI/C++11/my favorite C++ feature?", "md_Docs_2__3__FAQ.html#why-doesnt-recast-use-stlexceptionsrttic11my-favorite-c-feature", null ],
      [ "How do I use Recast to build a navmesh?", "md_Docs_2__3__FAQ.html#how-do-i-use-recast-to-build-a-navmesh", null ],
      [ "How do Recast and Detour handle memory allocations?", "md_Docs_2__3__FAQ.html#how-do-recast-and-detour-handle-memory-allocations", null ],
      [ "Does Recast do any logging?", "md_Docs_2__3__FAQ.html#does-recast-do-any-logging", null ],
      [ "What are the dependencies for RecastDemo?", "md_Docs_2__3__FAQ.html#what-are-the-dependencies-for-recastdemo", null ]
    ] ],
    [ "Development Roadmap", "md_Docs_2__99__Roadmap.html", [
      [ "Short Term", "md_Docs_2__99__Roadmap.html#short-term", [
        [ "Documentation & Web Presence (WIP)", "md_Docs_2__99__Roadmap.html#documentation--web-presence-wip", null ],
        [ "More explicit variable names (WIP)", "md_Docs_2__99__Roadmap.html#more-explicit-variable-names-wip", null ],
        [ "Opt-in config value validation system", "md_Docs_2__99__Roadmap.html#opt-in-config-value-validation-system", null ]
      ] ],
      [ "Medium Term", "md_Docs_2__99__Roadmap.html#medium-term", [
        [ "STB-Style Single-Header Release Packaging", "md_Docs_2__99__Roadmap.html#stb-style-single-header-release-packaging", null ],
        [ "Ensure there's a good threading story", "md_Docs_2__99__Roadmap.html#ensure-theres-a-good-threading-story", null ],
        [ "More Tests", "md_Docs_2__99__Roadmap.html#more-tests", null ],
        [ "More POD structs for clarity in internals (WIP)", "md_Docs_2__99__Roadmap.html#more-pod-structs-for-clarity-in-internals-wip", null ],
        [ "Revisit structural organization", "md_Docs_2__99__Roadmap.html#revisit-structural-organization", null ]
      ] ],
      [ "Longer-Term", "md_Docs_2__99__Roadmap.html#longer-term", [
        [ "Higher-Level APIs", "md_Docs_2__99__Roadmap.html#higher-level-apis", null ],
        [ "C API", "md_Docs_2__99__Roadmap.html#c-api", null ]
      ] ],
      [ "New Recast/Detour Functionality", "md_Docs_2__99__Roadmap.html#new-recastdetour-functionality", [
        [ "Nav Volumes & 3D Navigation", "md_Docs_2__99__Roadmap.html#nav-volumes--3d-navigation", null ],
        [ "Climbing Markup & Navigation", "md_Docs_2__99__Roadmap.html#climbing-markup--navigation", null ],
        [ "Tooling", "md_Docs_2__99__Roadmap.html#tooling", null ],
        [ "More spatial querying abilities", "md_Docs_2__99__Roadmap.html#more-spatial-querying-abilities", null ],
        [ "Auto-markup system", "md_Docs_2__99__Roadmap.html#auto-markup-system", null ],
        [ "Formations, Group behaviors", "md_Docs_2__99__Roadmap.html#formations-group-behaviors", null ],
        [ "Vehicle Navigation & Movement", "md_Docs_2__99__Roadmap.html#vehicle-navigation--movement", null ],
        [ "Crowd Simulation and Flowfield movement systems", "md_Docs_2__99__Roadmap.html#crowd-simulation-and-flowfield-movement-systems", null ]
      ] ]
    ] ],
    [ "Changelog", "md_CHANGELOG.html", [
      [ "<a href=\"https://github.com/recastnavigation/recastnavigation/compare/1.5.0...1.5.1\" >1.5.1</a> - 2016-02-22", "md_CHANGELOG.html#autotoc_md151httpsgithubcomrecastnavigationrecastnavigationcompare150151---2016-02-22", null ],
      [ "1.5.0 - 2016-01-24", "md_CHANGELOG.html#autotoc_md150---2016-01-24", null ],
      [ "1.4.0 - 2009-08-24", "md_CHANGELOG.html#autotoc_md140---2009-08-24", null ],
      [ "1.3.1 - 2009-07-24", "md_CHANGELOG.html#autotoc_md131---2009-07-24", null ],
      [ "1.3.1 - 2009-07-14", "md_CHANGELOG.html#autotoc_md131---2009-07-14", null ],
      [ "1.2.0 - 2009-06-17", "md_CHANGELOG.html#autotoc_md120---2009-06-17", null ],
      [ "1.1.0 - 2009-04-11", "md_CHANGELOG.html#autotoc_md110---2009-04-11", null ],
      [ "1.0.0 - 2009-03-29", "md_CHANGELOG.html#autotoc_md100---2009-03-29", null ]
    ] ],
    [ "Code of Conduct", "md_CODE__OF__CONDUCT.html", [
      [ "Our Pledge", "md_CODE__OF__CONDUCT.html#our-pledge", null ],
      [ "Our Standards", "md_CODE__OF__CONDUCT.html#our-standards", null ],
      [ "Enforcement Responsibilities", "md_CODE__OF__CONDUCT.html#enforcement-responsibilities", null ],
      [ "Scope", "md_CODE__OF__CONDUCT.html#scope", null ],
      [ "Enforcement", "md_CODE__OF__CONDUCT.html#enforcement", null ],
      [ "Enforcement Guidelines", "md_CODE__OF__CONDUCT.html#enforcement-guidelines", [
        [ "1. Correction", "md_CODE__OF__CONDUCT.html#autotoc_md1-correction", null ],
        [ "2. Warning", "md_CODE__OF__CONDUCT.html#autotoc_md2-warning", null ],
        [ "3. Temporary Ban", "md_CODE__OF__CONDUCT.html#autotoc_md3-temporary-ban", null ],
        [ "4. Permanent Ban", "md_CODE__OF__CONDUCT.html#autotoc_md4-permanent-ban", null ]
      ] ],
      [ "Attribution", "md_CODE__OF__CONDUCT.html#attribution", null ]
    ] ],
    [ "Contribution Guidelines", "md_CONTRIBUTING.html", [
      [ "Code of Conduct", "md_CONTRIBUTING.html#code-of-conduct-1", null ],
      [ "Have a Question or Problem?", "md_CONTRIBUTING.html#have-a-question-or-problem", null ],
      [ "Want a New Feature?", "md_CONTRIBUTING.html#want-a-new-feature", null ],
      [ "Found a Bug?", "md_CONTRIBUTING.html#found-a-bug", [
        [ "Submitting an Issue", "md_CONTRIBUTING.html#submitting-an-issue", null ],
        [ "Submitting a Pull Request", "md_CONTRIBUTING.html#submitting-a-pull-request", null ],
        [ "Commit Message Format", "md_CONTRIBUTING.html#commit-message-format", null ]
      ] ]
    ] ],
    [ "Contributing to SDL", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html", [
      [ "Filing a GitHub issue", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#filing-a-github-issue", [
        [ "Reporting a bug", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#reporting-a-bug", null ],
        [ "Suggesting enhancements", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#suggesting-enhancements", null ]
      ] ],
      [ "Contributing code", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#contributing-code", [
        [ "Forking the project", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#forking-the-project", null ],
        [ "Following the style guide", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#following-the-style-guide", null ],
        [ "Running the tests", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#running-the-tests", null ],
        [ "Opening a pull request", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#opening-a-pull-request", null ]
      ] ],
      [ "Contributing to the documentation", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#contributing-to-the-documentation", [
        [ "Editing a function documentation", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#editing-a-function-documentation", null ],
        [ "Editing the wiki", "md_RecastCmd_2Contrib_2SDL_2docs_2CONTRIBUTING.html#editing-the-wiki", null ]
      ] ]
    ] ],
    [ "Android", "android.html", [
      [ "Requirements", "android.html#requirements", null ],
      [ "How the port works", "android.html#how-the-port-works", null ],
      [ "Building an app", "android.html#building-an-app", null ],
      [ "Customizing your application name", "android.html#customizing-your-application-name", null ],
      [ "Customizing your application icon", "android.html#customizing-your-application-icon", null ],
      [ "Loading assets", "android.html#loading-assets", null ],
      [ "Pause / Resume behaviour", "android.html#pause--resume-behaviour", null ],
      [ "Mouse / Touch events", "android.html#mouse--touch-events", null ],
      [ "Misc", "android.html#misc", null ],
      [ "Threads and the Java VM", "android.html#threads-and-the-java-vm", null ],
      [ "Using STL", "android.html#using-stl", null ],
      [ "Using the emulator", "android.html#using-the-emulator", null ],
      [ "Troubleshooting", "android.html#troubleshooting", null ],
      [ "Memory debugging", "android.html#memory-debugging", null ],
      [ "Graphics debugging", "android.html#graphics-debugging", null ],
      [ "Why is API level 19 the minimum required?", "android.html#why-is-api-level-19-the-minimum-required", null ],
      [ "A note regarding the use of the \"dirty rectangles\" rendering technique", "android.html#a-note-regarding-the-use-of-the-dirty-rectangles-rendering-technique", null ],
      [ "Ending your application", "android.html#ending-your-application", null ],
      [ "Known issues", "android.html#known-issues", null ]
    ] ],
    [ "CMake", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html", [
      [ "Building SDL", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html#building-sdl", null ],
      [ "Including SDL in your project", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html#including-sdl-in-your-project", [
        [ "A system SDL library", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html#a-system-sdl-library", null ],
        [ "Using a vendored SDL", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html#using-a-vendored-sdl", null ]
      ] ],
      [ "CMake configuration options for platforms", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html#cmake-configuration-options-for-platforms", [
        [ "iOS/tvOS", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html#iostvos", [
          [ "Examples", "md_RecastCmd_2Contrib_2SDL_2docs_2README-cmake.html#examples", null ]
        ] ]
      ] ]
    ] ],
    [ "DirectFB", "directfb.html", [
      [ "Simple Window Manager", "directfb.html#simple-window-manager", null ],
      [ "OpenGL Support", "directfb.html#opengl-support", null ]
    ] ],
    [ "Dynamic API", "md_RecastCmd_2Contrib_2SDL_2docs_2README-dynapi.html", null ],
    [ "Emscripten", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html", [
      [ "The state of things", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#the-state-of-things", null ],
      [ "RTFM", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#rtfm", null ],
      [ "Porting your app to Emscripten", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#porting-your-app-to-emscripten", null ],
      [ "Do you need threads?", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#do-you-need-threads", null ],
      [ "Audio", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#audio", null ],
      [ "Rendering", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#rendering", null ],
      [ "Building SDL/emscripten", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#building-sdlemscripten", null ],
      [ "Building your app", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#building-your-app", null ],
      [ "Data files", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#data-files", null ],
      [ "Debugging", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#debugging", null ],
      [ "Questions?", "md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#questions", null ]
    ] ],
    [ "GDK", "gdk.html", [
      [ "Requirements", "gdk.html#requirements-1", null ],
      [ "Windows GDK Status", "gdk.html#windows-gdk-status", null ],
      [ "VisualC-GDK Solution", "gdk.html#visualc-gdk-solution", null ],
      [ "Windows GDK Setup, Detailed Steps", "gdk.html#windows-gdk-setup-detailed-steps", [
        [ "1. Add a Gaming.Desktop.x64 Configuration", "gdk.html#autotoc_md1-add-a-gamingdesktopx64-configuration", null ],
        [ "2. Build SDL2 and SDL2main for GDK", "gdk.html#autotoc_md2-build-sdl2-and-sdl2main-for-gdk", null ],
        [ "3. Configuring Project Settings", "gdk.html#autotoc_md3-configuring-project-settings", null ],
        [ "4. Setting up SDL_main", "gdk.html#autotoc_md4-setting-up-sdl_main", null ],
        [ "5. Required DLLs", "gdk.html#autotoc_md5-required-dlls", null ],
        [ "6. Setting up MicrosoftGame.config", "gdk.html#autotoc_md6-setting-up-microsoftgameconfig", null ],
        [ "7. Adding Required Logos", "gdk.html#autotoc_md7-adding-required-logos", null ],
        [ "8. Copying any Data Files", "gdk.html#autotoc_md8-copying-any-data-files", null ],
        [ "9. Build and Run from Visual Studio", "gdk.html#autotoc_md9-build-and-run-from-visual-studio", null ],
        [ "10. Packaging and Installing Locally", "gdk.html#autotoc_md10-packaging-and-installing-locally", null ]
      ] ],
      [ "Xbox GDKX Setup", "gdk.html#xbox-gdkx-setup", null ],
      [ "Troubleshooting", "gdk.html#troubleshooting-1", null ]
    ] ],
    [ "Dollar Gestures", "dollar-gestures.html", [
      [ "Recording:", "dollar-gestures.html#recording", null ],
      [ "Performing:", "dollar-gestures.html#performing", null ],
      [ "Saving:", "dollar-gestures.html#saving", null ],
      [ "Loading:", "dollar-gestures.html#loading", null ],
      [ "Multi Gestures", "dollar-gestures.html#multi-gestures", null ],
      [ "Notes", "dollar-gestures.html#notes", null ]
    ] ],
    [ "git", "git.html", null ],
    [ "README-hg", "readme-hg.html", null ],
    [ "iOS", "ios.html", [
      [ "Building the Simple DirectMedia Layer for iOS 9.0+", "ios.html#building-the-simple-directmedia-layer-for-ios-90", null ],
      [ "Using the Simple DirectMedia Layer for iOS", "ios.html#using-the-simple-directmedia-layer-for-ios", null ],
      [ "Notes – Retina / High-DPI and window sizes", "ios.html#notes----retina--high-dpi-and-window-sizes", null ],
      [ "Notes – Application events", "ios.html#notes----application-events", null ],
      [ "Notes – Accelerometer as Joystick", "ios.html#notes----accelerometer-as-joystick", null ],
      [ "Notes – OpenGL ES", "ios.html#notes----opengl-es", null ],
      [ "Notes – Keyboard", "ios.html#notes----keyboard", null ],
      [ "Notes – Mouse", "ios.html#notes----mouse", null ],
      [ "Notes – Reading and Writing files", "ios.html#notes----reading-and-writing-files", null ],
      [ "Notes – xcFramework", "ios.html#notes----xcframework", null ],
      [ "Notes – iPhone SDL limitations", "ios.html#notes----iphone-sdl-limitations", null ],
      [ "Notes – CoreBluetooth.framework", "ios.html#notes----corebluetoothframework", null ],
      [ "Game Center", "ios.html#game-center", null ],
      [ "Deploying to older versions of iOS", "ios.html#deploying-to-older-versions-of-ios", null ]
    ] ],
    [ "KMSDRM on *BSD", "kmsdrm-on-bsd.html", [
      [ "SDL2 WSCONS input backend features", "kmsdrm-on-bsd.html#sdl2-wscons-input-backend-features", null ],
      [ "Partially working or no input on OpenBSD/NetBSD.", "kmsdrm-on-bsd.html#partially-working-or-no-input-on-openbsdnetbsd", null ],
      [ "Partially working or no input on FreeBSD.", "kmsdrm-on-bsd.html#partially-working-or-no-input-on-freebsd", null ]
    ] ],
    [ "Linux", "linux-1.html", [
      [ "Build Dependencies", "linux-1.html#build-dependencies", null ],
      [ "Joystick does not work", "linux-1.html#joystick-does-not-work", null ]
    ] ],
    [ "Mac OS X (aka macOS).", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html", [
      [ "Command Line Build", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#command-line-build", null ],
      [ "Caveats for using SDL with Mac OS X", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#caveats-for-using-sdl-with-mac-os-x", null ],
      [ "Using the Simple DirectMedia Layer with a traditional Makefile", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#using-the-simple-directmedia-layer-with-a-traditional-makefile", null ],
      [ "Using the Simple DirectMedia Layer with Xcode", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#using-the-simple-directmedia-layer-with-xcode", [
        [ "First steps", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#first-steps", null ],
        [ "Building the Framework", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#building-the-framework", null ],
        [ "Build Options", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#build-options", null ],
        [ "Building the Testers", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#building-the-testers", null ],
        [ "Using the Project Stationary", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#using-the-project-stationary", null ],
        [ "Setting up a new project by hand", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#setting-up-a-new-project-by-hand", null ],
        [ "Building from command line", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#building-from-command-line", null ],
        [ "Running your app", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#running-your-app", null ]
      ] ],
      [ "Implementation Notes", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#implementation-notes", [
        [ "Working directory", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#working-directory", null ],
        [ "You have a Cocoa App!", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#you-have-a-cocoa-app", null ]
      ] ],
      [ "Bug reports", "md_RecastCmd_2Contrib_2SDL_2docs_2README-macos.html#bug-reports", null ]
    ] ],
    [ "Nintendo 3DS", "md_RecastCmd_2Contrib_2SDL_2docs_2README-n3ds.html", [
      [ "Building", "md_RecastCmd_2Contrib_2SDL_2docs_2README-n3ds.html#building", null ],
      [ "Notes", "md_RecastCmd_2Contrib_2SDL_2docs_2README-n3ds.html#notes-1", null ]
    ] ],
    [ "Native Client", "native-client.html", [
      [ "Building SDL for NaCl", "native-client.html#building-sdl-for-nacl", null ],
      [ "Running tests", "native-client.html#running-tests", null ],
      [ "RWops and nacl_io", "native-client.html#rwops-and-nacl_io", null ],
      [ "TODO - Known Issues", "native-client.html#todo---known-issues", null ]
    ] ],
    [ "Nokia N-Gage", "nokia-n-gage.html", [
      [ "Compiling", "nokia-n-gage.html#compiling", null ],
      [ "Current level of implementation", "nokia-n-gage.html#current-level-of-implementation", null ],
      [ "Acknowledgements", "nokia-n-gage.html#acknowledgements", null ]
    ] ],
    [ "Simple DirectMedia Layer 2 for OS/2 & eComStation", "simple-directmedia-layer-2-for-os2--ecomstation.html", [
      [ "Compiling:", "simple-directmedia-layer-2-for-os2--ecomstation.html#compiling-1", null ],
      [ "Installing:", "simple-directmedia-layer-2-for-os2--ecomstation.html#installing", null ],
      [ "Joysticks in SDL2:", "simple-directmedia-layer-2-for-os2--ecomstation.html#joysticks-in-sdl2", null ]
    ] ],
    [ "Pandora", "pandora.html", null ],
    [ "Platforms", "platforms.html", null ],
    [ "Porting", "porting.html", null ],
    [ "PS2", "ps2.html", [
      [ "Building", "ps2.html#building-1", null ],
      [ "Hints", "ps2.html#hints", null ],
      [ "Notes", "ps2.html#notes-2", null ],
      [ "Getting PS2 Dev", "ps2.html#getting-ps2-dev", null ],
      [ "Running on PCSX2 Emulator", "ps2.html#running-on-pcsx2-emulator", null ],
      [ "To Do", "ps2.html#to-do", null ]
    ] ],
    [ "PSP", "psp.html", [
      [ "Building", "psp.html#building-2", null ],
      [ "Getting PSP Dev", "psp.html#getting-psp-dev", null ],
      [ "Running on PPSSPP Emulator", "psp.html#running-on-ppsspp-emulator", null ],
      [ "Compiling a HelloWorld", "psp.html#compiling-a-helloworld", null ],
      [ "To Do", "psp.html#to-do-1", null ]
    ] ],
    [ "Raspberry Pi", "raspberry-pi.html", [
      [ "Features", "raspberry-pi.html#features", null ],
      [ "Raspbian Build Dependencies", "raspberry-pi.html#raspbian-build-dependencies", null ],
      [ "NEON", "raspberry-pi.html#neon", null ],
      [ "Cross compiling from x86 Linux", "raspberry-pi.html#cross-compiling-from-x86-linux", null ],
      [ "Apps don't work or poor video/audio performance", "raspberry-pi.html#apps-dont-work-or-poor-videoaudio-performance", null ],
      [ "No input", "raspberry-pi.html#no-input", null ],
      [ "No HDMI Audio", "raspberry-pi.html#no-hdmi-audio", null ],
      [ "Text Input API support", "raspberry-pi.html#text-input-api-support", null ],
      [ "OpenGL problems", "raspberry-pi.html#opengl-problems", null ],
      [ "Notes", "raspberry-pi.html#notes-3", null ]
    ] ],
    [ "RISC OS", "risc-os.html", [
      [ "Compiling:", "risc-os.html#compiling-2", null ],
      [ "Current level of implementation", "risc-os.html#current-level-of-implementation-1", null ]
    ] ],
    [ "Touch", "touch.html", [
      [ "System Specific Notes", "touch.html#system-specific-notes", null ],
      [ "Events", "touch.html#events", null ],
      [ "Functions", "touch.html#functions", null ],
      [ "Notes", "touch.html#notes-4", null ]
    ] ],
    [ "Versioning", "md_RecastCmd_2Contrib_2SDL_2docs_2README-versions.html", [
      [ "Since 2.23.0", "md_RecastCmd_2Contrib_2SDL_2docs_2README-versions.html#since-2230", null ],
      [ "Before 2.23.0", "md_RecastCmd_2Contrib_2SDL_2docs_2README-versions.html#before-2230", null ]
    ] ],
    [ "Using SDL with Microsoft Visual C++", "using-sdl-with-microsoft-visual-c.html", null ],
    [ "PS Vita", "ps-vita.html", [
      [ "Building", "ps-vita.html#building-3", null ],
      [ "Notes", "ps-vita.html#notes-5", null ]
    ] ],
    [ "WinCE", "wince.html", null ],
    [ "Windows", "md_RecastCmd_2Contrib_2SDL_2docs_2README-windows.html", [
      [ "LLVM and Intel C++ compiler support", "md_RecastCmd_2Contrib_2SDL_2docs_2README-windows.html#llvm-and-intel-c-compiler-support", null ],
      [ "OpenGL ES 2.x support", "md_RecastCmd_2Contrib_2SDL_2docs_2README-windows.html#opengl-es-2x-support", null ],
      [ "Vulkan Surface Support", "md_RecastCmd_2Contrib_2SDL_2docs_2README-windows.html#vulkan-surface-support", null ]
    ] ],
    [ "WinRT", "winrt.html", [
      [ "Requirements", "winrt.html#requirements-2", null ],
      [ "Status", "winrt.html#status", null ],
      [ "Upgrade Notes", "winrt.html#upgrade-notes", null ],
      [ "Setup, High-Level Steps", "winrt.html#setup-high-level-steps", null ],
      [ "Setup, Detailed Steps", "winrt.html#setup-detailed-steps", [
        [ "1. Create a new project", "winrt.html#autotoc_md1-create-a-new-project", null ],
        [ "2. Remove unneeded files from the project", "winrt.html#autotoc_md2-remove-unneeded-files-from-the-project", null ],
        [ "3. Add references to SDL's project files", "winrt.html#autotoc_md3-add-references-to-sdls-project-files", null ],
        [ "4. Adjust Your App's Build Settings", "winrt.html#autotoc_md4-adjust-your-apps-build-settings", null ],
        [ "5. Add a WinRT-appropriate main function, and a blank-cursor image, to the app.", "winrt.html#autotoc_md5-add-a-winrt-appropriate-main-function-and-a-blank-cursor-image-to-the-app", null ],
        [ "6. Add app code and assets", "winrt.html#autotoc_md6-add-app-code-and-assets", [
          [ "6.A. ... when creating a new app", "winrt.html#autotoc_md6a--when-creating-a-new-app", null ],
          [ "6.B. Adding code and assets", "winrt.html#autotoc_md6b-adding-code-and-assets", null ]
        ] ],
        [ "7. Build and run your app", "winrt.html#autotoc_md7-build-and-run-your-app", [
          [ "7.A. Running apps on older, ARM-based, \"Windows RT\" devices", "winrt.html#autotoc_md7a-running-apps-on-older-arm-based-windows-rt-devices", null ]
        ] ]
      ] ],
      [ "Troubleshooting", "winrt.html#troubleshooting-2", null ]
    ] ],
    [ "Simple DirectMedia Layer", "md_RecastCmd_2Contrib_2SDL_2docs_2README.html", null ],
    [ "Release checklist", "md_RecastCmd_2Contrib_2SDL_2docs_2release__checklist.html", [
      [ "New feature release", "md_RecastCmd_2Contrib_2SDL_2docs_2release__checklist.html#new-feature-release", null ],
      [ "New bugfix release", "md_RecastCmd_2Contrib_2SDL_2docs_2release__checklist.html#new-bugfix-release", null ],
      [ "After a feature release", "md_RecastCmd_2Contrib_2SDL_2docs_2release__checklist.html#after-a-feature-release", null ],
      [ "New development prerelease", "md_RecastCmd_2Contrib_2SDL_2docs_2release__checklist.html#new-development-prerelease", null ]
    ] ],
    [ "Simple DirectMedia Layer (SDL) Version 2.0", "md_RecastCmd_2Contrib_2SDL_2README.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"DebugDraw_8cpp.html",
"DetourNavMeshBuilder_8h_source.html",
"RecastAlloc_8h.html#a76aa1cda643d12fb282dffdd127c1bac",
"RecastCmd_2Source_2imgui_8cpp.html#a3cbb6cb470c5eb82ca27461c33e38bd7",
"RecastDemo_2Source_2ConvexVolumeTool_8cpp.html#aa70398cc4b7ef22352199dca700b3990",
"RecastMesh_8cpp.html#aaccc35a1704dcc3625b941a927c97034",
"SDL__audio_8h.html#ab9ad945b4b15d816802f5a79da06c9f9",
"SDL__config__emscripten_8h.html#a6f6c666b70354db02cd6d26318ae70d2",
"SDL__config__macosx_8h.html#a575cd33d7c103a84b4d54759e71ea78d",
"SDL__config__os2_8h.html#ad7c2edb2365c947f4bff624c7be9f890",
"SDL__config__winrt_8h.html#a550e5c272cc3cf3814651721167dcd23",
"SDL__events_8h.html#a3b589e89be6b35c02e0dd34a55f3fccaafd64b483c47e93576b91bf5b227d04c2",
"SDL__haptic_8h.html#afd64aa747034a7ccf4b55f6246525701",
"SDL__joystick_8h.html#a01a289030d76adc1666951fd6021c2eaac9fd28d66ae0b3e31faca357823955cd",
"SDL__keycode_8h.html#a179ce01fa41d35408f06b4b3d1cd9d3da922a6a5d41d871b257da50d987c72f6e",
"SDL__mouse_8h.html#a3e8083d1d8ce4c5a1ba76bfc2be8e732a71fe25cd68c411ca52370bacc40b2764",
"SDL__opengl_8h.html#a1f7d1f6b7274d0ad760d5c9bd83393e9",
"SDL__opengl_8h.html#a5480189f376c563c64425d795ad17824",
"SDL__opengl_8h.html#a84922824da23cdf7372df2f2b00ae84f",
"SDL__opengl_8h.html#ab64f48a62872189e4d979bd86eeef2b7",
"SDL__opengl_8h.html#aea1419aa8aec5854bd9807b45171029d",
"SDL__opengl__glext_8h.html#a065f2015180040ab6e728fb8050543f8",
"SDL__opengl__glext_8h.html#a11d8be2b8a6ec2e68c1ade0fc77bf4fd",
"SDL__opengl__glext_8h.html#a1b6d77d52099ad70dcf664c9c28019e4",
"SDL__opengl__glext_8h.html#a266651c0aabb70ec79c89900f98a7b15",
"SDL__opengl__glext_8h.html#a312e8d1ce91a7c55157b545ee0b47d2a",
"SDL__opengl__glext_8h.html#a3cc5ac900442a6f36b71e436402122dc",
"SDL__opengl__glext_8h.html#a486560ed9ede709018dfa4c855236354",
"SDL__opengl__glext_8h.html#a5425b82a8a9f4c3f70e6e242755703e9",
"SDL__opengl__glext_8h.html#a5f895aaa09e48f3a6ba6519ed5f4d378",
"SDL__opengl__glext_8h.html#a6ad65592b54dfc79c24b6dd9ca27eaaf",
"SDL__opengl__glext_8h.html#a763fb86d17e789098d44fe652f856b39",
"SDL__opengl__glext_8h.html#a81844d43109d5dedcc2e186dea36aa8b",
"SDL__opengl__glext_8h.html#a8c6b31a3f85626a8123f7340618656c1",
"SDL__opengl__glext_8h.html#a97ead06df4010bdbdb56f3ea14ce2444",
"SDL__opengl__glext_8h.html#aa3e080bdfb1e68121887caf358cc1c19",
"SDL__opengl__glext_8h.html#aafcdbd69fe615f0b50c898771513a8ba",
"SDL__opengl__glext_8h.html#ab9964f4ef836cd122d7771e69a32fdce",
"SDL__opengl__glext_8h.html#ac415467d1213e7ab9a1361c71bdae061",
"SDL__opengl__glext_8h.html#acf656cab539fa79d0c217abe94544d08",
"SDL__opengl__glext_8h.html#adbaeded59bfc1cc920d0ee176722b389",
"SDL__opengl__glext_8h.html#ae5a5d93368758da93a44c2fe8df29185",
"SDL__opengl__glext_8h.html#af0c2db233824e47ec30dd6a11d70196e",
"SDL__opengl__glext_8h.html#afc1a02ba9db578935b22d448e403c2d7",
"SDL__opengles2__gl2_8h.html#a43c7205c5f4dc7a535bd32817766e272",
"SDL__opengles2__gl2_8h.html#abe1c2e1876841bc483127fd45d7ca3b1",
"SDL__opengles2__gl2ext_8h.html#a0e4324ea6383aa6e1441115858f1e3a7",
"SDL__opengles2__gl2ext_8h.html#a2aea5d0245035cedf59c9603dad60247",
"SDL__opengles2__gl2ext_8h.html#a4c1454bb60666979afccb7d0676d0d5a",
"SDL__opengles2__gl2ext_8h.html#a6b425be07cfa8ac09043ef8391e7e514",
"SDL__opengles2__gl2ext_8h.html#a8a214c525b2878e17a0b4db946fc33dd",
"SDL__opengles2__gl2ext_8h.html#aa8bd8cf1eef34712fdb6ad58b540a2ee",
"SDL__opengles2__gl2ext_8h.html#ac3927949a0eec86ac3323587b53dd1d9",
"SDL__opengles2__gl2ext_8h.html#ae405e157412acbcd9ceb7fac2a7cbdb0",
"SDL__opengles2__khrplatform_8h.html#aea31402f1f8fad5bec8bdc4dd0919da9",
"SDL__render_8h.html#a7fc9db6cde77fc9c95a4f65bc7d30073",
"SDL__scancode_8h.html#a82ab7cff701034fb40a47b5b3a02777bab0502e2d98b7da2501aee829d5f83d6c",
"SDL__stdinc_8h.html#a833d0eb1ac38643cc5e8f71f9231d3eb",
"SDL__test__font_8h.html#a90c1152cf2a14c604588a72e077555cf",
"SDL__video_8h.html#a5a2ad98e8920f8069bf89eb3f9bbc377",
"classCrowdTool.html#a5b7f620a8f1f319990286c12a4ce2e2d",
"classNavmeshFlags.html#ad9df0c288de9a604e5bc92aa7a7ce984",
"classSample__SoloMesh.html#a6dd52ccbd489b3bc5762f40a981c7690",
"classTempObstacleCreateTool.html#a14e886d838141c3edb870d25819e030d",
"classduDisplayList.html#a2bd9a4e455216c4427557a230acfee31",
"gdk.html#windows-gdk-setup-detailed-steps",
"md_RecastCmd_2Contrib_2SDL_2docs_2README-emscripten.html#debugging",
"structGuiState.html#ae30e4fb22d16fa188b02b4ae41c6691b",
"structSDL__DollarGestureEvent.html#a9888449bd8842ed96494b4db16a6097b",
"structSDL__PixelFormat.html#abfdec7b9ee2ee39db630f4022e4e0daa",
"structdtCompressedTile.html#a08600eb0ab1c1980a7e1b72839a32863",
"structrcCompactSpan.html#aca1a16c8453c9533120c094979601d77"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';