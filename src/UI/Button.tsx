'use client';
import React from 'react';
import styled from 'styled-components';

const Button = ({text, href, className} : {text ?: string; href ?: string; className?: string;}) => {
  return (
    <StyledWrapper>
      <a href={href} target='_blank' className='font-squid uppercase'>{text}</a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
    a {
        min-height: 55px;
        min-width: 160px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        position: relative;
        cursor: pointer;
        background: -webkit-gradient(
            linear,
            left top,
            right top,
            color-stop(0%, rgba(139, 92, 246, 0.85)),
            color-stop(100%, rgba(84, 154, 255, 0.65))
        );
        background: linear-gradient(
            90deg,
            rgba(139, 92, 246, 0.85) 0%,
            rgba(84, 154, 255, 0.65) 100%
        );
        border: 2px solid #9f7bff; /* soft purple border */
        color: #ffffff;
        font-size: 18px;
        border-radius: 8px;
        overflow: visible;
        transition: all 0.3s ease-in-out;
    }

    a:before {
        content: "";
        width: 6px;
        height: 28px;
        background: #24183e; /* deep purple accent */
        border: 2px solid #9f7bff;
        transform: rotate(-45deg);
        position: absolute;
        border-top: 0;
        border-left: 0;
        border-bottom: 0;
        bottom: -7px;
        left: 4px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }

    a:after {
        content: "";
        position: absolute;
        left: -2px;
        bottom: -2px;
        border-top: 15px solid transparent;
        border-left: 15px solid #9f7bff; /* pale lavender triangle */
    }

    /* a subtle inner-glow to emphasize the purple/blue blend */
    a::selection {
        background: rgba(139, 92, 246, 0.25);
    }
    a:hover {
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.6), 0 0 15px rgba(84, 154, 255, 0.6);
        transition: all 0.3s ease-in;
    }
`;


export default Button;
