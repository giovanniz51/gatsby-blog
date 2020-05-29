import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";

function About(props) {
    return (
        <Layout>
            <SEO title={"About"} description={"This is our About Page"}></SEO>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur cum deserunt doloremque
                inventore molestias nisi non omnis, quasi qui ratione recusandae reiciendis reprehenderit sit soluta
                tempora temporibus ullam. Voluptatum.</p>
        </Layout>
    );
}

export default About;