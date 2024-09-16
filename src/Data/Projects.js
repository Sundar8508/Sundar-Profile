import websiteimg1 from '../Images/ecommerce-websites.jpg';
import websiteimg2 from '../Images/ecommerce-websites.jpg';
import websiteimg3 from '../Images/website-blog.jpg';


export default function Projects () {
const config ={
    projects : [
        {
            Image: websiteimg1,
            desription: 'A Ecommerce website',
            link:'https://github.com/Sundar8508',
        },
        {
            Image: websiteimg2,
            desription: 'Food Ecommerce website',
            link:'',
        },
        {
            Image: websiteimg3,
            desription: 'Basic Blogb website',
            link:'',
        }
    ]
}

    return <section id='Project' className="flex-col flex py-10 px-4 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className='text-2xl  border-b-4 border-secondary mb-2 w-[120px] font-bold'>Projects</h1>
            <p>These are some of my best projects. I have built these with react</p>
            </div>
        </div>

        <div  className="w-full">
        <div className='flex flex-col md:flex-row  px-10 gap-4'>
            {config.projects.map((project) =>(
                
                 <div className='relative'>
                 <img className='h-[200px] w-[500px]' src={project.Image}/>
                 <div className='project-desc'>
                     <p className='text-centerpx-5 py-5'>{project.desription}</p>
                     <div className='flex justify-center'>
                        <a className='btn' target='blank' href={project.link}>view Project</a>
                     </div>
                 </div>
                 </div>
            ))}

       

       

        </div>
            
        </div>
    </section>
}