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
- git clone https://github.com/vmarci5/hacker_news.git
- cd hacker_news
- npm install    # or yarn / pnpm install
- npm run dev    # developer mode (http://localhost:3000)

Build + prod mode:
- npm run build
- npm run start

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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



