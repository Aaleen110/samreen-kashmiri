import logo from '../../Assets/svgs/logo.svg';
import rightarrow from '../../Assets/svgs/rightarrow.svg';
import beauty_home from '../../Assets/svgs/beauty_home.svg';
import hairdo_home from '../../Assets/svgs/hairdo_home.svg';


import Colors from '../../Utils/Colors'
import '../../App.css';
function HomeResponsive() {


    return (
        <div className="container">
            {/* <img src={designhome} className="Design-element" alt="logo" /> */}

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <div style={{ backgroundColor: '#fff', paddingLeft: 16, width: '60%', justifyContent: 'center', borderBottomRightRadius: 50 }}>
                    <img src={logo} height={40} style={{ alignSelf: 'center', marginTop: 20 }} />
                </div>

                <div></div>

            </div>

            <div style={{ height: '80%', width: '100%', display: 'flex', flex: 1, flexDirection: 'row' }}>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: 50 }}>

                    <div style={{ fontSize: 40, marginLeft: 16, fontWeight: '600', color: '#020000', lineHeight: 0.9 }}>Certified,<br />Professional<br /><span style={{ color: '#DF4842' }}>Make-up</span> Artist &<br /><span style={{ color: '#DF4842' }}>Hair Styling</span><br />Expert</div>

                    
                    
                    <div

                        onClick={() => {
                            window.scroll({
                                top: document.body.offsetHeight,
                                left: 0,
                                behavior: 'smooth',
                            });
                        }}
                        className="btn" style={{ fontSize: 16, borderRadius: 6, fontWeight: 'bold', color: '#fff', backgroundColor: '#000', padding: 16, margin: 16, marginTop: 40, width: 120, textAlign: 'center', boxShadow: "0px 4px 12px 6px #fff;" }}>
                        Book Now

                        <span><img src={rightarrow} height={12} style={{ alignSelf: 'center', paddingLeft: 6 }} />
                        </span>
                    </div>


                    <div style={{ marginLeft: 16, marginTop: 0, fontSize: 14 }}>Book now to avail a <span style={{ color: 'red' }}>5%</span> discount on all services*</div>


                </div>


            </div>
        </div>
    );
}

export default HomeResponsive;
