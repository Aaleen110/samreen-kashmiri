// import designelement from '../../Assets/svgs/design-element-home.svg';
// import designhome from '../../Assets/svgs/design-home.svg';
// import services_graphics from '../../Assets/svgs/services_graphics.svg';
import brush_decor from '../../Assets/pngs/brush_decor.png'

import pocket_friendly_icon from '../../Assets/svgs/pocket_friendly_icon.svg';
import heart_icon from '../../Assets/svgs/heart_icon.svg';
import home_icon from '../../Assets/svgs/home_icon.svg';


import Colors from '../../Utils/Colors'
import '../../App.css';


function Features() {


    return (
        <div className="container" style={{ flexDirection: 'row', display: 'flex' }}>

            <div style={{ width: '40%', height: '100%', }}>
                <img src={brush_decor} style={{ alignSelf: 'center', objectFit: 'cover', height: '100%' }} />
            </div>

            <div style={{ width: '60%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div style={{ fontSize: 40, marginLeft: 16, fontWeight: '600', color: '#020000', lineHeight: 0.9 }}>Hello <span style={{ color: '#DF4842' }}>Gorgeous!</span></div>
                <div style={{ fontSize: 30, marginLeft: 16, marginTop: 20, marginRight: 40, color: '#020000', }}>“The most alluring thing a woman can do is have confidence. We make sure that you walk out of our session looking great and feeling confident as ever.”</div>

                <div style={{ marginLeft: 30, marginTop: 30 }}>
                    <div style={{ marginTop: 30 }}>
                        <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                            <img src={pocket_friendly_icon} height={40} style={{}} />
                            <div style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 12 }}>Pocket Friendly</div>
                        </div>

                        <div style={{ fontSize: 24, marginTop: 8, marginRight: 40, color: 'grey', marginRight: 200 }}>
                            Cheap and pocket friendly prices so that you can go for it without wavering</div>
                    </div>

                    <div style={{ marginTop: 30 }}>
                        <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                            <img src={heart_icon} height={40} style={{}} />
                            <div style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 12 }}>Great Service</div>
                        </div>

                        <div style={{ fontSize: 24, marginTop: 8, marginRight: 40, color: 'grey', marginRight: 200 }}>
                            Friendly service, make you comfortable and addicted with our service</div>
                    </div>

                    <div style={{ marginTop: 30 }}>
                        <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                            <img src={home_icon} height={40} style={{}} />
                            <div style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 12 }}>Home Service</div>
                        </div>

                        <div style={{ fontSize: 24, marginTop: 8, marginRight: 40, color: 'grey', marginRight: 200 }}>
                            Because it shouldn’t bother you to come to our location.</div>
                    </div>

                </div>
            </div>

           
        </div >
    );
}

export default Features;
