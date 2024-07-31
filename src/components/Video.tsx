import React from 'react';

const Video: React.FC = () => {

    return (
        <div className="w-full lg:w-1/2 flex flex-row items-center justify-center">

        
        <div className="wistia_responsive_padding w-full " style={{ paddingTop: '56.25%', position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}>
                <div className="wistia_embed wistia_async_2py9sc0y8m seo=true videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                    <div className="wistia_swatch" style={{ height: '100%', left: '0', opacity: '0', overflow: 'hidden', position: 'absolute', top: '0', transition: 'opacity 200ms', width: '100%' }}>
                        <img
                            src={`https://fast.wistia.com/embed/medias/2py9sc0y8m/swatch`}
                            style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
                            alt=""
                            aria-hidden="true"
                            onLoad={(e) => (e.currentTarget.parentNode as HTMLElement).style.opacity = '1'}
                        /></div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Video;
