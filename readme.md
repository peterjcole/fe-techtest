# Multipli-what?
![Logo](./public/logo192.png)
## Notes

I chose to use React for this task. I think that if this were definitely the extent of the requirements, and I was unlikely to need to maintain this code over time, it would probably have been better to choose plain JavaScript.

This is because it would come with less of an unnecessary performance impact & a smaller bundle size than using React.

However, the benefits of using React include more readable, and easily maintainable, code.

Plus, I have been re-learning React to use professionally, (e.g. at Which!), since I have been using Vue at work recently, so this was a good learning opportunity for me.

I also chose to use React Testing Library. I believe that it was mentioned in my interview that this is the tool used at Which, and it's also something I wanted to learn how to use. It comes with a quite different philosophy from the style of testing I've used in the past. It says to never shallow mount, and test using text, like as the user would use the app. Previously I have been using shallow mounting as much as possible, and testing the interactions between components through props and events.

## Resources

Coolors link: https://coolors.co/9381ff-b8b8ff-f8f7ff-5c5346



**Original readme below!**

---

# Which? Javascript Exercise

## Getting up and running

Clone or fork this repo. If you'd rather start from scratch with your own setup that's fine too, as long as you complete [the exercise](#the-exercise).

Which? primarily uses React for its' frontend development requirements, but if you wish to complete this test using native JavaScript or another framework we will not penalise you, and will be interested to understand your decisions.

This repo contains a very simple webpack based development environment. We'll need to install some stuff to get going...

### Requirements

Webpack needs nodejs to do its thing. We aren't making a node app - just using it as a dev tool.

- [nodejs](https://nodejs.org/en/)

Installing node.js will also install [npm](https://www.npmjs.com) for us too. We'll need it for dependencies and some scripts.

### Dependencies

We have specified all the dependencies we need in the `package.json` file. Npm will install them for us:

`$ npm install`

### Run!

Ok, time to run the app. Npm takes care of business again:

`$ npm start`

This will fire up the wepback dev server. It's not important to understand how it works for now.

Open [http://localhost:8080/](http://localhost:8080/) in your browser and you should see a basic html page. If you open the development console in your browser you should see a welcome message.

### Development

The source files are located in `src/`. If you change a file, webpack will reload your files and refresh the browser for you.

### Test

You can run the example tests:

`$ npm test`

## The exercise

**Goal**: Production of a client-side Web application to help a child understand multiplication.

**Duration**: This test is intended to take ~2 hours but may take more

**Description**: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking on a second number removes the highlighting of the previous selection, then highlights the multiples of the newly selected number.

**Constraints**: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

You do not need to use any libraries but if you do, you should be able to explain the reasons for your choices in the Readme file.

If there is any information that you feel is missing from the story then please make sensible decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly please define highlighting).

**Criteria for assessment**: Important things that will be assessed are:

- Project layout.
- Coding style, i.e. your approach not whether you use semicolons or not ;)
- Your approach to unit testing/TDD
- Maintainability and extensibility
- Use of responsive design
- Performance, Accessibility and use of Semantic HTML
- Naming conventions used
- Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.
