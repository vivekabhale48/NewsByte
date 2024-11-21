import React, { useContext, useState } from 'react'
import { Context } from '../context/contextApi'
import { categories } from '../utils/constants'
import Category from './Category'
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

const MainPage = () => {

    const {data} = useContext(Context)
    const[bookmark, setBookmark] = useState(new Set());

    const data2 = data.articles ?? data.sources
    console.log(bookmark);

    const handleBookmarkToggle = (index) => {
        setBookmark((prevBookmarks) => {
            console.log(prevBookmarks)
            const updatedBookmarks = new Set(prevBookmarks);
            if (updatedBookmarks.has(index)) {
                updatedBookmarks.delete(index); // Remove if already bookmarked
            } else {
                updatedBookmarks.add(index); // Add if not bookmarked
            }
            return updatedBookmarks;
        });
    };

    console.log(data)
    return (
        <div className='relative top-[108px] mt-10 max-w-[940px] mx-auto '>
            <div className='flex justify-center gap-4 flex-wrap'>
                {
                    categories.map((category, index) => (
                        <Category key={index} category={category}/>
                    ))
                }
            </div>
            <div className='mt-10 px-5'>
                {
                    data2?.map((news, index)=>(
                        <div key={index} className='news-card flex max-lg:flex-col'>
                            {
                                news.urlToImage ? (
                                    <img className='w-[320px] h-[268px] mr-4 object-cover max-lg:w-full' src={news?.urlToImage} alt={news?.title} />
                                ) : (
                                    <img className='w-[320px] h-[268px] mr-4 object-cover max-lg:w-full' src="/blog_dummy.png" alt="dummyimage" />
                                )
                            }
                            
                            <div className='p-[10px] flex flex-col justify-between'>
                                <div>
                                    <h2 className='font-light text-[28px] leading-[32px] mb-2'>{news?.title}</h2>
                                    <div className='font-light text-[13px] mb-2'><strong>short</strong> by {news?.author}</div>
                                    <p className='font-light leading-[25px] -tracking-[1px] text-[20px]'>{news?.description}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>read more at {news?.source?.name}</span>
                                    <span onClick={() => handleBookmarkToggle(index)} className='mr-2 cursor-pointer active:translate-y-[2px]'>
                                        {
                                            bookmark.has(index) ? (<FaBookmark className='w-5 h-5' />) : (<FaRegBookmark className='w-5 h-5' />)
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MainPage