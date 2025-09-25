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
"CrowdTool_8cpp.html",
"DetourNavMeshBuilder_8cpp.html#ac4386676e18bfd480f6686981f10e595",
"NavMeshTesterTool_8cpp.html#ac8e3cc6c626394b36e557edb46eb23c5",
"RecastCmd_2Source_2imgui_8cpp.html#afd1f5eaee9f7475255c6fba75ff5123c",
"RecastDemo_2Source_2imgui_8cpp.html#ad123f3fb8a3840a3f6ce8caa41a3f80b",
"SDL__assert_8h.html#a22dedc823eb26ea054cbc584b614718e",
"SDL__config__android_8h.html#aa953e4cda9023d78ea5a18460e8ac594",
"SDL__config__iphoneos_8h.html#a8ff3a28c350664f46a62c4b0a0332bb7",
"SDL__config__ngage_8h.html#aba7bc1797add20fe3efdf37ced1182c5",
"SDL__config__windows_8h.html#a8c93ace115b3d8d8163359820370a780",
"SDL__endian_8h.html#a36c0d118c6346d33e90fea757d6dfec1",
"SDL__gamecontroller_8h.html#acdb9303cc6b67f1a0ec3ee55ad8e29d5",
"SDL__hints_8h.html#a861d668330d5c3639573c38269e25df3",
"SDL__keycode_8h.html#a179ce01fa41d35408f06b4b3d1cd9d3da27de78587382514e7dbd4e33703e21aa",
"SDL__log_8h.html#a09e04f1d062a71901f59592c276ad946",
"SDL__opengl_8h.html#a0a9e8b1f1d9c4bcf1c0bc5d5d4e3608a",
"SDL__opengl_8h.html#a3f1e1951ac224b0f42929facb17e983f",
"SDL__opengl_8h.html#a6fc1b36f39e5859ac72ebfaf3722a0c1",
"SDL__opengl_8h.html#aa050e993492ce097cf0273be4838014f",
"SDL__opengl_8h.html#ad2e54a199b0dfdb266ad555be6e082c5",
"SDL__opengl__glext_8h.html#a007d7adc732a72614650b6286828e12a",
"SDL__opengl__glext_8h.html#a0c51fbe743a6c9da5d2f7ac4306b66df",
"SDL__opengl__glext_8h.html#a17928a5390c0feb85b6998a73f2d08a2",
"SDL__opengl__glext_8h.html#a21aae7ffb3cca75daf035c92d2ef9aa8",
"SDL__opengl__glext_8h.html#a2d01fb0f6bc9c51a74a990e31ac4a998",
"SDL__opengl__glext_8h.html#a373810664f543602bfcae09dbdd8231b",
"SDL__opengl__glext_8h.html#a432f0f93a241d368c5162c5da2221c1b",
"SDL__opengl__glext_8h.html#a4f758ad7ec574223a5adc8c5bd2807ec",
"SDL__opengl__glext_8h.html#a5aee5a44bf92a9837fea48e41ef0df57",
"SDL__opengl__glext_8h.html#a65e409180ae116e584f27b88d3429e2b",
"SDL__opengl__glext_8h.html#a70ee883c02540c3f82e6c2c0f88a6e98",
"SDL__opengl__glext_8h.html#a7c90bb127cfe0c5ad309c96d62a7b20f",
"SDL__opengl__glext_8h.html#a8790c9d55cf268a27d1c8ceffcee2f96",
"SDL__opengl__glext_8h.html#a932133cb6adacda7d651bb222ed32f26",
"SDL__opengl__glext_8h.html#a9e56295ed80d2c92957857ce48dc79ab",
"SDL__opengl__glext_8h.html#aaa2cb2a99b3513174450dab5bb530cc1",
"SDL__opengl__glext_8h.html#ab5e0f09c10a970ff4e8d8181fe3c6937",
"SDL__opengl__glext_8h.html#ac013c2f179cee5666d01dc0868f78bf9",
"SDL__opengl__glext_8h.html#aca4d69cdadf562eef302e6e52934bc9b",
"SDL__opengl__glext_8h.html#ad52e7281fe368e52ee4ab32fff23e091",
"SDL__opengl__glext_8h.html#ae10591aef12d5e485224573e1fd6bfc2",
"SDL__opengl__glext_8h.html#aeb14db2a9d0c7a5aaddec813bbdbfa22",
"SDL__opengl__glext_8h.html#af6d67cab75dc9104ce5d26351a8df930",
"SDL__opengles2__gl2_8h.html#a128a26f81010e89a69d8707419a99566",
"SDL__opengles2__gl2_8h.html#a88d44856e13232d3c0bec297fd38d627",
"SDL__opengles2__gl2_8h.html#afd3b686ba2b8b008f1cf679a2fadb5aa",
"SDL__opengles2__gl2ext_8h.html#a1e71d9c196e4683cc06c4b54d53f7ef5",
"SDL__opengles2__gl2ext_8h.html#a3d1efaeec96de51faab7775bc6116d3c",
"SDL__opengles2__gl2ext_8h.html#a5ea45dc499ef5da7fd171f33b4596dc9",
"SDL__opengles2__gl2ext_8h.html#a7b5c5f1382a0a627bb5e4cfd3648df1f",
"SDL__opengles2__gl2ext_8h.html#a9b13fbf4f9cde6fc5f979c8001ec9704",
"SDL__opengles2__gl2ext_8h.html#ab9531f4a776e7073e7a8dffe116609ef",
"SDL__opengles2__gl2ext_8h.html#ad6217bb144f800ed0a2f687629616bd8",
"SDL__opengles2__gl2ext_8h.html#af663796bb2a83c7d3640f2cc912326b5",
"SDL__pixels_8h.html#aceb6cb42789d5646f5206f02a07a36dc",
"SDL__scancode_8h.html#a82ab7cff701034fb40a47b5b3a02777ba3bd59ac02356269a73b92317b3cc9ae2",
"SDL__shape_8h_source.html",
"SDL__surface_8h.html#a6cf2c30be55f51fe9e4faf97e3f8d08b",
"SDL__touch_8h.html#af23f09dc79eace93cdc8dd770eed0d0a",
"SDL__video_8h.html#afb7627a0ede24c28453857fff4f02aca",
"classNavMesh.html#a9a5830c2e8134510aea1494434fe3927",
"classSample__SoloMesh.html#a1e1c74f5808c518329f6cd1c332a930d",
"classdtNodePool.html#acd74c85e290d5b7bcd1f9c44905a0f74",
"functions_f.html",
"ios.html#notes----opengl-es",
"structCrowdToolParams.html#a8481d268ff04bf7e6b49458c911936cb",
"structSDL__ControllerDeviceEvent.html",
"structSDL__MouseWheelEvent.html#a014dc767d52e8b75ba26a5f12e1704e8",
"structSampleToolState.html",
"structimguiGfxCmd.html#a88b02b5846d36381fdde1e990804162d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';