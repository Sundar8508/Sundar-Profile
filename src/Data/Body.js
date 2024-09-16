import BodyImg from '../Images/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
export default function Body() {
    const config = {
        subtitle: 'Im a FUll-Stack Developer'
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-5xl font-Body-font'>Hi,<br/> IM <span className='text-black'> SUNDAR</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>

        <div className='flex py-6'>
            <a href='#' className='pr-4 hover:text-white'><AiOutlineTwitter size={30}/></a>
            <a href='#' className='pr-4 hover:text-white'><AiOutlineFacebook size={30}/></a>
            <a href='#' className='pr-4 hover:text-white'><AiOutlineLinkedin size={30}/></a>
            <a href='#' className='pr-4 hover:text-white'><AiOutlineGithub size={30}/></a>
        </div>
       
        </div>
       
       
        <img className='md: w-1/3' src={BodyImg}/>
       
    </section>

}
