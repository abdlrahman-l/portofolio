import React from 'react'
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { PrimaryBackgroundContainer } from 'components/hero/TwoColumnWithPrimaryBackground';

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const EventBanner = tw.div`bg-black text-white py-8`
const EventBannerFlex = tw.div`bg-black text-white py-8`
const LeftBanner = tw.div`flex flex-col w-full sticky lg:w-1/3 mt-2 md:mt-12 px-8`
const EventContainer = tw.div`ml-0 md:ml-12 lg:w-2/3 sticky`
const EventSecondContainer = tw.div`container mx-auto w-full h-full`
const TimelineContainer = tw.div`relative flex-wrap overflow-hidden p-10 h-full`
const BannerTitle = tw.p`ml-2 text-yellow-300 uppercase`
const BannerSubTitle = tw.p`text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2`
const BannerDescription = tw.p`text-sm md:text-base text-gray-500 mb-4`
const BorderYellow = tw.div`border-4 border-yellow-500 absolute h-full border`
const LeftTimeline = tw.div`mb-8 flex justify-between flex-row-reverse items-center w-full left-0`
const Order = tw.div`order-1 w-5/12`
const Event = tw.div`order-1 w-5/12 px-1 py-4 text-right`


function Timeline() {
    return (
        <PrimaryBackgroundContainer>
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
                        <LeftTimeline>
                            <Order />
                            <Event>
                                <p class="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                Pick your favourite event(s) and register in that event by filling the form corresponding to that
                                event. Its that easy :)
                                </p>
                            </Event>
                        </LeftTimeline>
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="order-1  w-5/12 px-1 py-4 text-left">
                            <p class="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
                            <h4 class="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                            <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                            Participate online. The links for your registered events will be sent to you via email and whatsapp
                            groups. Use those links and show your talent.
                            </p>
                        </div>
                        </div>
                        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="order-1 w-5/12 px-1 py-4 text-right">
                            <p class="mb-3 text-base text-yellow-300"> 10 May, 2021</p>
                            <h4 class="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                            <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                            The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                            announced on the whatsapp groups and will be mailed to you.
                            </p>
                        </div>
                        </div>
            
                        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="order-1 w-5/12"></div>
            
                        <div class="order-1  w-5/12 px-1 py-4">
                            <p class="mb-3 text-base text-yellow-300">12 May, 2021</p>
                            <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
                            <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                            The winners will be contacted by our team for their addresses and the winning goodies will be sent at
                            their addresses.
                            </p>
                        </div>
                        </div>
                    </TimelineContainer>
                     <img class="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                </EventSecondContainer>
            </EventContainer>
        </PrimaryBackgroundContainer>
    )
}

export default Timeline
