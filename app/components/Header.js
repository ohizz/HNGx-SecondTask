
import {AiOutlineSearch} from 'react-icons/ai';
import {HiMiniBars2} from 'react-icons/hi2';
const Header = () => {
 return(
    <div className='flex justify-between items-center mt-6 gap-x-8'>
        <div>
        <h1>MovieBox</h1>
        </div>

<div>
    <form className='relative w-full'>
    <input type="search" class="block p-2.5 w-48 md:w-[20em] h-10 z-20 text-sm text-gray-900 bg-gray-100 rounded-lg border border-slate-500 " placeholder="What do you want to watch?" required/>
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-zinc rounded-r-lg hover:bg-pink-500 ">
            <AiOutlineSearch/>
            </button>
    </form>
</div>

<div className='flex gap-x-4 items-center'>
<p>sign in</p>
<p><HiMiniBars2/></p>
</div>
    </div>
 )
}

export default Header;