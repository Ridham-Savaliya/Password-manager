import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-green-500 text-white   '>
            <div className="mycontainer justify-around items-center flex px-4 py-5 h-14">
                <div className="logo font-bold text-2xl">
                    <span className='text-green-700'> &lt;</span>
                    Pass
                    <span className='text-green-700'>OP&gt;</span>
                    </div>
                {/* <ul className='flex justify-around items-center gap-6 '>
                    <li><a className='hover:font-bold' href="/">Home</a></li>
                    <li><a className='hover:font-bold' href="#">About</a></li>
                    <li><a className='hover:font-bold' href="#">Contact</a></li>
                    <li><a className='hover:font-bold' href="#">Services</a></li>
                 </ul> */}
                 <div className='cursor-pointer hover:bg-white hover:rounded-md '>
                    <a href="https://github.com/Ridham-Savaliya"><img src="./icons/github.svg" alt="github-logo" height={35} width={35}/></a>
                 </div>
            </div>
        </nav>
    )
}

export default Navbar
