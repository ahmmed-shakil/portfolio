import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { products } from '../../data';
import './ProjectDetail.css';
import { BiWorld } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai'
import { IoServerSharp } from 'react-icons/io5'
import { ThemeContext } from '../../context';
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {
    Lazy, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ProjectDetail = () => {
    const { id } = useParams()
    console.log(id)
    console.log(products)
    const project = products.find(item => item.id == id)
    console.log(project)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div style={{ paddingBottom: '50px' }}>
            <div className="pd">
                <div>
                    <div className="pd-circle circle-1"></div>
                    <div className="pd-circle circle-2"></div>
                    <div className="pd-circle circle-3"></div>
                </div>
                <div style={{ width: '70%', margin: '0 auto' }}>
                    <Swiper slidesPerView={1} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide>
                            <img src={project?.img1} alt="" className="pd-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={project?.img2} alt="" className="pd-img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={project?.img3} alt="" className="pd-img" />
                        </SwiperSlide>
                    </Swiper>

                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ textAlign: 'center' }}>{project.projectName}</h2>
                        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '25px', margin: '0', padding: '0' }}>
                            <li style={{ marginLeft: '5px' }}><a href={project?.link} style={{ color: 'black' }}><BiWorld style={{ color: darkMode && 'white' }}></BiWorld></a> </li>
                            <li style={{ marginLeft: '5px' }}><a href={project?.clientSide} style={{ color: 'black' }}><AiFillGithub style={{ color: darkMode && 'white' }}></AiFillGithub></a></li>
                            <li style={{ marginLeft: '5px' }}><a href={project?.serverSide} style={{ color: 'black' }}><IoServerSharp style={{ color: darkMode && 'white' }}></IoServerSharp></a></li>
                        </ul>
                        <h4 style={{ color: 'grey' }}>{project.desc}</h4>
                        <h4 style={{ margin: '15px 0 0 0' }}>Features:</h4>
                        <div style={{ textAlign: 'left', marginLeft: '10px', paddingBottom: '10px', display: 'block' }}>
                            <ul>
                                <li><p>{project?.features?.feature1}</p></li>
                                <li><p>{project?.features?.feature2}</p></li>
                                <li><p>{project?.features?.feature3}</p></li>
                            </ul>
                        </div>
                        <h4 style={{ margin: '15px 0 0 0' }}>Technologies: </h4>
                        <p>{project.tech}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;