// import style from './services.module.css';
import photo from '../../assets/Images/services/1.png';
import logo from '../../assets/Images/services/Logo_1.png';

function services() {
    return (
        <>
            <div className='bg-primary'>
                <div className='d-flex p-3'>
                    <section>
                        <h2 className='font1_italic text-black mt-3 mb-4 fs-1'>Web Development</h2>
                        <p className='font2 text-black w-75 mb-5'>We craft stunning,
                            responsive websites that combine bold design with smooth functionality—built
                            to impress and perform.</p>
                        <button className='bg-secondary text-success w-50 rounded-4 border-0 font1_italic fs-5'>
                            <img className='m-1' src={logo} alt="Media Planet" width={40} />Start Your Journey
                        </button>
                    </section>
                    <section>
                        <img src={photo} width={300} alt="... coding" />
                    </section>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <p className='border border-black w-75'></p>
                </div>
            </div>
        </>
    )
}

export default services