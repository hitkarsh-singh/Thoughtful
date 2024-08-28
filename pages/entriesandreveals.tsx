import React, {useState} from 'react';
import {ChevronLeft, ChevronRight, Lock, Unlock} from 'lucide-react';

const Thoughtful = () => {
    const [selectedDate,
        setSelectedDate] = useState(new Date(2023, 7, 5)); // August 5, 2023

    const entries = [
        {
            date: "Today's entry",
            content: "I'm so grateful for my family. They are always there for me.",
            imageUrl: "https://cdn.usegalileo.ai/stability/5498e2a7-ad6c-444e-b0f3-d84a49f520a2.png"
        },
        // Add more entries as needed
    ];

    const reveals = [
        {
            date: "June 15, 2023",
            content: "You're doing great! Keep up the good work!",
            imageUrl: "https://cdn.usegalileo.ai/stability/c91b2eee-b7f8-4114-b89c-cc8675455d5d.png"
        }, {
            date: "June 22, 2023",
            content: "You can do it! I believe in you!",
            imageUrl: "https://cdn.usegalileo.ai/stability/57d70c1b-cbaf-4ad0-9485-01bcd887aaaf.png"
        }, {
            date: "June 29, 2023",
            content: "Just a reminder to take care of yourself. You're important too.",
            imageUrl: "https://cdn.usegalileo.ai/stability/0a48e1d7-d349-45ef-81a1-53d6379d8ca3.png"
        },
        // Add more reveals as needed
    ];

    const renderCalendar = () => {
        const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-12 w-full"/>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const isSelected = i === selectedDate.getDate();
            days.push(
                <button
                    key={i}
                    className={`h-12 w-full text-sm font-medium leading-normal ${isSelected
                    ? 'text-white'
                    : 'text-[#111418]'}`}>
                    <div
                        className={`flex size-full items-center justify-center rounded-full ${isSelected
                        ? 'bg-[#1980e6]'
                        : ''}`}>{i}</div>
                </button>
            );
        }

        return days;
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-['Epilogue','Noto_Sans',sans-serif]">
            <div className="layout-container flex h-full grow flex-col">
                <header
                    className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#111418]">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2
                            className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Thoughtful</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-9">
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Entries</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Peers</a>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">New Entry</span>
                            </button>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Settings</span>
                            </button>
                        </div>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{
                            backgroundImage: 'url("https://cdn.usegalileo.ai/stability/0d0261b8-f3f9-4996-8887-f864febcd140.png")'
                        }}/>
                    </div>
                </header>
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p
                                className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Reveals &amp; Entries</p>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">New Entry</span>
                            </button>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
                            <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
                                <div className="flex items-center p-1 justify-between">
                                    <button>
                                        <div className="text-[#111418] flex size-10 items-center justify-center">
                                            <ChevronLeft className="text-[#111418] w-6 h-6"/>
                                        </div>
                                    </button>
                                    <p
                                        className="text-[#111418] text-base font-bold leading-tight flex-1 text-center">
                                        {selectedDate.toLocaleString('default', {
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                    <button>
                                        <div className="text-[#111418] flex size-10 items-center justify-center">
                                            <ChevronRight className="text-[#111418] w-6 h-6"/>
                                        </div>
                                    </button>
                                </div>
                                <div className="grid grid-cols-7">
                                    {[
                                        'S',
                                        'M',
                                        'T',
                                        'W',
                                        'T',
                                        'F',
                                        'S'
                                    ].map((day, index) => (
                                        <p
                                            key={index}
                                            className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">{day}</p>
                                    ))}
                                    {renderCalendar()}
                                </div>
                            </div>
                        </div>
                        <h2
                            className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">July 8, 2023</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                            <div
                                className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 items-center">
                                <Unlock className="text-[#111418] w-6 h-6"/>
                                <h2 className="text-[#111418] text-base font-bold leading-tight">Unlocked until Aug 8</h2>
                            </div>
                            <div
                                className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 items-center">
                                <Lock className="text-[#111418] w-6 h-6"/>
                                <h2 className="text-[#111418] text-base font-bold leading-tight">Locked until Aug 8</h2>
                            </div>
                        </div>
                        <h2
                            className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">June 8, 2023</h2>
                        {[
                            ...entries,
                            ...reveals
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                                    style={{
                                    backgroundImage: `url("${item.imageUrl}")`
                                }}/>
                                <div className="flex flex-col justify-center">
                                    <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">{item.date}</p>
                                    <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thoughtful;