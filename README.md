## Hacker News
This project is a clone of Hacker News, where I redesigned the interface using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).  
I also used external components from [Shadcn UI](https://ui.shadcn.com/) to speed up development.  
The components I integrated were:

- Button  
- Card  
- Pagination  
- Skeleton  
- Textarea  

The content of the pages is rendered using the official [Hacker News API](https://github.com/HackerNews/API).

## Getting Started
Installation and running:
git clone https://github.com/vmarci5/hacker_news.git
cd hacker_news
npm install    # or yarn / pnpm install
npm run dev    # developer mode (http://localhost:3000)

Build + prod mode:
npm run build
npm run start

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
- **Navigation** between top, new, past, ask, show, and jobs posts  
- **Grid layout** for posts, where each post is displayed inside a Card component  
- **Pagination**:
  - Page number navigation is available at both the top and bottom of the page for easy access  
  - By default, 21 items are displayed per page, and navigation continues as long as the API provides data
- A new design was applied to some of the pages linked in the footer:
  - **Guidelines**, **FAQ**, and **Security**  
- A new design was also implemented for the **login**, **signup**, and **forgot password** pages
- While posts are being loaded, a **loading skeleton** is displayed until the Cards are populated with data fetched from the API

## Project Structure
- **app/**: Contains the API files and the files responsible for rendering pages  
- **components/**: Contains all content components for the pages, as well as components for the footer, header, and external UI rendering  
- **tests/**: Playwright end-to-end tests  
- **public/**: Storage for images and icons used in the application

## Future Improvements

- Proper implementation of the **Comments** page  
- Add a **search functionality** to filter posts  
- Improve overall **performance**


## Test
Testing was implemented using [Playwright](https://playwright.dev/),  
where I created different test cases for the user interface.

All tests are located in the `/tests` directory with the following files:

- `ask.spec.ts`  
- `dashboard.spec.ts`  
- `footer.spec.ts`  
- `jobs.spec.ts`  
- `login.spec.ts`  
- `navbar.spec.ts`  
- `past.spec.ts`  
- `show.spec.ts`  

Running tests:
```bash
npx playwright test <test-name>

Viewing the test report:
npx playwright show-report





