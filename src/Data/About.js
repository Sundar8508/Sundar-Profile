import AboutImg from'../Images/about.png';
export default function About () {
 const config = {

    

 }

    return<section className='flex flex-col md:flex-row bg-secondary px-4 'id='About'>
        <div className=' py-4 md:w-1/4'>
            <img src={AboutImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'>

        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-2xl   border-b-4 border-primary mb-2 w-[120px] font-bold'>About Me</h1>
        <p className='pb-6 '>{config.line1} Motivated Full-Stack Developer skilled in Python, JavaScript, React.js, Flask, and Django. Built Coffero, a coffee
shop website, and Knowledge Bridge, an online course platform. Proficient in MongoDB, Git, Netlify, Vercel, and
API development. Completed a Python Full-Stack Development course and passionate about creating scalable,
high-quality web solutions. Strong problem-solving skills with a focus on performance optimization and clean code
practices. Always eager to learn and adapt to emerging technologies.</p>
       
        </div>

        </div>
    </section>

}