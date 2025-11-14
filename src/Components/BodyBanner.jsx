import bodybannerimg from '../assets/home/chef-service.jpg'
const BodyBanner = () => {
    return (
        <div className='mb-10 max-w-6xl mx-auto flex justify-center'>
            <div className='relative '>
                <img src={bodybannerimg} alt="" srcset="" />
            </div>
            <div className='bg-white text-black text-center absolute -bottom-[500px] lg:-bottom-[890px] p-0 lg:p-10 max-w-3xl mx-auto'>
                <h2 className='text-xl lg:text-3xl mb-3'>KB Restaurants</h2>
                <p className='text-sm md:text-base leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aperiam, reiciendis ex voluptas, illum alias aliquam laboriosam id reprehenderit magnam unde quia. Recusandae, suscipit at, nulla nostrum iure esse dolor explicabo aut commodi neque voluptatibus possimus!</p>
            </div>
        </div>
    );
};

export default BodyBanner;