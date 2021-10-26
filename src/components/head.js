import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
    return (

        <Helmet>
            <meta charset="UTF-8"></meta>
            <title>Cream Projects</title>
            <meta data-react-helmet="true" property="description" content="Cream is a digital arts studio based in London, with a focus on game engine technology." />
            <meta data-react-helmet="true" property="og:type" content="website" />
            <meta data-react-helmet="true" property="og:url" content="https://www.creamprojects.com/" />
            <meta data-react-helmet="true" property="og:title" content="Cream Projects" />
            <meta data-react-helmet="true" property="og:locale" content="en_GB"></meta>
            <meta data-react-helmet="true" property="og:description" content="Cream is a digital arts studio based in London, with a focus on game engine technology." />
            <meta data-react-helmet="true" property="og:image" content="/cream-SEO.png" />
            <meta data-react-helmet="true" property="twitter:card" content="summary_large_image" />
            <meta data-react-helmet="true" property="twitter:url" content="https://www.creamprojects.com/" />
            <meta data-react-helmet="true" property="twitter:title" content="Cream Projects" />
            <meta data-react-helmet="true" property="twitter:description" content="Cream is a digital arts studio based in London, with a focus on game engine technology." />
            <meta data-react-helmet="true" property="twitter:image" content="/cream-SEO.png" />
        </Helmet>
    )
}

export default Head