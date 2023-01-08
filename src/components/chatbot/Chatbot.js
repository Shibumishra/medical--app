import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';
import './chatbot.css';
import Minus from '../../assets/close-icon.png';
import Pluse from '../../assets/logo-chat.svg';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Write a reply....',
  headerTitle: 'Welcome to Retail Blitz - Medical',
}

const Chatbot = () => {
  const [showChat, setShowChat] = useState(true);

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          steps={[
            {
              id: 'welcome',
              message: 'Hi',
              trigger: 'q-firstname',
            },
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hello,{previousValue} Welcome to Medical! How can I help you today? Please write your query or select an option to proceed.',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'I want to give feedback', trigger: '4' },
                { value: 2, label: 'About Medical', trigger: '3' },
                { value: 3, label: 'Ask Something', trigger: '5' },,
              ],
            },
            {
              id: '3',
              message:
                'About ViduraX.',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                'Please provide your EmailID.',
              trigger: 'email',
            },
            {
              id: 'email',
              user: true,
              validator: (value) => {
                if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                  return true
                } else {
                  return 'Must be a valid email.'
                }
              },
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'Please provide your phone number.',
              trigger: 'phoneNumber',
            },
            {
              id: 'phoneNumber',
              user: true,
              validator: (value) => {
                if (/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/i.test(value)) {
                  return true
                } else {
                  return 'Phone number is not valid.'
                }
              },
              trigger: 'qtype',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Please provide your EmailID.', trigger: '4' },
                { value: 2, label: 'about Medical', trigger: '3' },
                { value: 3, label: 'Please provide your phone number.', trigger: '5' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="chatbot-btn" onClick={() => startChat()}>
            <img className='sc-open-icon' src={Minus} alt='' />
          </button>
        ) : (
          <button className="chatbot-btn" onClick={() => hideChat()}>
            <img className='sc-closed-icon' src={Pluse} alt='' />
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot;
