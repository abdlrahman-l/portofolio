import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import PropTypes from 'prop-types'
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`


function ProfileCard({
    image,
    title,
    subTitle,
    links = [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ]
}) {
    return (
        <Card>
            <CardImage imageSrc={`https://media-exp1.licdn.com/dms/image/C4D03AQF8mzqw1yrs3A/profile-displayphoto-shrink_400_400/0/1623941507647?e=1639612800&v=beta&t=4mRjXq5OJYLEtH-YmXH2lhu6fS6MeFHYTA80Wt0qSuw`} />
            <CardContent>
            <span className="position">{'Software Engineer'}</span>
            <span className="name">{'Abdul Rahman'}</span>
            <CardLinks>
                {links.map((link, linkIndex) => (
                <a key={linkIndex} className="link" href={link.url}>
                    <link.icon className="icon" />
                </a>
                ))}
            </CardLinks>
            </CardContent>
        </Card>
    )
}

ProfileCard.propTypes = {  
    image:PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        icon: PropTypes.elementType
    }))
}

export default ProfileCard

