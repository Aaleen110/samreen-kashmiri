// import designelement from '../../Assets/svgs/design-element-home.svg';
// import designhome from '../../Assets/svgs/design-home.svg';
import services_graphics from '../../Assets/svgs/services_graphics.svg';

import pocket_friendly_icon from '../../Assets/svgs/pocket_friendly_icon.svg';
import heart_icon from '../../Assets/svgs/heart_icon.svg';
import home_icon from '../../Assets/svgs/home_icon.svg';

import brush_mark from '../../Assets/svgs/brush_mark.svg';
import round_arrow from '../../Assets/svgs/round_arrow.svg';


import Colors from '../../Utils/Colors'
import '../../App.css';


import model_1 from '../../Assets/svgs/gallery/model_1.svg';
import model_2 from '../../Assets/svgs/gallery/model_2.svg';
import model_3 from '../../Assets/svgs/gallery/model_3.svg';
import model_4 from '../../Assets/svgs/gallery/model_4.svg';
import model_5 from '../../Assets/svgs/gallery/model_5.svg';
import model_6 from '../../Assets/svgs/gallery/model_6.svg';
import model_7 from '../../Assets/svgs/gallery/model_7.svg';
import model_8 from '../../Assets/svgs/gallery/model_8.svg';
import model_9 from '../../Assets/svgs/gallery/model_9.svg';
import model_10 from '../../Assets/svgs/gallery/model_10.svg';
import model_11 from '../../Assets/svgs/gallery/model_11.svg';
import model_12 from '../../Assets/svgs/gallery/model_12.svg';
import model_13 from '../../Assets/svgs/gallery/model_13.svg';
import model_14 from '../../Assets/svgs/gallery/model_14.svg';


const assets = [{ link: model_1, size: 300 }, { link: model_2, size: 300 }, { link: model_3, size: 300 }, { link: model_4, size: 300 },
{ link: model_5, size: 300 }, { link: model_6, size: 300 }, { link: model_7, size: 300 }, { link: model_8, size: 300 }, { link: model_9, size: 300 },
{ link: model_10, size: 300 },
{ link: model_11, size: 300 }, { link: model_12, size: 300 }, { link: model_13, size: 300 }, { link: model_14, size: 300 },

]



function openInNewTab(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


function Work() {


    return (
        <div style={{ flexDirection: 'row', display: 'flex', flexDirection: 'column', backgroundColor: "#E8E8EA", paddingTop: 50 }}>

            {/* <div style={{ width: '40%', height: '100%', }}> */}
            {/* <img src={services_graphics} style={{ alignSelf: 'center', objectFit: 'cover', height: '100%' }} /> */}
            {/* </div> */}

            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div style={{ fontSize: 40, marginLeft: 16, fontWeight: '600', color: '#020000', lineHeight: 0.9 }}>Our <span style={{ color: '#DF4842' }}>Work..</span></div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    {assets.map((model, index) => {
                        return <div style={{ margin: 8 }}>
                            {/* <div style={{  padding: 16, backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}> */}
                            <img src={model.link} height={300} style={{ alignSelf: 'center', objectFit: 'cover', }} />
                            {/* </div> */}
                        </div>
                    })}
                </div>
            </div>

            <div
                onClick={() => openInNewTab('https://www.instagram.com/samreen_kashmiri/')}
                className="btn" style={{ fontSize: 16, borderRadius: 6, fontWeight: 'bold', color: '#fff', backgroundColor: '#000', padding: 16, width: 120, textAlign: 'center', alignSelf: 'center', boxShadow: "0px 4px 12px 6px #fff;", marginTop: 20, cursor: 'pointer' }}>
                View More

                <span><img src={round_arrow} height={20} style={{ alignSelf: 'center', paddingLeft: 6 }} />
                </span>
            </div>

        </div >
    );
}

export default Work;
