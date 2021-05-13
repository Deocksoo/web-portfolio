import React from "react";

interface TheaterListingItem {
    title: string;
    source: string;
}

const Theater: React.FC = () => {
    const theaterListingItems: TheaterListingItem[] = [
        {
            title: 'Jooyoung\'s jumto',
            source:
                'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'Greedy Joo',
            source:
                'https://cdnweb01.wikitree.co.kr/webdata/editor/201912/30/img_20191230153052_44768910.jpg',
        },
        {
            title: 'Joo\'s cake',
            source:
                'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrPjDC%2FbtqBdTykrlc%2FRFFN4LM7AVKPbJyiddqeaK%2Fimg.jpg',
        },
        {
            title: 'Joo\'s Valentine',
            source:
                'http://www.issueedico.co.kr/data/bbs_data/interest/eeaf26e8.jpg',
        },
    ]

    return (
        <ul role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-7">
            {theaterListingItems.map((item) => (
                <li key={item.source} className="relative text-center">
                    <div
                        className="group block w-full aspect-w-10 aspect-h-10 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-green-800 overflow-hidden">
                        <img src={item.source} alt=""
                             className="object-cover pointer-events-none group-hover:opacity-75"/>
                        <button type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">View details for {item.title}</span>
                        </button>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{item.title}</p>
                </li>
            ))}
        </ul>
    )
}

export default Theater;
