// import designelement from '../../Assets/svgs/design-element-home.svg';
// import designhome from '../../Assets/svgs/design-home.svg';
import services_graphics from '../../Assets/svgs/services_graphics.svg';

import pocket_friendly_icon from '../../Assets/svgs/pocket_friendly_icon.svg';
import heart_icon from '../../Assets/svgs/heart_icon.svg';
import home_icon from '../../Assets/svgs/home_icon.svg';

import brush_mark from '../../Assets/svgs/brush_mark.svg';
import placeholder from '../../Assets/svgs/placeholder.svg';


import Colors from '../../Utils/Colors'
import '../../App.css';


const reviews = [
    {
        name: "Aaleen Mirza",
        link: "www.google.com",
        message: `“The make-up here is very good and the service is interesting, besides the low price make me more confident in front of the camera”`,
        handle: '@aaleen_mirza'
    },
    {
        name: "Razia Naqvi",
        link: "www.google.com",
        message: `"Samreen Kashmiri is a phenomenal makeup artist.She knew the perfect makeup to go with my wedding look.My makeup lasted all day.
        She keeps on trend with fashion and makeup.I definitely recommend Samreen for any occasion & most definitely a wedding celebration”`,
        handle: '@razia_nq'
    },
    {
        name: "Sajdah Mandil",
        link: "www.google.com",
        message: `“She is truly amazing and a talented artist!!! Being her first bride I was tensed but her work was apt and upto the mark!!! I was at awe of her work !!! Loved her work alot !!!”`,
        handle: '@sajdah_1788'
    },

    {
        name: "Sarah S",
        link: "www.google.com",
        message: `"Amazing work done by samreen. Eye makeup was on another level! Uses all good quality and high end products and caters to your own personal style and requirement. Would recommend any day any time!”`,
        handle: '@sarah_model'
    },

    {
        name: "Parveen Saifizadeh",
        link: "www.google.com",
        message: `“Samreen Kashmiri is a young artist and amazingly talented in her work. She had done 2 looks for me on my big day and it was natural and yet stunning. She went above and beyond with my requests. I would highly recommend her.”`,
        handle: '@parveen_k_seifi'
    },

    {
        name: "Sneha P",
        link: "www.google.com",
        message: `“Samreen Kashmiri is great and ambitious at her work. I wish her all success.”`,
        handle: '@snehh_AA'
    },

    {
        name: "Sneha P",
        link: "www.google.com",
        message: `“Samreen Kashmiri is great and ambitious at her work. I wish her all success.”`,
        handle: '@snehh_AA'
    },
    {
        name: "Sneha P",
        link: "www.google.com",
        message: `“Samreen Kashmiri is great and ambitious at her work. I wish her all success.”`,
        handle: '@snehh_AA'
    },
    {
        name: "Sneha P",
        link: "www.google.com",
        message: `“Samreen Kashmiri is great and ambitious at her work. I wish her all success.”`,
        handle: '@snehh_AA'
    }
]


function Feedback() {


    return (
        <div style={{ flexDirection: 'row', display: 'column', backgroundColor: "#E8E8EA",  }}>

            {/* <div style={{ width: '40%', height: '100%', }}> */}
            {/* <img src={services_graphics} style={{ alignSelf: 'center', objectFit: 'cover', height: '100%' }} /> */}
            {/* </div> */}

            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div style={{ fontSize: 40, marginLeft: 16, fontWeight: '600', color: '#020000', lineHeight: 0.9 }}>What our customers <br />are <span style={{ color: '#DF4842' }}>saying...</span></div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    {reviews.map((review, index) => {
                        return <div>
                            <div style={{ width: 400, margin: 16, padding: 16, backgroundColor: '#fff', borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                <img src={brush_mark} style={{ alignSelf: 'center', objectFit: 'cover', height: '100%', paddingRight: 12, position: 'absolute' }} />
                                <div style={{ color: '#000', padding: 16, fontSize: 22, }}>{review.message}</div>

                                <div style={{ height: 20, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                    <img src={placeholder} height={30} style={{}} />

                                    <div style={{ marginLeft: 8, fontSize: 18, color: "#000" }}>{review.name}</div>
                                    <div style={{ marginLeft: 8, fontSize: 18, color: "#DF4842" }}>{review.handle}</div>
                                </div>
                            </div>


                        </div>
                    })}
                </div>
            </div>

        </div >
    );
}

export default Feedback;
