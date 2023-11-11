import React, { FC } from 'react'
import styled from 'styled-components'
import { SlideProps } from './App'
import { config } from './config';

const Wrapper = styled.div`
    height: 460px; width: 800px;
    position: relative;
    overflow: hidden;
    transition: inherit;
    transform: scale( 0.8 );
    &.deactive{
        .play-overlay {
            display: none;
        }
    }
    &.active{
        transform: scale( 1 );
    }
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.06) 10px 10px 20px 0px, rgba(0, 0, 0, 0.06) -10px 0px 20px 0px;
    ::after, ::before{
        z-index: 5;
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0; right: 0;
        opacity: 0.8;
    }
    ::after{
        bottom: 0;
        background-image: linear-gradient( rgba( 0, 0, 0 ,0 ), rgba( 0, 0, 0, 0.8 ) );
    }
    ::before{
        top: 0;
        background-image: linear-gradient( rgba( 0, 0, 0 ,0.8 ), rgba( 0, 0, 0, 0 ) );
    }
    a{
        text-decoration: none;
        color: #FFFFFF;
    }
    .content{
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-areas: "header" "empty" "footer";
        .header{
            z-index: 5;
            grid-area: header;
            display: grid;
            grid-template-columns: auto auto auto 1fr;
            justify-content: start;
            grid-gap: 10px;
            align-items: center;
            font-size: 12px;
            color: #FFFFFF;
            margin: 10px;
            .bullet{
                background: #EC774B;
                border-radius: 100%;
                height: 7px; width: 7px;
            }
        }
        .footer{
            grid-area: bottom;
            z-index: 10;
            margin: 0 10px;
            > a > h1 {
                position: relative;
                ::after{
                    content: '';
                    position: absolute;
                    background: red;
                    width: 60%; height: 100%;
                    right: 0 ; bottom: 0px; 
                    transform: scaleX(0);
                    opacity: 1;
                    transform-origin: right;
                    z-index: -1;
                    transition: all 200ms ease;
                    margin: 0 0 10px 10px;
                }
                :hover{
                    ::after{
                        transform: scaleX( 1 );
                    }
                }
            }
            > p {
                line-height: 1.7em;
                text-align: justify;
                color: #FFFFFF;
            }
        }
    }
    > img , > .content {
        position: absolute;
        right: 0; left: 0; bottom: 0; top: 0;
        width: 100%; height: 100%;
    }
    > img {
        z-index: -1;
        user-select: none;
        object-fit: cover;
    }
    .play-overlay{
        z-index: 20;
        position: absolute;
        top: 50%; left: 50%;
        transform: translateX( -50% ) translateY( -50% );
        height: 100px; width: 100px;
        display: block;
        background: rgba( 0, 0, 0, 0.6 );
        border-radius: 10px;
        transition: background 700ms ease;
        :active{
            background: rgba( 0, 0, 0 ,0.8 );
        }
    }
    .play-icon{
        margin: 8px;
        transition: transform 700ms ease;
        :hover{
            transform: rotate(360deg); 
        }
    }
`

export interface Slide extends SlideProps {
    isActive: boolean
}

export const Slide: FC< Slide > = ({
    date, excerpt, imgSrc, isActive, title, link, category
}) => <Wrapper className={ isActive ? 'active' : 'deactive' } >
    <div className="content">
        <div className="header">
            <a href={ category.link }>{ category.name }</a>
            <div className="bullet"></div>
            <div>{ date }</div>        
        </div>
        <div className="footer">
            <a href={ link }><h1>{ title }</h1></a>
            <p>{ excerpt }</p>
        </div>
    </div>
    <img src={ imgSrc } />
    <a className="play-overlay" href={ link }>
<<<<<<< HEAD
        <img className="play-icon" src= { require(" /src/svg/play.svg") } />
=======
        <img className="play-icon" src= { require("./svg/play.svg") } />
>>>>>>> b535bd6 (revised commit)
    </a>
</Wrapper>
