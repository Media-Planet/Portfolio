import style from '../services.module.css';

import imgs_fun from './data';

const imgs = imgs_fun();


function BoardG() {
    return (
        <>
            <div className=' bg-primary containerr '>
                <section className={`${style['sec_S']} pt-3`}>
                    <div className='row'>
                        <section className='row col-7'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-3 mb-5 ${style['H_S']}`}>Board Games</h2>
                            <p className={`InterF text-black my-5 ${style['P_S']}`}>We design imaginative,
                                visually striking board games that engage,
                                entertain, and tell unforgettable stories.</p>
                            <div className='col-sm-6 col-md-10 col-lg-12'>
                                <button className='btn mt-3 py-1 bg-secondary text-success w-100 rounded-4 border-0 Times_New_RomanF_italic fs-1'>
                                    <img className='m-1' src={imgs.logo} alt="Media Planet" width={65} />Start Your Journey
                                </button>
                            </div>
                        </section>
                        <section className='col-5'>
                            <img src={imgs.photo} className={`${style['img_S']}`} alt="... coding" />
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
                                From brand concepts to custom board games,
                                we design playful experiences that bring your story to life—strategic,
                                immersive, and built to connect.
                            </p>

                            <ul className='list-unstyled list d-flex flex-column gap-5'>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S1} className={`mx-4 ${style['Sec2_S_img_S']}`} />
                                    Prototype Creation
                                </li>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S2} className={`mx-4 ${style['Sec2_S_img_S']}`} />
                                    Production Assistance
                                </li>
                                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S3} className={`mx-4 ${style['Sec2_S_img_S']}`} />
                                    Rulebook Writing
                                </li>
                            </ul>
                        </section>

                        <section className='col-6'>
                            <img src={imgs.sec2_png1} alt="#" className={`${style['img_S']}`} />
                            <h3 className={`Times_New_RomanF_italic text-black ${style['Sec2_H_S_2']}`}>Built for every player</h3>
                            <p className={`InterF text-black ${style['Sec2_P_S_2']}`}>From casual to competitive,
                                adults to kids - our games captivate players of all types.
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
                            <img src={imgs.sec3_P1} />
                        </div>
                        <div className='col-3 d-flex justify-content-center flex-column text-center'>
                            <img src={imgs.sec3_P2} />
                        </div>
                        <div className='col-3 d-flex justify-content-center flex-column text-center'>
                            <img src={imgs.sec3_P3} />
                        </div>
                    </section>
                </div>

                <div className='mt-5'>
                    <section className='row'>
                        <div className='col-7'>
                            <h2 className={`Times_New_RomanF_italic text-black mt-2 mb-5 ${style['H_S']}`}>Why Choose Us?</h2>
                            <p className={`InterF text-black my-5 ${style['P_S']}`}>We’re not just designers – we are digital storytellers.
                                We create memorable board game experiences
                                that draw players into new worlds of strategy and imagination.
                            </p>
                        </div>

                        <div className='col-5 align-content-center'>
                            <li className='list-unstyled d-flex flex-column gap-4'>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={imgs.sec3_S4} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Innovative Concepts
                                </ul>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={imgs.sec3_S5} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Highly Visual & Immersive
                                </ul>
                                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                                    <img src={imgs.sec3_S6} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />Strategic & Fun to play
                                </ul>
                            </li>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default BoardG;