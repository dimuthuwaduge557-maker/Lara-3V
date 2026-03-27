const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94726800768' : process.env.OWNER_NUMBER, //94726800768
    SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID, //𝕃𝔸ℝ𝔸-𝕄𝔻=qcRFkYZY#VbDh9NXG7BEmMcjLFAlrYu8hww6aKXbefAo1MIxi6cQ
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? '' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
};

/*
LARA MD BOT DEVELOPED BY SADEESHA

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
