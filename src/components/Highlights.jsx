import { faBoltLightning, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react' 
import Highlight from './ui/Highlight';

const Highlights = () => {
  return (
    
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why Choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    
                    <Highlight icon={<FontAwesomeIcon 
                    icon={faBoltLightning}/>}
                    title="Easy and Quick" 
                    para="Get Access to books you purchase online"
                    />
                    
                    <Highlight icon={<FontAwesomeIcon 
                    icon={faBookOpen}/>}
                    title="10k+ Books" 
                    para="Various Categories"
                    />
                    
                    <Highlight icon={<FontAwesomeIcon 
                    icon={faTags}/>}
                    title="Affordable" 
                    para="Get Your hands on latest books!"
                    />


                </div>
            </div>
        </div>
    </section>
        
  );
}

export default Highlights