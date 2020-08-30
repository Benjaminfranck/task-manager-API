const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'benjamin.franck@live.fr',
        subject: "Thanks for joining in",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'benjamin.franck@live.fr',
        subject: "Why do you want to leave us?",
        text: `Hey ${name}. We are so sad to see you leaving us, is there anything we can do to keep you with us?.`
    })
}

module.exports = { 
    sendWelcomeEmail,sendCancelEmail
}