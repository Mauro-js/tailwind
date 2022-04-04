import Link from 'next/link';

const Cards = ({posts,prefix, coments}) => {

    if(!posts) return <></>;

    return posts.map(({id,userId,url, title, body}) => <div key={id} className="p-4 sm:w-1/2 lg:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {url && <img src={url} alt="img" className='lg:h72 md:h-48 w-full object-cover object-center'/>}
        <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
            <h2 className="text-base font-medium text-indigo-300 mb-1">User id: {userId}</h2>
            <h1 className="text-2xl font-semibold mb-3">
                {id} - {title}
            </h1>
            <p className="leading-relaxed mb-3">{body}</p>
            <div className="flex items-center flex-wrap ">
            <Link href={`${prefix}${id}`}>
                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </Link>
            {coments && <CardInfo coments={coments} />}
            </div>
        </div>
    </div>
</div>
);
}

const CardInfo = ({coments}) => {
    return  <>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                    </path>
                </svg>{coments}
            </span>
            </>
}

export default Cards;