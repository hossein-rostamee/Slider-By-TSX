import React, { FC } from 'react'
import styled from 'styled-components'

const NextBtn = styled.button`
    height: 50px; width: 50px;
    background: #C389CE;
    cursor: pointer;
    border: 5px inset #b07bb9;
    border-radius: 100%;
    margin: 0; padding: 0;
    outline: none; overflow: visible;
    transition: all 400ms ease;
    box-shadow: rgba(0, 0, 0, 0.4) 2px 10px 15px 0px;
    @keyframes rotate {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
    &&&:active{
        box-shadow: rgba(0, 0, 0, 0.4) 2px 3px 2px 0px;
        border: none;
        > img {
            animation: rotate 400ms linear infinite;
        }
    }
    :hover{
        border: none;
        box-shadow: rgba(0, 0, 0, 0.4) 2px 13px 30px 0px;
        > img {
            transform: rotate(360deg);
        }
    }
    > img {
        width: 15px; height: 15px;
        transition: all 400ms ease;
    }
`

export interface ButtonProps {
    onClick: () => void
    className: string
}

export const NextButton: FC< ButtonProps > = ({
    className, onClick
}) => <NextBtn onClick={ onClick } className={ className }>
    <img src={ require("/src/svg/left-arrow.svg") } alt=''></img>
</NextBtn>

const PrevBtn = styled(NextBtn)`
    background: #ec774b;
    border-color: #d46b44;
`

export const PrevButton: FC< ButtonProps > = ({
    className, onClick
}) => <PrevBtn onClick={ onClick } className={ className }>
    <img src={ require("/src/svg/right-arrow.svg") } alt=''> </img>
</PrevBtn>