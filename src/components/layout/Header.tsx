"use client"
import Link from 'next/link'
import React,{ useEffect, useState }  from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <>
        <header className='w-full z-50 md:fixed lg:fixed'>
            <div className="absolute w-full px-[7%] py-[20px] flex justify-center items-center z-30 ">
                <Link href="/" className={`${isScrolled ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} transition-colors duration-300 text-black`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.876 7.41361C12.8795 8.44751 12.5758 9.46128 12 10.3379C11.4242 9.46128 11.1205 8.44751 11.124 7.41361V7.17373C11.124 6.09995 11.448 5.09472 12 4.2494C12.552 5.09472 12.876 6.09995 12.876 7.17373V7.41361ZM12.876 16.6207C12.876 17.6944 12.552 18.6997 12 19.545C11.4248 18.6681 11.1212 17.6545 11.124 16.6207V16.3808C11.124 15.307 11.448 14.3018 12 13.4564C12.5758 14.3331 12.8795 15.3469 12.876 16.3808V16.6207ZM24 1.75916V0H16.632C14.9364 0.00918318 13.2976 0.58306 12 1.62208C10.6987 0.581403 9.05556 0.0074821 7.356 0H0V1.75916H7.356C8.58785 1.76136 9.78189 2.16442 10.74 2.90148C9.77751 4.15444 9.2604 5.6672 9.264 7.21942V7.56211C9.264 8.2475 9.36 8.91004 9.54 9.53832C8.82744 9.31454 8.08233 9.19889 7.332 9.19562H0V10.9662H7.356C8.496 10.9662 9.564 11.3089 10.452 11.8915C9.54652 12.5008 8.4649 12.8281 7.356 12.8282H0V14.7701H7.32C8.07302 14.7747 8.82212 14.6667 9.54 14.4503C9.35466 15.0941 9.26182 15.7589 9.264 16.4265V16.7577C9.264 18.3227 9.768 19.7734 10.644 20.9614C9.70316 21.6561 8.54667 22.0338 7.356 22.0352H0V23.9772H7.32C9.03062 23.9819 10.6881 23.4115 12 22.3665C13.3086 23.4197 14.9664 23.9983 16.68 24H24V22.0581H16.644C15.4478 22.0559 14.2865 21.674 13.344 20.9729C14.2569 19.7433 14.7474 18.2748 14.748 16.7692V16.4379C14.748 15.7525 14.64 15.09 14.46 14.4617C15.1742 14.6763 15.9191 14.7842 16.668 14.7815H24V12.8396H16.644C15.504 12.8396 14.436 12.4969 13.548 11.9029C14.4556 11.2989 15.5366 10.9759 16.644 10.9776H24V9.21847H16.68C15.9223 9.21583 15.1689 9.32765 14.448 9.54974C14.64 8.91004 14.748 8.2475 14.748 7.56211V7.23084C14.7473 5.67747 14.226 4.16483 13.26 2.9129C14.2176 2.17503 15.412 1.77186 16.644 1.77059H24V1.75916Z" fill="currentColor"/>
                    </svg>
                </Link>
            </div>

            <div className={`${isScrolled ? 'lg:bg-white md:bg-white' : 'lg:bg-transparent md:bg-transparent'} bg-white w-full px-[7%] py-[20px] flex justify-between items-center text-white z-20 transition-colors duration-300`}>
                <div className='flex items-center justify-center '>
                    <Link href='' type='button' className={`${isScrolled ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} text-black lg:text-[40px] md:text-[40px] hover:text-[#e2ff42] transition-colors duration-300 z-50`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.125 0.5H24.125V4.5H0.125V0.5ZM0.125 10.5H24.125V14.5H0.125V10.5ZM0.125 20.5H24.125V24.5H0.125V20.5Z" fill="currentColor"/>
                        </svg>
                    </Link>
                </div>
                <div className='flex items-center justify-center'>
                    <Link href="/search" className={`${isScrolled ? 'lg:text-black md:text-black' : 'lg:text-white md:text-white'} text-black hover:text-[#e2ff42] transition-colors duration-300 z-50`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.91429 0C11.2785 0 13.5459 0.939181 15.2176 2.61093C16.8894 4.28269 17.8286 6.55007 17.8286 8.91429C17.8286 11.1223 17.0194 13.152 15.6891 14.7154L16.0594 15.0857H17.1429L24 21.9429L21.9429 24L15.0857 17.1429V16.0594L14.7154 15.6891C13.152 17.0194 11.1223 17.8286 8.91429 17.8286C6.55007 17.8286 4.28269 16.8894 2.61093 15.2176C0.939181 13.5459 0 11.2785 0 8.91429C0 6.55007 0.939181 4.28269 2.61093 2.61093C4.28269 0.939181 6.55007 0 8.91429 0ZM8.91429 2.74286C5.48571 2.74286 2.74286 5.48571 2.74286 8.91429C2.74286 12.3429 5.48571 15.0857 8.91429 15.0857C12.3429 15.0857 15.0857 12.3429 15.0857 8.91429C15.0857 5.48571 12.3429 2.74286 8.91429 2.74286Z" fill="currentColor"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
