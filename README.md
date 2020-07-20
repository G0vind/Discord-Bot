# Discord Bot 
Discord bot built from [discord.js](https://discord.js.org/#/) and JavaScript

### Steps

1. Clone this repo to a suitable location.
2. Log in/Create your account at [Discord_Developer](https://discord.com/developers)
3. Create a new application in the **Applications** section.
4. Record the token under *Client Secret* and  *Client ID*. We are gonna need this. 
5. Now go to the directory where your repo was cloned to.
6. Open *config,json* and enter the earlier recorded *Client Secret* as value for *token*. 
7. Get your Owner ID from Discord Profile and enter it as value for *ownerID* of config.json.
8. Change the Prefix for your bot under *prefix* of config.json if needed. (By Default its set to "_" )

    Great! You've done everything required for the bot to run.

9. Now run ```npm install``` in the main directory (Make sure node version is v12.18 or above)
10. After installing the necessary packages, run ```node index.js```

    Your Bot is now up! Now lets generate the Link needed to invite it to a server.

11. Now go to [DiscordAPI_Permissions](https://discordapi.com/permissions.html)
12. Check the permission you require and enter the earlier recorded *Client ID* in the Client ID field.
13. The Below link is the invite link needed to invite the Bot to your server.

You have now finished setting up a Basic Discord bot. \
The Bot has the basic command _ping. Try it out! \
      \
**All Commands are saved in commands directory.**  \
      \
**All Events are saved in events directory.**    

### Files

1. index.js - Main file containing the code for the bot.
2. package.json - The main info about the bot and the modules you need to install.
3. config.json - Contains information about the prefix, token and ownerID for the bot.


References
 \[1\] [Discord.js.org](https://discord.js.org/)
