// import designelement from '../../Assets/svgs/design-element-home.svg';
// import designhome from '../../Assets/svgs/design-home.svg';
import services_graphics from '../../Assets/svgs/services_graphics.svg';

import pocket_friendly_icon from '../../Assets/svgs/pocket_friendly_icon.svg';
import heart_icon from '../../Assets/svgs/heart_icon.svg';
import home_icon from '../../Assets/svgs/home_icon.svg';

import bride from '../../Assets/svgs/bride.svg';


import Colors from '../../Utils/Colors'
import '../../App.css';


function Services() {


    return (
        <div className="container" style={{ flexDirection: 'row', display: 'column', paddingTop: 50 }}>

            {/* <div style={{ width: '40%', height: '100%', }}> */}
            {/* <img src={services_graphics} style={{ alignSelf: 'center', objectFit: 'cover', height: '100%' }} /> */}
            {/* </div> */}

            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div style={{ fontSize: 40, marginLeft: 16, fontWeight: '600', color: '#020000', lineHeight: 0.9 }}>Our <span style={{ color: '#DF4842' }}>services</span></div>
                <div style={{ fontSize: 24, marginLeft: 16, marginTop: 20, marginRight: 40, color: '#020000', }}>Samreen Kashmiri offers a different range of services and packages which can be tailor-made as per your preferences and budget and according to the services you pick. She along with her team is ready to travel outstation and come to your venue to offer her exclusive array of makeup and hairstyling services.</div>



                <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <div style={{ marginLeft: 30, marginTop: 30 }}>
                        <div style={{ marginTop: 30 }}>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <img src={heart_icon} height={40} style={{}} />
                                <div style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 12 }}>Regular Make-up</div>
                            </div>

                            <div style={{ fontSize: 22, marginTop: 8, marginRight: 40, color: 'grey', }}>
                                Regular make-up for breathtaking events</div>
                        </div>

                        <div style={{ marginTop: 30 }}>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <img src={heart_icon} height={40} style={{}} />
                                <div style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 12 }}>Bridal Makeup</div>
                            </div>

                            <div style={{ fontSize: 22, marginTop: 8, marginRight: 40, color: 'grey', }}>
                                Special as per request make-up to make your special day memorable.</div>
                        </div>

                        <div style={{ marginTop: 30 }}>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <img src={heart_icon} height={40} style={{}} />
                                <div style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 12 }}>Pre & Post Wedding</div>
                            </div>

                            <div style={{ fontSize: 22, marginTop: 8, marginRight: 40, color: 'grey', }}>
                                Beguiling makeup to make glow in all environments and light conditions.</div>
                        </div>

                        <div style={{ marginTop: 30 }}>
                            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <img src={heart_icon} height={40} style={{}} />
                                <div style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 12 }}>Hair Styling</div>
                            </div>

                            <div style={{ fontSize: 22, marginTop: 8, marginRight: 40, color: 'grey', }}>
                                Style your hair amazingly cause your hair are your crown you never take off.</div>
                        </div>

                    </div>

                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={bride} style={{ alignSelf: 'center', objectFit: 'cover', height: '80%' }} />
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Services;
