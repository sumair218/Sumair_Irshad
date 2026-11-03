import flutter from './assets/logos/flutter.svg';
import react from './assets/logos/react.svg';
import kotlin from './assets/logos/kotlin.svg';
import swift from './assets/logos/swift.svg';
import python from './assets/logos/python.svg';
import fastapi from './assets/logos/fastapi.svg';
import nodejs from './assets/logos/nodejs.svg';
import docker from './assets/logos/docker.svg';
import githubactions from './assets/logos/githubactions.svg';
import linux from './assets/logos/linux.svg';
import android from './assets/logos/android.svg';
import apple from './assets/logos/apple.svg';
import materialui from './assets/logos/materialui.svg';
import aws from './assets/logos/aws.svg';

export const profile = {
  name: 'Sumair Irshad',
  email: 'sumairirshad52@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sumair-arshad-ai/',
  github: 'https://github.com/sumair218',
  location: 'Gilgit-Baltistan, Pakistan',
};

export const COLORS = {
  blue: ['#1D6FE0', '#38BDF8'], orange: ['#F97316', '#FDBA74'], violet: ['#6D28D9', '#A78BFA'],
  teal: ['#0D9488', '#5EEAD4'], red: ['#DC2626', '#FCA5A5'], sky: ['#0284C7', '#7DD3FC'],
  green: ['#16A34A', '#86EFAC'], ink: ['#0B2545', '#60A5FA'],
};

// Each project renders as a phone or website preview from its `screen` and `icons` data.
export const projects = [
  { name: 'GoFood', cats: ['mobile'], color: 'orange', stack: ['Flutter', 'REST API', 'Maps'],
    desc: 'Food delivery app covering browsing, ordering and live order tracking.',
    screen: { title: 'GoFood', hero: ['Free delivery', '20% off your first order', 'Use code GO20'], section: 'Popular near you',
      tiles: ['Burgers', 'Pizza', 'Biryani', 'Desserts'], list: [['Chicken Karahi', '25–30 min', 'Rs 1,450'], ['Zinger Burger', '15–20 min', 'Rs 650']] },
    icons: { hero: 'bike', tiles: ['burger', 'pizza', 'bowl', 'cake'], list: ['clock', 'bike'] } },
  { name: 'Jewelry Store App', cats: ['mobile'], color: 'violet', stack: ['Mobile app', 'Jewelry shopping'],
    desc: 'Mobile shopping experience for browsing jewelry collections and discovering featured pieces.',
    screen: { title: 'Jewelry', hero: ['New collection', 'Find a piece to treasure', 'Explore jewelry for every style and occasion.'], section: 'Featured pieces',
      tiles: ['Necklaces', 'Rings', 'Bracelets', 'Earrings'], list: [['Gold necklace', 'Featured collection', '›'], ['Classic ring', 'Customer favourite', '›']] },
    icons: { hero: 'award', tiles: ['tag', 'star', 'heart', 'spark'], list: ['award', 'heart'] } },
  { name: 'Banking App', cats: ['mobile'], color: 'blue', stack: ['Mobile app', 'Digital banking'],
    desc: 'Mobile banking concept for checking account balances and keeping track of transactions.',
    screen: { title: 'MyBank', hero: ['Account balance', 'Rs 248,500', 'Your accounts and recent activity at a glance.'], section: 'Quick actions',
      tiles: ['Send money', 'Pay bills', 'Cards', 'Accounts'], list: [['Recent transfer', 'Today · 10:42 AM', '−'], ['Utility bill', 'Yesterday', '−']] },
    icons: { hero: 'chart', tiles: ['users', 'check', 'grid', 'db'], list: ['users', 'check'] } },
  { name: 'Melody', cats: ['mobile'], color: 'violet', stack: ['Flutter', 'Dart', 'Firebase'],
    desc: 'Music discovery app with curated playlists and a fluid, gesture-driven player.',
    screen: { title: 'Melody', hero: ['Now playing', 'Midnight Drive', '3:24 / 4:10'], section: 'Made for you',
      tiles: ['Chill Mix', 'Focus', 'Road Trip', 'Lo-fi'], list: [['Daily Mix 1', '32 songs', '▶'], ['Top Hits PK', '50 songs', '▶']] },
    icons: { hero: 'head', tiles: ['moon', 'target', 'car', 'music'], list: ['play', 'list'] } },
  { name: 'Hotel Management System', cats: ['web'], color: 'teal', stack: ['Hotel booking', 'Admin dashboard'],
    desc: 'Guest booking flow plus an admin dashboard for rooms and reservations.',
    link: 'https://hotel-frontend-hazel.vercel.app', cta: 'Live demo',
    screen: { title: 'StayEase', hero: ['Search rooms', 'Find your perfect stay', 'Check availability and book in seconds.'], section: 'Featured',
      tiles: ['Deluxe King', 'Family Suite', 'Standard Twin', 'Rooms'], list: [['Rooms', 'Deluxe King', '›'], ['Offers', 'Family Suite', '›']] },
    icons: { hero: 'bed', tiles: ['bed', 'wifi', 'pool', 'key'], list: ['cal', 'chart'] } },
  { name: 'Pizza Hut E-commerce', cats: ['web'], color: 'red', stack: ['Restaurant', 'Online ordering'],
    desc: 'Pizza storefront for exploring the menu and placing online orders.',
    link: 'https://pizza-hut-ecommerce.vercel.app', cta: 'Live demo',
    screen: { title: 'Slice&Co', hero: ['View menu', 'Hot, fresh and delivered fast', 'Build your order and check out in a minute.'], section: 'Featured',
      tiles: ['Margherita', 'Pepperoni', 'Veggie Supreme', 'Menu'], list: [['Menu', 'Margherita', '›'], ['Deals', 'Pepperoni', '›']] },
    icons: { hero: 'pizza', tiles: ['pizza', 'fire', 'drink', 'tag'], list: ['list', 'cart'] } },
  { name: 'Roommate Finder', cats: ['web'], color: 'sky', stack: ['React', 'Node.js', 'MongoDB'],
    desc: 'Listings and matching that help people find compatible roommates.',
    link: 'https://roommate-finder-tan.vercel.app', cta: 'Live demo',
    screen: { title: 'Roommate Finder', hero: ['Top match', 'Ali, 24 · Software dev', '92% compatible'], section: 'Rooms near you',
      tiles: ['Jutial', 'Zulfiqarabad', 'Konodas', 'Danyore'], list: [['Shared flat, 2 bed', 'Jutial', 'Rs 12k'], ['Single room', 'Konodas', 'Rs 9k']] },
    icons: { hero: 'users', tiles: ['pin', 'pin', 'pin', 'pin'], list: ['home', 'chat'] } },
  { name: 'Pharmacy Website', cats: ['web'], color: 'green', stack: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Online pharmacy storefront with product catalog and ordering.',
    link: 'https://demo12334445556.netlify.app', cta: 'Live demo', source: 'https://github.com/sumair218/pharmacy',
    screen: { title: 'MediCare+', hero: ['Shop now', 'Your pharmacy, now online', 'Order medicines and health essentials from home.'], section: 'Featured',
      tiles: ['Vitamins', 'First aid', 'Baby care', 'Upload Rx'], list: [['Medicines', 'Vitamins', '›'], ['Wellness', 'First aid', '›']] },
    icons: { hero: 'cross', tiles: ['pill', 'heart', 'baby', 'upload'], list: ['pill', 'heart'] } },
  { name: 'Coffca Dark', cats: ['web'], color: 'orange', stack: ['Coffee shop', 'Brand website'],
    desc: 'Coffee shop website with a warm, dark visual style.',
    link: 'https://coffca-dark.netlify.app', cta: 'Live demo',
    screen: { title: 'Coffca', hero: ['Freshly brewed', 'Find your perfect cup', 'Coffee and good moments, every day.'], section: 'Our favourites',
      tiles: ['Espresso', 'Latte', 'Cappuccino', 'Mocha'], list: [['House blend', 'Rich and smooth', '›'], ['Cold brew', 'Brewed overnight', '›']] },
    icons: { hero: 'drink', tiles: ['drink', 'drink', 'drink', 'drink'], list: ['star', 'clock'] } },
  { name: 'Bakery Hero', cats: ['web'], color: 'red', stack: ['Bakery', 'Brand website'],
    desc: 'Bakery website showcasing freshly baked goods and treats.',
    link: 'https://bakeryhero.netlify.app', cta: 'Live demo',
    screen: { title: 'Bakery Hero', hero: ['Baked fresh', 'A little joy in every bite', 'Freshly made treats for every occasion.'], section: 'From the oven',
      tiles: ['Croissants', 'Cupcakes', 'Sourdough', 'Cookies'], list: [['Butter croissant', 'Flaky and golden', '›'], ['Berry tart', 'Baked fresh today', '›']] },
    icons: { hero: 'cake', tiles: ['cake', 'cake', 'pizza', 'cake'], list: ['cake', 'star'] } },
  { name: 'Banos Store', cats: ['web'], color: 'violet', stack: ['Clothing', 'Brand storefront'],
    desc: 'Clothing brand website for showcasing styles and shopping the collection.',
    link: 'https://banos-store.vercel.app', cta: 'Live demo',
    screen: { title: 'Banos Store', hero: ['New collection', 'Style made for you', 'Explore clothing and find your new favourites.'], section: 'Shop the collection',
      tiles: ['New arrivals', 'Everyday wear', 'Featured styles', 'Shop all'], list: [['New arrivals', 'Discover the latest', '›'], ['Featured styles', 'Made to stand out', '›']] },
    icons: { hero: 'tag', tiles: ['star', 'user', 'award', 'grid'], list: ['spark', 'tag'] } },
  { name: 'Portfolio Website', cats: ['web'], color: 'ink', stack: ['HTML', 'CSS', 'JavaScript'],
    desc: 'The previous version of this personal portfolio site.',
    link: 'https://irshad2.netlify.app', cta: 'Live demo',
    screen: { title: 'Sumair.', hero: ['View projects', 'Builds intelligent systems that ship', 'Mobile app developer and AI engineer.'], section: 'Featured',
      tiles: ['Melody', 'GoFood', 'AnimeHorizon', 'About'], list: [['About', 'Melody', '›'], ['Projects', 'GoFood', '›']] },
    icons: { hero: 'code', tiles: ['phone', 'spark', 'code', 'mail'], list: ['user', 'brain'] } },
  { name: 'AnimeHorizon', cats: ['ai'], color: 'blue', stack: ['AI recommendations', 'Machine learning'],
    desc: "AI-powered anime recommendation platform that learns each viewer's taste.",
    screen: { title: 'AnimeHorizon', hero: ['Get picks', 'Your next favourite anime, picked by AI', 'Recommendations tuned to your watch history.'], section: 'Featured',
      tiles: ['98% match', '94% match', '91% match', 'Discover'], list: [['Discover', '98% match', '›'], ['Trending', '94% match', '›']] },
    icons: { hero: 'spark', tiles: ['brain', 'star', 'fire', 'tv'], list: ['search', 'bookmark'] } },
  { name: 'Vehicle Detection', cats: ['ai'], color: 'teal', stack: ['Computer vision', 'Object detection'],
    desc: 'Computer vision project concept for detecting and identifying vehicles in images or video.',
    screen: { title: 'Vehicle Vision', hero: ['Live detection', 'Vehicles detected', 'Identify vehicles in a camera frame.'], section: 'Detection results',
      tiles: ['Cars', 'Buses', 'Trucks', 'View frame'], list: [['Car detected', 'Confidence · 98%', '›'], ['Bus detected', 'Confidence · 94%', '›']] },
    icons: { hero: 'car', tiles: ['car', 'car', 'car', 'search'], list: ['car', 'check'] } },
  { name: 'Movie Recommendations', cats: ['ai'], color: 'violet', stack: ['AI recommendations', 'Personalization'],
    desc: 'AI project concept for discovering movies based on viewing preferences and interests.',
    screen: { title: 'Movie Picks', hero: ['Picked for you', 'Your next movie night starts here', 'Explore suggestions based on what you enjoy.'], section: 'Recommended films',
      tiles: ['Top picks', 'Trending', 'Classics', 'Watchlist'], list: [['Tonight’s pick', 'A great match for you', '›'], ['Trending now', 'Popular this week', '›']] },
    icons: { hero: 'tv', tiles: ['star', 'fire', 'award', 'bookmark'], list: ['play', 'star'] } },
];

export const experience = [
  { current: true, date: 'Oct 2024 — Present', role: 'Head of AI Engineering & Data Research', company: 'XVision · Gilgit-Baltistan',
    initials: 'XV', icon: 'spark', desc: 'Leading AI R&D, deploying deep learning and NLP solutions, and managing AI teams.',
    tags: ['Deep learning', 'NLP', 'LLMs', 'Team lead'] },
  { date: '2023 — 2024', role: 'Full Stack Developer', company: 'Sufary Tech · Gilgit', initials: 'ST', icon: 'code',
    desc: 'Built web apps with React, Node.js and Express, integrating AI features.', tags: ['React', 'Node.js', 'Express'] },
  { date: '2020 — 2023', role: 'Data Research Scientist', company: 'Pentavision Technologies · Gilgit', initials: 'PT', icon: 'chart',
    desc: 'Developed and optimized machine learning and deep learning models.', tags: ['Machine learning', 'Model optimisation', 'Python'] },
];

// `logo` is an image; `icon` falls back to a line icon where no official logo is bundled.
export const skills = [
  { title: 'Full-Stack Web', sub: 'Frontend, backend and APIs', icon: 'code', items: [
    { n: 'React', d: 'Frontend apps', logo: react }, { n: 'JavaScript', d: 'Web development', icon: 'code' },
    { n: 'HTML & CSS', d: 'Responsive interfaces', icon: 'grid' }, { n: 'Node.js', d: 'Server-side JavaScript', logo: nodejs },
    { n: 'Express.js', d: 'Backend framework', logo: nodejs }, { n: 'MongoDB', d: 'NoSQL database', icon: 'db' },
    { n: 'REST APIs', d: 'Backend integration', icon: 'cloud' }] },
  { title: 'Mobile', sub: 'Native and cross-platform apps', icon: 'phone', items: [
    { n: 'Flutter', d: 'Cross-platform', logo: flutter }, { n: 'React Native', d: 'Cross-platform', logo: react },
    { n: 'Kotlin', d: 'Android', logo: kotlin }, { n: 'Swift', d: 'iOS', logo: swift }, { n: 'SwiftUI', d: 'iOS UI', logo: swift }] },
  { title: 'Backend & AI', sub: 'Python frameworks, databases and AI', icon: 'brain', items: [
    { n: 'Python', d: 'ML & APIs', logo: python }, { n: 'Django', d: 'Python web framework', icon: 'code' },
    { n: 'FastAPI', d: 'Python APIs', logo: fastapi }, { n: 'Flask', d: 'Python web framework', icon: 'code' },
    { n: 'Databases', d: 'Data storage', icon: 'db' },
    { n: 'Node.js', d: 'JS backend', logo: nodejs }, { n: 'LLMs / RAG', d: 'Retrieval + generation', icon: 'db' },
    { n: 'OpenAI API', d: 'GPT models', icon: 'chat' }, { n: 'Gemini API', d: 'Google models', icon: 'spark' }] },
  { title: 'Platforms', sub: 'Design and store release', icon: 'grid', items: [
    { n: 'Material Design', d: 'Android UI', logo: materialui }, { n: 'App Store', d: 'iOS release', logo: apple },
    { n: 'Play Store', d: 'Android release', logo: android }] },
  { title: 'Infrastructure', sub: 'Deploy, ship and monitor', icon: 'cloud', items: [
    { n: 'AWS', d: 'Cloud hosting', logo: aws }, { n: 'Docker', d: 'Containers', logo: docker },
    { n: 'GitHub Actions', d: 'CI/CD', logo: githubactions }, { n: 'Linux', d: 'Servers', logo: linux }] },
];

export const education = [
  { icon: 'cap', kind: 'Bachelor’s degree', title: 'B.S. Geoinformatics & Remote Sensing', inst: 'Karakoram International University', years: 'Undergraduate', mark: 'EQF 5' },
  { icon: 'brain', kind: 'Short course', title: 'AI & Data Science', inst: 'NUST', years: '2020 — 2022', mark: 'EQF 6' },
  { icon: 'code', kind: 'Training', title: 'Full Stack Web Development', inst: 'Sufary Tech', years: '2023 — 2024', mark: 'Web' },
];

export const certifications = [
  { title: 'AI Engineering', area: 'AI / ML' },
  { title: 'iOS & Android Mobile App Developer', area: 'Mobile' },
];

export const stats = [
  ['4+', 'Years building products'], ['10k+', 'Users served'],
  ['5+', 'ML models in production, 99.9% uptime'], ['−40%', 'Inference latency'],
];

export const marquee = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Django', 'FastAPI', 'Flask', 'Databases', 'Flutter', 'React Native', 'Kotlin', 'Swift', 'SwiftUI', 'Python', 'LLMs', 'RAG', 'OpenAI', 'Gemini', 'AWS', 'Docker', 'GitHub Actions', 'Linux'];
