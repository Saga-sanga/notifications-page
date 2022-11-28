# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [FrontEnd Mentor](https://www.frontendmentor.io/solutions/notifications-page-d1q84zgfI0)
- Live Site URL: [GitHub Pages](https://saga-sanga.github.io/notifications-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - ViteJS
- [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

This is my first project created using Typescript and Vite. A TypeScript feature I used was interfaces. I learnt that interfaces and types are very similar in use case although they have certain differences.

```js
export interface userData {
  name: string;
  avatar: string;
  content: string;
  post?: string;
  picture?: string;
  time: string;
  message?: string;
  group?: string;
  read: boolean;
}
```

### Useful resources

- [Tyepscript Lang](https://www.typescriptlang.org/play#example/types-vs-interfaces) - This helped me get an understanding between the differences between types and interfaces. It is a very detailed, concise overview of them both.

## Author

- GitHub - [Saga-sanga](https://github.com/Saga-sanga)
- Frontend Mentor - [@Saga-Sanga](https://www.frontendmentor.io/profile/Saga-sanga)
- Twitter - [@RecksonKhiangte](https://twitter.com/RecksonKhiangte)