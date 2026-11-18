# English Janala

English Janala is a browser-based vocabulary learning application designed to help learners explore English words through lesson-based content. It retrieves vocabulary data from the Programming Hero Open API and presents each word with its meaning and pronunciation. Learners can also open a detailed view for examples and synonyms, and listen to word pronunciation using the browser's speech synthesis feature.

## Live Demo

- Live Website: [English Janala](https://sheikhnegarsultana.github.io/ENGLISH_JANALA/)
- Source Code: [GitHub Repository](https://github.com/SheikhNegarSultana/ENGLISH_JANALA)

## Screenshots

### 1. Welcome / Login Screen


![English Janala welcome screen](https://i.ibb.co.com/JW7m86tG/Screenshot-From-2026-11-19-00-13-17.png)

### 2. Vocabulary Learning Interface

![English Janala vocabulary learning interface](https://i.ibb.co.com/fhFkc1d/Screenshot-From-2026-11-19-00-14-45.png)

## Project Overview

English Janala provides a simple learning flow for browsing English vocabulary by lesson. After entering the learning area, users can select a lesson, view the words returned by the vocabulary API, and open a modal to see additional information about a selected word.

The interface combines English learning content with Bangla guidance, making it approachable for Bengali-speaking learners. It is implemented with HTML, Tailwind CSS, DaisyUI, and vanilla JavaScript, without a frontend framework.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and content |
| Tailwind CSS v4 (browser CDN) | Utility-first styling and responsive layout |
| DaisyUI 5 | UI components and component styling |
| Vanilla JavaScript (ES6+) | API requests, event handling, dynamic rendering, and DOM updates |
| Programming Hero Open API | Lesson and vocabulary data |
| Web Speech API | Browser-based English word pronunciation |
| SweetAlert2 | Styled login success notification |
| Font Awesome | Interface icons |
| Google Fonts (Poppins, Hind Siliguri) | English and Bangla typography |

### Why These Technologies?

- HTML5 provides a straightforward structure for the single-page learning interface.
- Tailwind CSS makes it practical to build and adjust layouts directly in the markup.
- DaisyUI supplies reusable component styles on top of Tailwind CSS.
- Vanilla JavaScript handles the application's interactions and API integration without adding a framework dependency.
- Programming Hero Open API supplies lesson levels and word details, so vocabulary content can be loaded dynamically rather than maintained as a static list in the page.
- Web Speech API enables pronunciation playback through browser speech synthesis without requiring a separate audio service.
- SweetAlert2 provides a more visible login success message than a plain browser alert.
- Google Fonts supports readable English and Bangla typography, while Font Awesome supplies familiar interface icons.

## Key Features

- Simple entry flow: Users enter a name and the demo password to open the learning interface.
- Lesson-based vocabulary: Lesson buttons are generated from the levels endpoint.
- Dynamic word cards: Selecting a lesson fetches and displays the words for that level.
- Word meanings and pronunciation: Vocabulary cards show the word, meaning, and pronunciation returned by the API.
- Word details modal: The information button opens a modal containing the word's meaning, example sentence, pronunciation, and synonyms.
- Text-to-speech pronunciation: The sound button uses the browser's speech synthesis to pronounce a word in English.
- Loading indicator: A loading animation appears while lesson vocabulary is being fetched.
- Empty lesson feedback: A helpful message is shown when a lesson has no vocabulary entries.
- FAQ section: The page includes explanations of JavaScript concepts such as variable declarations, array methods, arrow functions, promises, and closures.
- Smooth section navigation: FAQ and Learn buttons scroll to their corresponding sections.
- Logout interaction: Users can leave the learning view and return to the welcome screen.

## Project Structure

ENGLISH_JANALA/
├── JS/
│   ├── login.js       # Login and logout interface flow
│   └── js.js          # Lesson API, vocabulary cards, details modal,
│                      # pronunciation, and loading state
├── assets/
│   ├── logo.png
│   ├── hero-student.png
│   ├── footer.png
│   ├── alert-error.png
│   └── ...            # Other project images
├── index.html         # Main single-page application
└── tailwind.config.js

## APIs and Browser Features

| API / Feature | Usage |
| --- | --- |
| Programming Hero levels endpoint | Loads the available lesson levels |
| Programming Hero level endpoint | Retrieves vocabulary for a selected lesson |
| Programming Hero word endpoint | Retrieves detailed information for a selected word |
| Web Speech API | Speaks an English word using SpeechSynthesisUtterance |
| HTML Dialog API | Displays detailed vocabulary information in a modal |
| DOM API | Updates lesson buttons, vocabulary cards, loading state, and page sections |

### API Endpoints

The application uses these endpoints from the Programming Hero Open API:

GET https://openapi.programming-hero.com/api/levels/all
GET https://openapi.programming-hero.com/api/level/{id}
GET https://openapi.programming-hero.com/api/word/{id}

## Dependencies and External Resources

This repository does not include a package.json file or a Node.js package installation workflow. The main libraries are included in index.html through CDN links.

| Library / Resource | Version or source |
| --- | --- |
| Tailwind CSS browser build | v4, jsDelivr CDN |
| DaisyUI | v5, jsDelivr CDN |
| SweetAlert2 | v11.25.0, jsDelivr CDN |
| Font Awesome | 6.0.0-beta3, cdnjs |
| Google Fonts | Poppins and Hind Siliguri |

No separate JavaScript framework or build step is required. The application uses native browser JavaScript and browser APIs.

## Run Locally

### Prerequisites

- Git
- A modern web browser
- Visual Studio Code (recommended)
- An internet connection for the external stylesheets, fonts, and vocabulary API

### 1. Clone the repository

git clone https://github.com/SheikhNegarSultana/ENGLISH_JANALA.git

### 2. Open the project folder

cd ENGLISH_JANALA

### 3. Start a local web server

Using the Live Server extension in Visual Studio Code:

1. Open the project folder in VS Code.
2. Install the Live Server extension if needed.
3. Open index.html.
4. Select Open with Live Server.

Or use Python:

python -m http.server 8000

Then open:

http://localhost:8000

A local HTTP server is recommended so the page and its external API requests run in a consistent browser environment.

## Demo Access

The current login script checks the entered password against a value defined in the frontend code.

- Name: Enter any non-empty name.
- Password: 123456

This is a demonstration-only access check. It is not secure authentication and should not be used to protect private data.


## Development Challenges and Solutions

The current implementation addresses several practical frontend development tasks:

- Loading remote data: Lesson levels and vocabulary are requested from separate API endpoints using fetch().
- Rendering API responses: JavaScript creates lesson buttons and vocabulary cards from the returned data instead of requiring each item to be written manually in HTML.
- Showing detailed word information: A selected word's ID is used to request its full details, which are then placed inside a dialog modal.
- Handling different content states: The interface switches between a loading indicator, vocabulary cards, and an empty-lesson message.
- Providing pronunciation without audio files: The browser's SpeechSynthesisUtterance API reads the selected English word aloud.
- Managing the learning view: Login and logout interactions toggle the visibility of the banner, navigation, vocabulary section, and FAQ section.

These points describe implementation work visible in the repository; they are not intended to imply undocumented development history.

## Problems Addressed

English Janala demonstrates a lightweight way to make vocabulary practice more structured and interactive:

- Organizes vocabulary into selectable lessons.
- Displays word meanings and pronunciation alongside each vocabulary item.
- Gives learners additional context through examples and synonyms.
- Makes pronunciation available through a simple sound control.
- Provides loading and empty-content feedback while working with remote data.
- Combines the learning interface and FAQ in one page.

## Limitations and Security Notes

- The login flow is a client-side demonstration that checks a password in JavaScript. It is not real user authentication.
- Vocabulary content depends on the availability and response format of the external Programming Hero API.
- Speech synthesis depends on browser support and the voices installed or available on the user's device.
- Tailwind CSS, DaisyUI, SweetAlert2, Font Awesome, Google Fonts, and the vocabulary API are loaded from external services, so an internet connection is required for the complete experience.
- The project does not include a backend service or database in the inspected repository.

## Relevant Links

- Live Demo: https://sheikhnegarsultana.github.io/ENGLISH_JANALA/
- GitHub Repository: https://github.com/SheikhNegarSultana/ENGLISH_JANALA
- Programming Hero Open API: https://openapi.programming-hero.com/
- Tailwind CSS: https://tailwindcss.com/
- DaisyUI: https://daisyui.com/
- SweetAlert2: https://sweetalert2.github.io/
- Font Awesome: https://fontawesome.com/
- Google Fonts: https://fonts.google.com/


