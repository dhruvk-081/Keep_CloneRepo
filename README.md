<div align="center">
  <img width="60" src="https://i.ibb.co/8jjMHSG/keep-logo.webp">

# Google Keep Clone

</div>

# Description
### This project is a fully functional Google Keep clone, built using React. It serves as a note-taking application with a range of features to enhance user experience and organization.


# Tech Stack
It was made with the help of :

- [React JS](https://react.dev/)
- [Material UI](https://mui.com/)
- [Context](https://legacy.reactjs.org/docs/context.html)
- Local Storage for data persistence

# Functionality
### 1. Note Listing

Visually appealing list of notes on the main page.
Each note includes a title, content, and color coding for organization.

### 2. Create Note
Button or form to add a new note.
New notes appear at the top of the list.
### 3. Edit Note
Users can edit the title and content of each note.
Changes are reflected immediately.
### 4. Delete Note
Option to delete a note.
Confirmation with the user before deleting.
### 5. Responsive Design
Application is responsive and works well on both desktop and mobile devices.
### 6. Local Storage
Notes are saved to local storage for persistence across page refreshes.
<!-- ### 7. Color Coding
Users can assign different colors to notes for organization.
Color picker included for choosing a color. -->

#
# Project structure

The project structure is organized as follows:

```
📦
google-keep-clone/
|-- public/
|-- src/
| |-- components/
|   |-- BlankUI/
|   |-- Modal/
|   |-- Pages/
|     |-- archives/
|     |-- trash/
|   |-- ToDo/
| |-- context/
|   |-- Dataprovider.jsx/
| |-- App.css
| |-- App.jsx
| |-- index.css
| |-- main.js
|-- .gitignore
|-- .index.html
|-- package.lock.json
|-- package.json
|-- README.md

```


# Quick start

### Local Development

For local development, you can use the following npm scripts:

Clone this repo into new project folder (e.g., keep).

```
git clone (github repository link)
```

Install npm packages.

```
npm i
```
Start the development server:

```
npm run dev
```

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:5173/`. The app will automatically reload if you change any of the source files.
