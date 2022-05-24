// import designelement from '../../Assets/svgs/design-element-home.svg';
// import designhome from '../../Assets/svgs/design-home.svg';
import steps from '../../Assets/svgs/steps.svg';

import pocket_friendly_icon from '../../Assets/svgs/pocket_friendly_icon.svg';
import heart_icon from '../../Assets/svgs/heart_icon.svg';
import home_icon from '../../Assets/svgs/home_icon.svg';

import brush_mark from '../../Assets/svgs/brush_mark.svg';
import placeholder from '../../Assets/svgs/placeholder.svg';


import Colors from '../../Utils/Colors'
import '../../App.css';

import rightarrow from '../../Assets/svgs/rightarrow.svg';
import logo from '../../Assets/svgs/logo.svg';

import email_logo from '../../Assets/svgs/email_logo.svg';
import fb_logo from '../../Assets/svgs/fb_logo.svg';
import instagram_logo from '../../Assets/svgs/instagram_logo.svg';



function openInNewTab(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
};

function Contact() {


    return (
        <div className="container" style={{ flexDirection: 'row', display: 'column', paddingTop: 20 }}>

            {/* <div style={{ width: '40%', height: '100%', }}> */}
            {/* <img src={services_graphics} style={{ alignSelf: 'center', objectFit: 'cover', height: '100%' }} /> */}
            {/* </div> */}

            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div style={{ fontSize: 40, marginLeft: 16, fontWeight: '600', color: '#020000', lineHeight: 0.9 }}>What are you still <br />waiting <span style={{ color: '#DF4842' }}>for..</span></div>

                <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>


                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <div style={{ width: '80%', backgroundColor: '#fff', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: 30, padding: 16, paddingLeft: 60, width: '100%', textAlign: 'flex-start', fontWeight: '600', color: '#020000', lineHeight: 0.9 }}>Enquire Now</div>
                            <input placeholder='Enter Name' style={{ backgroundColor: '#F5F5F9', border: 0, width: '90%', height: 40, fontSize: 18 }}></input>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 20 }}>
                                <input placeholder='Enter Mobile' style={{ backgroundColor: '#F5F5F9', border: 0, width: '40%', height: 40, fontSize: 18 }}></input>
                                <input placeholder='Enter Email' style={{ backgroundColor: '#F5F5F9', border: 0, width: '40%', height: 40, fontSize: 18 }}></input>
                            </div>

                            <textarea placeholder='Enter Message' style={{ backgroundColor: '#F5F5F9', border: 0, width: '90%', height: 200, fontSize: 18, marginTop: 20, fontFamily: 'sans-serif', padding: 8 }}></textarea>

                            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                <div className="btn" style={{ fontSize: 16, borderRadius: 6, fontWeight: 'bold', color: '#fff', backgroundColor: '#000', padding: 16, margin: 16, width: 120, textAlign: 'center', boxShadow: "0px 4px 12px 6px #fff;" }}>
                                    Book Now

                                    <span><img src={rightarrow} height={12} style={{ alignSelf: 'center', paddingLeft: 6 }} />
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={steps} height={500} style={{ alignSelf: 'center', objectFit: 'cover' }} />
                    </div>

                </div>

                <div style={{ backgroundColor: '#fff', height: 200, paddingLeft: 16, width: '90%', display: 'flex', alignSelf: 'flex-end', justifyContent: 'flex-end', alignItems: 'center', borderTopLeftRadius: 50, paddingRight: 20, position: 'relative' }}>

                    <div style={{ height: 70, width: 300, position: 'absolute', left: 0, marginLeft: 20, display: 'flex', flexDirection: 'row' }}>
                        {/* <a href="mailto:aaleenmirza110@gmail.com">Email Us</a> */}

                        <img
                            onClick={() => {
                                // window.open('mailto:someone@yoursite.com')
                                // window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
                            }}
                            src={email_logo} height={40} style={{ alignSelf: 'center', marginLeft: 8, cursor: 'pointer' }} />
                        <img
                            onClick={() => openInNewTab('https://www.facebook.com/')}
                            src={fb_logo} height={40} style={{ alignSelf: 'center', marginLeft: 8, cursor: 'pointer' }} />
                        <img
                            onClick={() => openInNewTab('https://www.instagram.com/samreen_kashmiri/')}
                            src={instagram_logo} height={40} style={{ alignSelf: 'center', marginLeft: 8, cursor: 'pointer' }} />
                    </div>
                    <img src={logo} height={60} style={{ alignSelf: 'center', marginTop: 20 }} />
                </div>

            </div>



        </div >
    );
}

export default Contact;
