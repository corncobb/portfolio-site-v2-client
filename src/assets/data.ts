export const SocialLinks = {
  LinkedIn: 'https://www.linkedin.com/in/cameron-cobb/',
  GitHub: 'https://github.com/corncobb'
};

export const ProfilePic =
  'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633566005/profile-pic-min_sqjs8s.jpg';

export const Languages = [
  'TypeScript',
  'JavaScript',
  'Python',
  'C',
  'C++',
  'C#',
  'SQL'
];
export const Frameworks = [
  'Vue.js',
  'React.js',
  'Apollo GraphQL',
  'Express.js',
  'Django',
  'Flask',
  'Pandas',
  'jQuery',
  'Quasar Framework',
  'Redux',
  'VueX',
  'React Context',
  'Material-UI',
  'Bootstrap',
  'Apache Cordova',
  'Electron',
  'WordPress'
];
export const Tools = [
  'Jest',
  'Cypress',
  'React Testing Library',
  'CircleCi',
  'MySQL',
  'MongoDB',
  'Redis',
  'PostgreSQL',
  'SQLite3',
  'MS SQL',
  'Google Firebase',
  'Google Firestore',
  'Anaconda'
];
export const CloudServices = ['Amazon Web Services (AWS)', 'EC2', 'S3'];
export const DevTools = [
  'Visual Studio',
  'Visual Studio Code',
  'GitHub',
  'GitLab',
  'Jupyter Notebook',
  'Selenium'
];
export const Other = [
  'SSH',
  'BASH',
  'Mosquitto (MQTT)',
  'Embedded Systems',
  'SPI',
  'UART',
  'I2C'
];

export interface IProject {
  title: string;
  slug: string;
  stack: string[];
  description: string;
  imageUrl: any;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'STARTED';
  type: 'HACKATHON' | 'PERSONAL' | 'CONTRACT' | 'INTERVIEW' | 'PROTOTYPE';
  sourceUrl?: string;
  liveUrl?: string;
}

export const Projects = [
  {
    title: 'Axolittles Staking',
    slug: 'axolittles-staking',
    stack: ['React', 'Web3', 'Moralis', 'TypeScript', 'MUI'],
    description:
      'I was contracted to build the staking website for Axolittles, a popular NFT project on the Ethereum blockchain. The website currently has 500 users and 13% of all Axolittles NFTs have been staked (10,000 Axolittles NFTs available). I built and deployed the entire website in 6 days.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1639028588/Staking_Axolittles.io_2021-12-08_21-42-32.png',
    status: 'COMPLETED',
    type: 'CONTRACT',
    sourceUrl: '',
    liveUrl: 'https://staking.axolittles.io/'
  },
  {
    title: 'Billionaire Bats Club',
    slug: 'billionaire-bats-club',
    stack: [
      'React',
      'Azure Functions',
      'Solana',
      'TypeScript',
      'Web3',
      'Azure SQL'
    ],
    description:
      'Billionaire Bats Club is an NFT project on the Solana blockchain. There were a total of 7500 bats available to be minted.\n\nLaunch was done in 2 phases: a pre-mint phase, and a normal live mint phase. The pre-mint phase involved a list of users who gave us their wallet address a month in advance. This is so they could mint early and at a discounted price (1 Sol each. Roughly $200 USD at the time of launch) and possibly mint a rare bat. The regular mint price was 1.5 Sol at the time of launch.\n\nWe stored the wallet addresses in an Azure SQL database with Azure functions as the pre-mint api. Once the pre-mint went live, users would connect their wallet and once they connected their wallet, it would check to see if they were part of the whitelist and if they were they could mint a bat. If not, then the mint button would disappear.\n\nThis project had to be built and live within 1 month and was hosted on Microsoft Azure.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1635897172/Billionaire_Bats_Club_2021-11-02_16-52-04_youpla.png',
    status: 'COMPLETED',
    type: 'CONTRACT',
    sourceUrl: '',
    liveUrl: 'https://billionairebats.com/'
  },
  {
    title: 'Portfolio Website V2',
    slug: 'portfolio-site-v2',
    stack: ['React', 'TypeScript', 'Material UI', 'Cloudinary'],
    description:
      'This is my newest portfolio website. It is very similar to my first portfolio site. The only differences are that I built it with TypeScript, added revealing animation, added better routing, dark mode, and is just better built overall.\n\nPlans for my v3 portfolio site will include a backend with a SSR or static front-end, and a GraphQL api.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633624713/camcobb-website-v2_kdspeo.png',
    status: 'COMPLETED',
    type: 'PERSONAL',
    sourceUrl: '//github.com/corncobb/portfolio-site-v2-client',
    liveUrl: 'https://www.camcobb.com/'
  },
  {
    title: 'Rugme.finance',
    slug: 'rugme-finance',
    stack: [
      'Web3',
      'React',
      'TypeScript',
      'Material UI',
      'Solidity',
      'Binance Smart Chain (BSC)'
    ],
    description:
      'Rugme.finance was my first take with a crypto based project. It is a BSC Yield Farm and that included a gambling/lottery page where users could gamble BNB in hopes of hitting a jackpot. And a farming feature where users could stake Liquidity Pool (LP) tokens in order to earn RUG tokens overtime.\n\nThis project was mostly a charity project for users in the crypto community that have been affected or scammed due to a rug pull.\n\nWe added a built in chat system so users could chat while farming for RUG tokens!',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633555812/rugme-finance_ko4yze.png',
    status: 'COMPLETED',
    type: 'CONTRACT',
    liveUrl: 'https://www.rugme.finance/'
  },
  {
    title: 'Path Finding Algorithm Maze',
    slug: 'path-finding-algorithm-maze-react',
    stack: ['React', 'JavaScript'],
    description:
      'This project was for a tech interview to demonstrate a path finding algorithm with React for a tech interview. Requirements:\n\n(1) A map could be any size, you can pre-define it or require user input. Place random obstacles on the map.\n\n(2) Place a meeple on lower left, generate the path that will lead this char to the upper right of the map.\n\n(3) Animate the meeple walking from start to end.\n\n(4) Build your own path algorithm.\n\n(5) Use React.\n\n(6) Write a few spec tests.\n\n(7) Live site with URL.\n\n\n\nThe project was completed in under 8 hours.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633555413/path-finding-algo-react_vypymg.jpg',
    started: 'March 16, 2020',
    status: 'COMPLETED',
    type: 'INTERVIEW',
    sourceUrl: 'https://github.com/corncobb/path-algo-submission',
    liveUrl: '//path-finding-algo-react.camcobb.com/'
  },
  {
    title: 'Cross Platform Todo App',
    slug: 'cross-platform-todo-app',
    stack: [
      'Quasar',
      'Vue',
      'Cordova',
      'Electron',
      'JavaScript',
      'Google Firebase'
    ],
    description:
      'Yes... it is another todo app... but this one is a cross platform todo app that was built off of Quasar framework! The app uses Electron and Cordova to be able to work as Windows, Mac, Android, and IOS apps. The tasks in the app update in realtime between platforms.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633555413/quasar-todo-project_fd1zlq.png',
    started: 'August 14, 2019',
    status: 'COMPLETED',
    type: 'PERSONAL',
    sourceUrl: '//github.com/corncobb/quasar-todo-project',
    liveUrl: '//todo-app.camcobb.com/'
  },
  {
    title: 'LendU LLC Portals',
    slug: 'lendu-llc',
    stack: ['Material-UI', 'React', 'GraphQL', 'JavaScript', 'Charts.js'],
    description:
      'LendU LLC was originally for an entrepreneurship competition for the University of Nevada Reno (UNR). The business model was modeled after Tuition.io and Gradifi where employers could offer college loan debt repayment through the vehicle of a benefits package.\n\nEmployers could choose to offer a "flat" or "match" program to their employees to help them pay off student loans.\n\nThis new employee benefit acted like a 401k except the money goes towards student loan debt.\n\nI was in charge of building out the LendU Employer and Employee portals that would show data like retention rates, amount paid, interest rate, employee turnover rate, etc.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633555413/lendu-llc-portals_gjpqnp.png',

    status: 'COMPLETED',
    type: 'PROTOTYPE'
  },

  {
    title: 'Portfolio Website V1',
    slug: 'portfolio-site',
    stack: ['React', 'JavaScript', 'Material UI'],
    description:
      'This was my first portfolio website. I chose to build it with React since that was the framework that seemed to be most popular among employers.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633555809/camcobb-website-v1_grdtwt.png',
    status: 'COMPLETED',
    type: 'PERSONAL',
    sourceUrl: '//github.com/corncobb/portfolio-website',
    liveUrl: '//portfolio-website-v1.camcobb.com/'
  },
  {
    title: 'Budgetify',
    slug: 'Budgetify',
    stack: ['JavaScript'],
    description:
      'This was my first real JavaScript project. It was a very simple budgeting app that would tract your income and expenses and give you an output of how much money you have left over (or owed assuming you spend more than what you made).\n\nThis project was loosely based off of a project in a JavaScript Udemy course.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633625622/Budgetify_fiafo5.png',
    status: 'COMPLETED',
    type: 'PERSONAL',
    sourceUrl: '//github.com/corncobb/budget-app',
    liveUrl: '//budgetify.camcobb.com/'
  },
  {
    title: 'Security Card Reader',
    slug: 'security-card-reader',
    stack: ['C++', 'Arduino'],
    description:
      'A simple card reader that was hooked up to an Arduino to read the raw binary output of an RFID/HID card. My university (University of Nevada Reno) used HID security access cards which are harder to decode/clone than traditional RFID cards and I wanted to find a way to decode my card.\n\nDecoding the card could allow me to possibly replicate my card or find various ways to increase security at the university.\n\nDifferent card readers can only read certain cards and formats. The card reader I used was a Software House SWH 5100 Multi-Format Proximity Reader since it was the most similar one at my university and could read my card.',
    imageUrl:
      'https://res.cloudinary.com/dpaucaa0u/image/upload/v1633556011/arduino-hid-card-reader_gmdpxm.jpg',
    status: 'COMPLETED',
    type: 'PERSONAL',
    sourceUrl: '//github.com/corncobb/Arduino-HID-Card-Reader',
    liveUrl: '//youtu.be/LBpcvothOoQ'
  }
] as IProject[];
