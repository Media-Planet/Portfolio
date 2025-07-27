import style from './services.module.css';
import photo from '../../assets/Images/services/1.png';
import logo from '../../assets/Images/services/Logo_1.png';

const images = import.meta.glob('/src/assets/images/services/*.{jpg,jpeg,png}', { eager: true });

const imageArray = Object.values(images).map((mod: any) => mod.default);

function Services() {
    return (
        <>
            <div className='bg-primary px-4'>
                <section className={`${style['sec_S']} pt-3`}>
                    <div className='row'>
                        <section className='col-7'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-3 mb-5 ${style['H_S']}`}>Web Development</h2>
                            <p className={`InterF text-black my-5 ${style['P_S']}`}>We craft stunning,
                                responsive websites that combine bold design with smooth functionality—built
                                to impress and perform.</p>
                            <button className='mt-3 py-1 bg-secondary text-success w-100 rounded-4 border-0 Times_New_RomanF_italic fs-1'>
                                <img className='m-1' src={logo} alt="Media Planet" width={65} />Start Your Journey
                            </button>
                        </section>
                        <section className='col-5'>
                            <img src={photo} className={`${style['img_S']}`} alt="... coding" />
                        </section>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <p className='border border-black w-75 mt-5'></p>
                    </div>
                </section>

                <div className={`${style['sec_S']}`}>
                    <div className='row'>
                        <section className='col-7'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-3 mb-4  ${style['H_S']}`}>What Do We Do ?</h2>
                            <p className={`InterF text-black mb-3 ${style['P_S_2']}`}>
                                From landing pages to full-scale platforms,
                                we design websites that are fast, responsive,
                                and built to tell your brand’s story in style.
                            </p>

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

                        <section className='col-5'>
                            <img src={imageArray[1]} alt="#" className={`${style['img_S']}`} />
                            <h3 className={`Times_New_RomanF_italic text-black ${style['H_S_2']}`}>Built for every screen</h3>
                            <p className={`InterF text-black ${style['P_S_2']}`}>Your website will shine everywhere from big screens to mobile
                                devices without losing speed or style.
                            </p>
                        </section>
                    </div>

                    <div className='d-flex mt-5'>
                        <p className='mx-5 border border-black w-25'></p>
                    </div>
                </div>

                <div className={`${style['sec_S']} pt-5`}>
                    <h2 className='Times_New_RomanF_italic text-black mt-3 mb-4 fs-1'>Our Approach</h2>

                    <section className='d-flex justify-content-around gap-5'>
                        <img src={imageArray[3]} width={200} className='' />
                        <img src={imageArray[4]} width={200} className='' />
                        <img src={imageArray[5]} width={200} className='' />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Services