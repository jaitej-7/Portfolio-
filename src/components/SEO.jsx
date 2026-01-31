import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Jai | Product Designer";
    const defaultDescription = "Portfolio of Jai, a Product Designer specializing in creating intuitive and beautiful digital experiences.";
    const defaultKeywords = "Product Designer, UX/UI Design, React Developer, Portfolio, Web Design";
    const defaultImage = "/og-image.jpg"; // You verify if this exists or add one later
    const siteUrl = "https://jaidesigner.netlify.app"; // Using the netlify one from history, or allow override

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | Jai` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
