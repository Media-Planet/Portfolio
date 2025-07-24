// import style from './services.module.css';
import photo from '../../assets/Images/services/1.png';
import logo from '../../assets/Images/services/Logo_1.png';

const images = import.meta.glob('/src/assets/images/services/*.{jpg,jpeg,png}', { eager: true });

const imageArray = Object.values(images).map((mod: any) => mod.default);

function Services() {
    return (
        <>
            <div className='bg-primary container'>
                <div className='d-flex p-3'>
                    <section>
                        <h2 className='Times_New_RomanF_italic text-black mt-3 mb-4 fs-1'>Web Development</h2>
                        <p className='InterF text-black w-75 mb-5'>We craft stunning,
                            responsive websites that combine bold design with smooth functionality—built
                            to impress and perform.</p>
                        <button className='bg-secondary text-success w-50 rounded-4 border-0 Times_New_RomanF_italic fs-4'>
                            <img className='m-1' src={logo} alt="Media Planet" width={40} />Start Your Journey
                        </button>
                    </section>
                    <section>
                        <img src={photo} width={500} alt="... coding" />
                    </section>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <p className='border border-black w-75'></p>
                </div>

                <div className='d-flex mx-3'>
                    <section>
                        <h2 className='Times_New_RomanF_italic text-black mt-3 mb-4 fs-1'>What Do We Do ?</h2>
                        <p className='InterF text-black w-75 mb-5'>From landing pages to full-scale platforms,
                            we design websites that are fast, responsive,
                            and built to tell your brand’s story in style.</p>

                        <ul className='list-unstyled list d-flex flex-column gap-4'>
                            <li><img src={imageArray[6]} width={22} className='mx-4 InterF text-black' />
                                Custom UI/UX Design
                            </li>
                            <li><img src={imageArray[7]} width={22} className='mx-4 InterF text-black' />
                                Responsive Development
                            </li>
                            <li><img src={imageArray[8]} width={22} className='mx-4 InterF text-black' />
                                E-commerce
                            </li>
                            <li><img src={imageArray[9]} width={22} className='mx-4 InterF text-black' />
                                SEO & Performance Optimization
                            </li>
                        </ul>
                    </section>

                    <section className='d-flex flex-column'>
                        <img src={imageArray[1]} width={370} alt="#" className='align-self-center' />
                        <h3 className='Times_New_RomanF_italic text-black fs-1'>Built for every screen</h3>
                        <p className='InterF text-black'>Your website will shine everywhere from big screens to mobile
                            devices without losing speed or style.
                        </p>
                    </section>
                </div>

                <div className='d-flex mt-5'>
                    <p className='mx-5 border border-black w-25'></p>
                </div>

                <div className=''>
                    <h2 className='Times_New_RomanF_italic text-black mt-3 mb-4 fs-1'>Our Approach</h2>

                    <section className='d-flex justify-content-around gap-5'>
                        <img src={imageArray[3]} width={200} className=''/>
                        <img src={imageArray[4]} width={200} className=''/>
                        <img src={imageArray[5]} width={200} className=''/>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Services