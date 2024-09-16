import AboutImg from'../Images/about.png';

export default function About () {
 const config = {
    line1: 'Hi, my name is sundar.I am a full stack developer',
    line2: 'I am  proficient in Frontend skills',
    line3: 'In Backend i know Node js and thepython'
 }

    return<section className='flex flex-col md:flex-row bg-secondary px-5 'id='About'>
        <div className=' py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'>

        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-2xl  border-b-4 border-primary mb-2 w-[120px] font-bold'>About Me</h1>
        <p className='pb-4'>{config.line1}</p>
        <p className='pb-4'>{config.line2}</p>
        <p className='pb-4'>{config.line3}</p>
        </div>

        </div>
    </section>

}