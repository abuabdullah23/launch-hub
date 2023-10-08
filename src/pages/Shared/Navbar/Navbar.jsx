import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import { allNav } from './NavItem';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { FaList } from 'react-icons/fa';

const Navbar = () => {
    const user = null;
    const [show, setShow] = useState(false);

    return (
        <div className='sticky top-0 z-10 shadow py-3 bg-white'>
            <Container>
                <div className='flex items-center justify-between relative'>
                    <Link to={'/'} className='hidden lg:block'>
                        <h2 className='text-2xl font-bold'>Launch<span className='text-orange-500'>Hub</span></h2>
                    </Link>

                    <div onClick={() => setShow(!show)} className='lg:hidden p-2 rounded bg-slate-300'>
                        <FaList />
                    </div>

                    {/* show only medium device */}
                    <div className={`${show ? 'absolute bg-white z-20 w-3/4 h-screen -top-3 -left-5 p-8' : 'hidden'} lg:hidden`}>
                        <ul className='flex flex-col items-start gap-2 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                        </ul>
                    </div>

                    {/* show in large device */}
                    <div className='hidden lg:block'>
                        <ul className='lg:flex items-center gap-5 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
                        {
                            user ? <>
                                <div className='flex items-center gap-3'>
                                    <img className='h-8 w-8 rounded-full' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user image" />
                                    <button className='text-gray-600 hover:text-red-500 font-semibold'>Log Out</button>
                                </div>
                            </> : <>
                                <Link className='text-gray-600 hover:text-orange-500 font-semibold' to={'/login'}>Log In</Link>
                            </>
                        }
                    </div>
                </div>
            </Container>
            <div onClick={() => setShow(false)} className={`fixed duration-200 ${!show ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10 lg:hidden`}></div>

        </div>
    );
};

export default Navbar;