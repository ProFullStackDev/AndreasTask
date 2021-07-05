import React from 'react';
const NumberImageText = (props) => {
    console.log()
    const tabData = [
        {
            img1: '/images/undraw_Profile_data_re_v81r.svg', text1: 'Erstellen dein Lebenslauf',
            img2: '/images/undraw_task_31wc.svg', text2: 'Erstellen dein Lebenslauf',
            img3: '/images/undraw_personal_file_222m.svg', text3: 'Mit nur einem Klick betwerben'
        },
        {
            img1: '/images/undraw_Profile_data_re_v81r.svg', text1: 'Erstellen dein Unternehmensprofil',
            img2: '/images/undraw_about_me_wa29.svg', text2: 'Erstellen ein Jobinserat',
            img3: '/images/undraw_swipe_profiles1_i6mr.svg', text3: 'Wahle deinim neuen Mitarbeiter aus'
        },
        {
            img1: '/images/undraw_Profile_data_re_v81r.svg', text1: 'Erstellen dein Unternehmensprofil',
            img2: '/images/undraw_job_offers_kw5d.svg', text2: 'Erhalte Vermittlungs-angebot von Arbeitgeber',
            img3: '/images/undraw_business_deal_cpi9.svg', text3: 'Vermittulung nach Provision oder Stundenlohn'
        }
    ]
    const { tabindex } = props
    return (<div>
        <div>
            <img src={process.env.PUBLIC_URL + tabData[tabindex].img1} className="center-image" />
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: -20 }}>
                <span className="text11">1<span className="textdot">.</span></span>
                <div style={{ marginLeft: 40, marginBottom: 10, color:16, fontWeight: 400,color: 'grey' }}>{tabData[tabindex].text1}</div>
            </div>
        </div>
        <div>
        {/* <div className="wave">
        </div> */}
        <div className="second-part">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#fff" fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,69.3C560,85,640,107,720,128C800,149,880,171,960,165.3C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 13, paddingTop: 50 }}>
                <span className="text22">2<span className="textdot">.</span></span>
                <div style={{ marginLeft: 40, marginBottom: 10,color:16, fontWeight: 400, color: 'grey' }}>{tabData[tabindex].text2}</div>
            </div>
       <img src={process.env.PUBLIC_URL + tabData[tabindex].img2} className="center-image" />
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#fff" fill-opacity="1" d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,69.3C560,85,640,107,720,128C800,149,880,171,960,165.3C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div style={{border:"solid white 2px",marginTop:-5}}></div>
        </div>
        </div>
        <div style={{position:'relative'}}>
            <div className="thired-part_poly">

            </div>
            <div style={{position:'relative'}}>

            <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 60 }}>
                <span className="text33">3<span className="textdot">.</span></span>
                <div style={{ marginLeft: 40, marginBottom: 10, color:16, fontWeight: 400, color: 'grey' }}>{tabData[tabindex].text3}</div>
            </div>
            <img src={process.env.PUBLIC_URL + tabData[tabindex].img3} className="center-image" />
            </div>
            
        </div>
    </div>)
}
export default NumberImageText;