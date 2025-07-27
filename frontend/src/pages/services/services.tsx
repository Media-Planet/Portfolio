import style from './services.module.css';
import photo from '../../assets/Images/services/1.png';
import logo from '../../assets/Images/services/Logo_1.png';
import sec2_png1 from '../../assets/Images/services/2.png';
import sec2_S1 from '../../assets/Images/services/small_1.png';
import sec2_S2 from '../../assets/Images/services/small_2.png';
import sec2_S3 from '../../assets/Images/services/small_3.png';
import sec2_S4 from '../../assets/Images/services/small_4.png';
import sec3_P1 from '../../assets/Images/services/sec_1.png'
import sec3_P2 from '../../assets/Images/services/sec_2.png'
import sec3_P3 from '../../assets/Images/services/sec_3.png'
import sec3_S5 from '../../assets/Images/services/small_5.png';
import sec3_S6 from '../../assets/Images/services/small_6.png';
import sec3_S7 from '../../assets/Images/services/small_7.png';

function Services() {
    return (
        <>
            <div className='px-4 bg-primary '>
                <section className={`${style['sec_S']} pt-3`}>
                    <div className='row'>
                        <section className='row col-7'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-3 mb-5 ${style['H_S']}`}>Web Development</h2>
                            <p className={`InterF text-black my-5 ${style['P_S']}`}>We craft stunning,
                                responsive websites that combine bold design with smooth functionality—built
                                to impress and perform.</p>
                            <div className='col-sm-6 col-md-10 col-lg-12'>
                                <button className='btn mt-3 py-1 bg-secondary text-success w-100 rounded-4 border-0 Times_New_RomanF_italic fs-1'>
                                    <img className='m-1' src={logo} alt="Media Planet" width={65} />Start Your Journey
                                </button>
                            </div>
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
                        <section className='col-6'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-3 mb-4  ${style['Sec2_H_S']}`}>What Do We Do ?</h2>
                            <p className={`InterF text-black mb-5 ${style['Sec2_P_S_2']}`}>
                                From landing pages to full-scale platforms,
                                we design websites that are fast, responsive,
                                and built to tell your brand’s story in style.
                            </p>

                            <ul className='list-unstyled list d-flex flex-column gap-5'>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={sec2_S1} className={`mx-4 ${style['Sec2_S_img_S']}`} />
                                    Custom UI/UX Design
                                </li>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={sec2_S2} className={`mx-4 ${style['Sec2_S_img_S']}`} />
                                    Responsive Development
                                </li>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={sec2_S3} className={`mx-4 ${style['Sec2_S_img_S']}`} />
                                    E-commerce
                                </li>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={sec2_S4} className={`mx-4 ${style['Sec2_S_img_S']}`} />
                                    SEO & Performance Optimization
                                </li>
                            </ul>
                        </section>

                        <section className='col-6'>
                            <img src={sec2_png1} alt="#" className={`${style['img_S']}`} />
                            <h3 className={`Times_New_RomanF_italic text-black ${style['Sec2_H_S_2']}`}>Built for every screen</h3>
                            <p className={`InterF text-black ${style['Sec2_P_S_2']}`}>Your website will shine everywhere from big screens to mobile
                                devices without losing speed or style.
                            </p>
                        </section>
                    </div>

                    <div className='d-flex mt-3'>
                        <p className='mx-5 border border-black w-25'></p>
                    </div>
                </div>


                <div className={`${style['sec_S']} mt-5 pb-5`}>
                    <h2 className={`Times_New_RomanF_italic text-black mt-2 mb-5 ${style['H_S']}`}>Our Approach</h2>

                    <section className='row gap-5 justify-content-around'>
                        <div className='col-3 d-flex justify-content-center flex-column'>
                            <img src={sec3_P1} />
                            <p className={`${style['Sec3_P_S']} InterF text-black text-center`}>Understand goals and user needs</p>
                        </div>
                        <div className='col-3 d-flex justify-content-center flex-column text-center'>
                            <img src={sec3_P2} />
                            <p className={`${style['Sec3_P_S']} InterF text-black`}>Create beautiful, functional layouts</p>
                        </div>
                        <div className='col-3 d-flex justify-content-center flex-column text-center'>
                            <img src={sec3_P3} />
                            <p className={`${style['Sec3_P_S']} InterF text-black`}>Develop and launch with precision</p>
                        </div>
                    </section>
                </div>

                <div className='mt-5'>
                    <section className='row'>
                        <div className='col-7'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-2 mb-5 ${style['H_S']}`}>Why Choose Us?</h2>
                            <p className={`InterF text-black my-5 ${style['P_S']}`}>We’re not just designers – we are digital storytellers.
                                We create web experiences that connect people together and help your business stand out,
                                grow online, and turn visitors into loyal customers.
                            </p>
                        </div>

                        <div className='col-5 align-content-center'>
                            <li className='list-unstyled d-flex flex-column gap-4'>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={sec3_S5} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Fast Load Times
                                </ul>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={sec3_S6} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Accessible & User-Friendly
                                </ul>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={sec3_S7} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Built for Growth
                                </ul>
                            </li>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Services