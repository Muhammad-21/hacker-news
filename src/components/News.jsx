import React,{useState} from 'react'
import {ClockCircleOutlined, CommentOutlined, UserOutlined} from '@ant-design/icons';
import Update from './updateButton/Update';
import Back from './back/Back'
export default function News() {
    const [scroll,setScroll] = useState(false);

    const componentDidMount = () => {
        window.addEventListener('scroll', handleScroll);
    }
    
    const componentWillUnmount = () => {
        window.removeEventListener('scroll', handleScroll);
    }
    
    const handleScroll = () => {
        if (window.scrollY >= 100  && !scroll) {
            setScroll(true);
        } else if (window.scrollY < 100 && scroll) {
            setScroll(false)
        }
    };
    const goBack = () => {
        window.scrollTo(document.body.scrollHeight,0);
    }
    return (
        <div setScroll={setScroll ? componentDidMount() : componentWillUnmount()}>
        <Update/>
        <Back isScroll={scroll} goBack={goBack}/>
        <div className="news">
            <div className="title">
                <strong>State Capacity: What Is It, How We Lost It, and How to Get It Back</strong>
            </div>
            <div className="info">
                <div style={{wordSpacing:'0.5em'}}><UserOutlined/> mark-ruwt <CommentOutlined/> 0</div>
                <div><ClockCircleOutlined/> 10:02:47 PM  📅 November 18,2021</div>
            </div>
        </div>
        <div className="news">
            <div className="title">
                <strong>State Capacity: What Is It, How We Lost It, and How to Get It Back</strong>
            </div>
            <div className="info">
                <div style={{wordSpacing:'0.5em'}}><UserOutlined/> mark-ruwt <CommentOutlined/> 0</div>
                <div><ClockCircleOutlined/> 10:02:47 PM  📅 November 18,2021</div>
            </div>
        </div>
        <div className="news">
            <div className="title">
                <strong>State Capacity: What Is It, How We Lost It, and How to Get It Back</strong>
            </div>
            <div className="info">
                <div style={{wordSpacing:'0.5em'}}><UserOutlined/> mark-ruwt <CommentOutlined/> 0</div>
                <div><ClockCircleOutlined/> 10:02:47 PM  📅 November 18,2021</div>
            </div>
        </div>
        <div className="news">
            <div className="title">
                <strong>State Capacity: What Is It, How We Lost It, and How to Get It Back</strong>
            </div>
            <div className="info">
                <div style={{wordSpacing:'0.5em'}}><UserOutlined/> mark-ruwt <CommentOutlined/> 0</div>
                <div><ClockCircleOutlined/> 10:02:47 PM  📅 November 18,2021</div>
            </div>
        </div>
        <div className="news">
            <div className="title">
                <strong>State Capacity: What Is It, How We Lost It, and How to Get It Back</strong>
            </div>
            <div className="info">
                <div style={{wordSpacing:'0.5em'}}><UserOutlined/> mark-ruwt <CommentOutlined/> 0</div>
                <div><ClockCircleOutlined/> 10:02:47 PM  📅 November 18,2021</div>
            </div>
        </div>
        <div className="news">
            <div className="title">
                <strong>State Capacity: What Is It, How We Lost It, and How to Get It Back</strong>
            </div>
            <div className="info">
                <div style={{wordSpacing:'0.5em'}}><UserOutlined/> mark-ruwt <CommentOutlined/> 0</div>
                <div><ClockCircleOutlined/> 10:02:47 PM  📅 November 18,2021</div>
            </div>
        </div>
        </div>
    )
}
