import express from 'express'
import os from 'os'

const app = express()

app.get('/',(req,res) => {
    console.log("Hi root")
    res.json({
        msg: "Hello root v1!"
    })
})

app.get('/user',(req,res) => {
    const clientIP = req.header('x-forwarded-for')
    const elbIP = req.socket.remoteAddress
    const containerIP = req.socket.localAddress
    const containerHostname = os.hostname()
    // console.log("hello, root!")
    res.json({
        serviceName : 'User SVC || ECS - ALB demo LAB',
        contact: 'apacheservice68@gmail.com',
        clientIP: clientIP,
        elbIP: elbIP,
        containerIP: containerIP,
        containerHost: containerHostname
    });
});

app.listen(8080, ()=>{
  console.log('App start successfully');
});