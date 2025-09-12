import style from '../services.module.css';

import imgs_fun from './data';

const imgs = imgs_fun();


function DigitalMarketing() {
    return (
        <>
            <div className='px-3 px-sm-4 bg-primary'>
                <h2 className={`Times_New_RomanF_italic text-black pt-2 ${style['H_S']}`}>Digital Marketing</h2>
                <div className='row justify-content-between'>
                    <section className='d-grid col-8 col-sm-7 pe-0'>
                        <p className={`align-self-center InterF text-black mb-0 ${style['P_S']} pe-0`}>We create eye-catching content
                            and smart campaigns that grow your brand,
                            spark engagement,
                            and drive results.</p>
                        <div className='align-self-center pe-0 me-sm-5'>
                            <button className={`bg-secondary text-success w-100 rounded-5 border-0 Times_New_RomanF_italic ${style['btn_S']} mt-3 mt-sm-0`}>
                                <img className={`mx-1 mx-sm-3 mb-sm-2 py-1 ${style['btm_Img_S']}`} src={imgs.logo} alt="Media Planet" />Start Your Journey
                            </button>
                        </div>
                    </section>
                    <section className='col p-0'>
                        <img src={imgs.photo} className={`${style['img_S']}`} alt="... coding" />
                    </section>
                </div>

                <div className='d-flex justify-content-center'>
                    <p className='border border-black w-75 mt-4 mt-sm-5'></p>
                </div>

                <div>
                    <div className='row'>
                        <section className='col-sm-6'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-2 mt-sm-3 mb-sm-4  ${style['Sec2_H_S']}`}>What Do We Do ?</h2>
                            <p className={`InterF text-black mb-4 mb-sm-5 ${style['Sec2_P_S_2']}`}>
                                From strategy to launch, we design effective campaigns that bring your story to life -cross-platform,
                                impactful, and built to endure.
                            </p>

                            <ul className='list-unstyled list d-flex flex-column gap-4 gap-sm-5 m-0'>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S1} className={`me-2 me-sm-4 ${style['Sec2_S_img_S']}`} />
                                    Campaign Strategy
                                </li>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S2} className={`me-2 me-sm-4 ${style['Sec2_S_img_S']}`} />
                                    Content Creation
                                </li>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S3} className={`me-2 me-sm-4 ${style['Sec2_S_img_S']}`} />
                                    Social Media Marketing
                                </li>
                            </ul>
                        </section>

                        <section className='col-sm-6'>

                            <img src={imgs.sec2_png1} alt="#" className={`${style['img_S']}`} />
                            <h3 className={`Times_New_RomanF_italic text-black ${style['Sec2_H_S_2']}`}>Results across channels</h3>
                            <p className={`InterF text-black ${style['Sec2_P_S_2']}`}>From organic search to paid ads,
                                social media content - we get results through diverse digital channels.
                            </p>

                        </section>
                    </div>


                    <div className='d-flex mt-3'>
                        <p className='mx-5 border border-black w-25'></p>
                    </div>

                </div>

                <div>
                    <h2 className={`Times_New_RomanF_italic text-black mb-4 mt-2 mt-sm-2 mb-sm-5 ${style['H_S3']}`}>Our Approach</h2>

                    <section className='row gap-5 justify-content-around'>
                        <div className='col-3 d-flex justify-content-center flex-column'>
                            <img src={imgs.sec3_P1} />
                            <p className={`${style['Sec3_P_S']} InterF text-black text-center`}>Understand your business and campaign goals.</p>
                        </div>
                        <div className='col-3 d-flex justify-content-center flex-column text-center'>
                            <img src={imgs.sec3_P2} />
                            <p className={`${style['Sec3_P_S']} InterF text-black`}>Produce high quality and engaging content for each platform.</p>
                        </div>
                        <div className='col-3 d-flex justify-content-center flex-column text-center'>
                            <img src={imgs.sec3_P3} />
                            <p className={`${style['Sec3_P_S']} InterF text-black`}>Analyze data and optimize campaign.</p>
                        </div>
                    </section>

                </div>

                <div className='mt-sm-5'>

                    <section className='row'>
                        <div className='col-7'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-2 mb-5 ${style['H_S']}`}>Why Choose Us?</h2>
                            <p className={`InterF text-black my-5 ${style['P_S']}`}>We’re not just marketers – we are digital growth strategists.
                                We plan and execute data-driven campaigns that deliver measurable results
                                and build lasting brand engagement across every platform.
                            </p>
                        </div>

                        <div className='col-5 align-content-center'>
                            <li className='list-unstyled d-flex flex-column gap-4'>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={imgs.sec3_S4} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Analytical & Data-Driven
                                </ul>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={imgs.sec3_S5} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Multi-Platform Strategy
                                </ul>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={imgs.sec3_S6} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Optimized & Scalable Campaigns
                                </ul>
                            </li>
                        </div>
                    </section>

                </div>
            </div >
        </>
    )
}

export default DigitalMarketing;