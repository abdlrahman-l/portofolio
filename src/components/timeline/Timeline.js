import React from 'react'
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { PrimaryBackgroundContainer } from 'components/hero/TwoColumnWithPrimaryBackground';
import { AnimationReveal } from '../../helpers/AnimationRevealPage';

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const EventBanner = tw.div`bg-black text-white py-8`
const EventBannerFlex = tw.div`bg-black text-white py-8`
const LeftBanner = tw.div`flex flex-col w-full sticky lg:w-1/3 mt-2 md:mt-12 px-8`
const EventContainer = tw.div`ml-0 md:ml-12 lg:w-2/3 overflow-y-scroll`
const EventSecondContainer = tw.div`container mx-auto w-full h-full`
const TimelineContainer = tw.div`relative flex-wrap`
const BannerTitle = tw.p`ml-2 text-yellow-300 uppercase`
const BannerSubTitle = tw.p`text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2`
const BannerDescription = tw.p`text-sm md:text-base text-gray-500 mb-4`
const BorderYellow = tw.div`border-4 border-yellow-500 absolute h-full border`
const LeftTimeline = tw.div`mb-1 flex justify-between flex-row-reverse items-center w-full left-0`
const RightTimeline = tw.div`mb-1 flex justify-between items-center w-full right-0`
const Order = tw.div`order-1 w-5/12`
const EventTextRight = tw.div`order-1 w-5/12 px-1 py-4 text-right`
const EventTextLeft = tw.div`order-1  w-5/12 px-1 py-4 text-left`
const EventDate = tw.p`mb-3 text-base text-yellow-300`
const EventTitle = tw.h4`mb-3 mt-3 font-bold text-lg md:text-2xl `
const EventDescription = tw.p`text-sm md:text-base leading-snug text-opacity-100`
const BottomImage = tw.img`m-auto flex max-w-96 h-auto w-full`
const FullTimelineContainer = tw(PrimaryBackgroundContainer)`flex lg:flex-row flex-col`

const eventData = {
    date: '1-6 May, 2021',
    title: 'Registration',
    description: `Pick your favourite event(s) and register in that event by filling the form corresponding to that
    event. Its that easy :)`
}

const eventsData = [
    eventData,
    eventData,
    eventData,
    eventData,
    {
        ...eventData,
        children: <a> test </a>
    }
]

function Timeline() {
    return (
        <FullTimelineContainer style={{height: '650px'}}>
            <LeftBanner>
                <BannerTitle>Working Process</BannerTitle>
                <BannerSubTitle>Working Process of Fest</BannerSubTitle>
                <BannerDescription>
                    Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
                    fest.
                </BannerDescription>
                {/* <a href="#"
                class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Explore Now</a> */}
            </LeftBanner>
            <EventContainer>
                <EventSecondContainer>
                    <TimelineContainer>
                        <BorderYellow style={{right: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
                        <BorderYellow style={{right: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
                        {
                            eventsData.map((data,index) => {
                                const Content = () => <>
                                    <EventDate>{data.date}</EventDate>
                                    <EventTitle>{data.title}</EventTitle>
                                    <EventDescription>{data.description}</EventDescription>
                                    {data.children && data.children}
                                </>

                                const ContentLeftContainer = () => 
                                <LeftTimeline>
                                    <Order />
                                    <EventTextRight>
                                      <Content />
                                    </EventTextRight>
                                </LeftTimeline>

                                const ContentRightContainer = () => 
                                <RightTimeline>
                                <Order />
                                    <EventTextLeft>
                                        <Content />
                                    </EventTextLeft>
                              </RightTimeline>
                              
                              return index % 2 === 0 ? <ContentLeftContainer /> : <ContentRightContainer />
                            })
                        }
                    </TimelineContainer>
                     <BottomImage src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                </EventSecondContainer>
            </EventContainer>
        </FullTimelineContainer>
    )
}

export default Timeline
