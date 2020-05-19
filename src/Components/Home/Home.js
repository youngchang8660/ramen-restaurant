import React from 'react'
import './Home.css'


const Home = () => {
    return(
        <div id='home'>
            <div className='home-body'>
                <img src='https://i.pinimg.com/originals/b5/73/31/b57331c32fbf745808e0e8e5b308897a.png'/>
            </div>
            <section className='home-section'>
                <div className='home-section-image-one'>
                    <img src='https://images.unsplash.com/photo-1538128844159-f08f41bfb169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1328&q=80' height='100%' className='home-images' width='100%' />
                </div>
                <div className='home-section-image-two'>
                    <div className='ramen-two'>
                        <img src='https://images.unsplash.com/photo-1551763336-d71ed8103d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' height='100%' className='home-images' width='100%' />
                    </div>
                    <div className='ramen-three'>
                        <img src='https://images.unsplash.com/photo-1504669887860-f6d4cc3feb4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' height='40%' className='home-images' width='100%' />
                    </div>
                </div>
            </section>
            <div className='home-section-image-three'>
                    <img src='https://images.unsplash.com/photo-1573241927154-420274a2711f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' height='100%' className='home-images' width='100%' />
                </div>
            <section className='home-section-two'>
                <div className='text-box'>
                    <h2>Shoya is not your average Japanese restaurant. That’s partly because we serve the best ramen in Tokyo, and partly because our menu has a creative flair. Unlike other Japanese venues we also offer a serious selection of craft beer. And while we could go on about how ramen and beer is the perfect pair, there’s only one way to discover it for yourself.</h2>
                </div>
            </section>
        </div>
    )
}

export default Home