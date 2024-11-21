import React, { useContext } from 'react'
import { fetchDataFromApi, fetchNewsFromCategory } from '../utils/api';
import { Context } from '../context/contextApi';

const Category = ({category}) => {
    const {setData, setCategory} = useContext(Context);

    async function categoryClicked(catName) {
        console.log(catName);
        if(catName === 'All') {
            const data = await fetchDataFromApi();
            setData(data);
            return;
        }
        const data = await fetchNewsFromCategory(catName);
        setData(data);
        setCategory(catName)
    }
  return (
    <div onClick={()=> categoryClicked(category.name)} className='category-buttons py-[6px] px-[10px] rounded-[15px] hover:bg-[#eee] cursor-pointer transition-all duration-200 flex items-center justify-center'>
         {
            category.img && (
                <img className='w-8 mr-2' src={category.img} alt="" />
            )
         }
        <div>
            {category.name}
        </div>
    </div>
  )
}

export default Category