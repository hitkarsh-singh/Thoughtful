import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Category {
  title: string;
  description: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    title: 'Wellness',
    description: 'Prompts to help you reflect on your mental and physical health',
    imageUrl: 'https://cdn.usegalileo.ai/stability/dd229d0f-7732-4641-9c7b-df7e73222d79.png',
  },
  {
    title: 'Relationships',
    description: 'Prompts to help you reflect on your relationships with friends and family',
    imageUrl: 'https://cdn.usegalileo.ai/sdxl10/44b5af36-2c18-4920-9d2d-a10de6aa182f.png',
  },
  {
    title: 'Work',
    description: 'Prompts to help you reflect on your career and professional life',
    imageUrl: 'https://cdn.usegalileo.ai/stability/51cc4abd-fa59-4a16-9621-58e6a27a2373.png',
  },
  {
    title: 'Growth',
    description: 'Prompts to help you reflect on your personal development and self-improvement',
    imageUrl: 'https://cdn.usegalileo.ai/sdxl10/9f124eea-7f74-4584-a9a7-5a61ef133a68.png',
  },
  {
    title: 'Gratitude',
    description: 'Prompts to help you reflect on the things you\'re thankful for',
    imageUrl: 'https://cdn.usegalileo.ai/sdxl10/c6ae7cc9-1c8d-45b2-9d67-5f8ceb363e0a.png',
  },
  {
    title: 'Creativity',
    description: 'Prompts to help you reflect on your creative process and inspiration',
    imageUrl: 'https://cdn.usegalileo.ai/sdxl10/f6ef21bc-9a4f-4c36-92ae-f506a1904885.png',
  },
];

const CategoriesPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white overflow-x-hidden font-['Epilogue','Noto_Sans',sans-serif]">
      <Head>
        <title>Thoughtful - Categories</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Epilogue:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
        />
      </Head>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Thoughtful</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Entries</a>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Peers</a>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Explore</a>
            </div>
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-6">Choose a Category</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="relative bg-white rounded-xl shadow-lg overflow-hidden group">
                <img src={category.imageUrl} alt={category.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-opacity group-hover:bg-opacity-60">
                  <h2 className="text-white text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-white text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{category.description}</p>
                  <button
                    // onClick={() => router.push(`/category/${category.title.toLowerCase()}`)}
                    onClick={() => router.push(`/entriesandreveals`)}
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoriesPage;