# p2p-Video-Call

This is a basic version of a Peer to Peer Video Chatting System using WebRTC concept. More improvements to come in the future.

**Technologies Used**

- JavaScript
- Socket.IO
- React-Router-DOM (for the routing functionalities)
- Flowbite-React (For beautiful HTML elements)

**Installation Steps**

1. Clone the repository

```bash
   git clone "https://github.com/mihirvaidya221998/p2p-Video-Call.git"
```

2. Navigate to the project directory

```bash
    cd p2p-Video-Call
```

3. Install the neccessary requirements for the backend side of the project

```bash
    npm install
```

4. Now navigate to the front-end using the command

```bash
    cd client
```

5. Install the neccessary requirements for the front-end side of the project

```bash
    npm install
```

6. Now go back to the back-end

```bash
    cd ..
```

7. Run the back-end using the command

```bash
    npm run dev
```

8. Open another terminal and go to the front-end directory

```bash
    cd client
```

9. Over here run the front-end as follows:

```bash
    npm run dev
```

**Steps to Initiate a Video Communication**

- User 1 will write their email and a unique room number of their choice.
- User 2 will write their email and the same room number User 1 has mentioned.
- User 1 will get an option to call when the User 2 has entered the room. Click it.
- User 1's camera will start streaming and user 2 will recieve the stream.
- User 2 will click send stream and a connection for video call will be set up.
