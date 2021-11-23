import React from 'react'
import Update from '../updateButton/Update';
import Back from '../back/Back'
import NewsItem from './NewsItem';
import { useEffect, useState } from 'react';
import { Layout } from 'antd';

export default function News({news, getNewsIds}) {
    const [scroll, setScroll] = useState(false);
    const componentDidMount = () => {
        window.addEventListener('scroll', handleScroll);
    }
    
    const componentWillUnmount = () => {
        window.removeEventListener('scroll', handleScroll);
    }
    
    const handleScroll = () => {
        if (window.scrollY >= 100 ) {
            setScroll(true);
        } else if (window.scrollY < 100) {
            setScroll(false);
        }
    };

    const goBack = () => {
        window.scrollTo(document.body.scrollHeight,0);
    }

    useEffect(() => {
        setScroll ? componentDidMount() : componentWillUnmount()
        return () => { 
            window.removeEventListener('scroll', handleScroll);
        }
    // eslint-disable-next-line
    },[])

    return (
            <Layout.Content>
                <Update onClick={getNewsIds}/>
                <div>{scroll}</div>
                <Back isScroll={scroll} goBack={goBack}/>
                {news.map(item => <NewsItem news={item} key={item.id} />)}
            </Layout.Content>
    )
}
