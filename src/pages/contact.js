import React, {useState} from 'react';
import Layout from "../components/layout";
import styled from "styled-components";
import axios from "axios";

const FormWrapper = styled.div`
    input {
        display: block;
        margin: 1rem 0;
        border: 0;
        box-shadow: 5px 5px black;
        background: #eee;
        color: #524763;
    }
    button {
        background: #524763;
        color: #fff;
        display: block;
        padding: .3rem;
        border-radius: 3px;
    }
    label {
        display: block;
        color: #524763;
    }
    textarea {
        border: none;
        background: #eee;
        box-shadow: 5px 5px black;
    }
`

const Info = styled.p`
    background: green;
    color: #fff;
    padding: .5rem;
    border-radius: 2px;
`
const Error = styled.p`
    background: red;
    color: #fff;
    padding: .5rem;
    border-radius: 2px;
`

function Contact(props) {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [info, setInfo] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/send-form.php", JSON.stringify({email, subject, message}))
            console.log(res)
            setEmail("")
            setSubject("")
            setMessage("")
            setInfo(true)
            setTimeout(() => setInfo(false), 5000)
        } catch (e) {
            console.log("error")
            setError(true)
        }
    }

    return (
        <Layout>
            <h1>Contact us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, beatae debitis dicta eius eum id
                inventore ipsam iure labore natus nobis nostrum porro quasi quis rem sunt tenetur, voluptatum.</p>
            <FormWrapper>
                {error && <Error>Sorry something went wrong! Try again later!</Error>}
                {info && <Info>Your Email has been sent!</Info>}
                <form action="" onSubmit={handleSubmit}>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name={"email"}
                           placeholder={"Your Email"}/>
                    <input type="text" value={subject} onChange={e => setSubject(e.target.value)} name={"subject"}
                           placeholder={"Subject"}/>
                    <label htmlFor="message">Message</label>
                    <textarea onChange={e => setMessage(e.target.value)} name="message" id="message" cols="30" rows="10"
                              value={message}></textarea>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </FormWrapper>
        </Layout>
    );
}

export default Contact;