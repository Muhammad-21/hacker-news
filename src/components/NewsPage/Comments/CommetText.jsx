import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 

export const CommentText = ({ text }) => (
    <> { ReactHtmlParser (text) } </>
);