import React, { FC } from 'react'
import styled from 'styled-components'
import { SlideProps } from './App'
import { Slide } from './Slide'
import { config } from './config';
import { NextButton, PrevButton } from './NextPrevButton'

export interface SlideShowProps {
    slides: SlideProps[]
    activeSlide: number
    nextSlide (): void
    prevSlide (): void
}

const SlideView = styled.div`
    overflow: hidden;
    position: relative;
    padding: 0; margin: 0;
    > .next ,> .prev {
        z-index: 25;
        position: absolute;
    }
    > .next{
        top: 50%; left: 30%;
        transform: translateX( -50% ) translateY( -50% );
    }
    > .prev{
        top: 50%; right: 30%;
        transform: translateX( 50% ) translateY( -50% );
    }
    &.disapear-next{
        > .next{
            display: none;
        }
    }
    &.disapear-prev{
        > .prev{
            display: none;
        }
    }
` 

const MainDiv = styled.div< { activeSlide: number } >`
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    transition: all 500ms ease;
    transform: translateX( calc( ${ (props : any ) => props.activeSlide } * 800px - ( 100vw - 800px ) / 2 ) );
`

export const SlideShow: FC< SlideShowProps > = ({
    slides, activeSlide, nextSlide, prevSlide
}) => <SlideView className={ activeSlide === 0 ? 'disapear-prev' :( activeSlide === slides.length - 1 ? 'disapear-next' : '' ) } >
    <NextButton onClick = { nextSlide } className="next" />
    <PrevButton onClick = { prevSlide } className="prev" />
    <MainDiv activeSlide = { activeSlide } >
        { slides.map( ( slide, index ) => <Slide key = { slide.id } {...slide} isActive = { index === activeSlide } /> ) }
    </MainDiv>
</SlideView>

