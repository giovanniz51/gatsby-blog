import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import logo from "../images/logo-blog.png"
import {Spring} from "react-spring/renderprops";

const HeaderWrapper = styled.div`
    background: #524763;
    margin-bottom: 1.45rem;
`
const HeaderContainer = styled.div`
        margin: 0 auto;
        maxWidth: 960;
        padding: 0.5rem;
        img {
            margin-bottom: 0
        }
        display: grid;
        grid-template-columns: 4fr 1fr;
`

const NavContainer = styled.div`
    a {
        padding: .3rem;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        :hover {
            color: red;
        }
    }
    .active-link {
        text-decoration: underline;
        color: red;
    }
    padding: 2rem 0;
`

const Header = ({siteTitle}) => (
    <HeaderWrapper>
        <HeaderContainer>
            <div>
                <Spring from={{opacity: 0}} to={{opacity:1}}>
                    {styles => (
                        <div style={{overflow: "hidden",...styles}}>
                            <Link
                                to="/"
                                style={{
                                    color: `white`,
                                    textDecoration: `none`,
                                }}
                            >

                                <img width={200} src={logo} alt="Blog Logo"/>
                            </Link>
                        </div>
                    )}
                </Spring>



            </div>
            <NavContainer>
                <Link activeClassName={"active-link"} to={"/about"}>About</Link>
                <Link activeClassName={"active-link"} to={"/contact"}>Contact</Link>
                <Link activeClassName={"active-link"} to={"/posts"}>Posts</Link>
            </NavContainer>
        </HeaderContainer>
    </HeaderWrapper>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
