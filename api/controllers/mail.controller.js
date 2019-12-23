const nodemailer = require('nodemailer');
const apiUrl = process.env.API_URL + '/survey/';
const webUrl = process.env.WEB_URL + '/survey/';

const outlookTransporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PW
    }
});

// const mailOptions = {
//     from: 'aaron@thewebfactory.io',
//     to: 'aaron@thewebfactory.io',
//     subject: 'Sending E-mail From TalentMetrics',
//     text: 'That was so easy!'
// }

function mailOptions(to) {
    return {
        from: process.env.EMAIL_NAME,
        to: to,
        subject: 'Sending E-mail From TalentMetrics',
        text: 'That was so easy!',
        html: `
            <h1>Check this out in html</h1>
            <p>it works on multi-line, too</p>
        `
    }
}
function surveyNotification(to, id, name) {
    console.log(process.env);
    return {
        from: process.env.EMAIL_NAME,
        to: to,
        subject: 'Please complete your TalentMetrics survey',
        attachments: [{
            filename: 'tmLogo.svg',
            path: __dirname + '/tmLogo.svg',
            cid: 'tmLogo'
        }],
        text: 'That was so easy!',
        html: `
            <div style="padding: 24px; height: 450px; width: 500px;">
                <div style="
                background-color: rgba(245, 245, 245, 1);
                height: 100%; padding: 24px;
                border-radius: 5px;
                box-shadow: 1rem 1rem 5rem rgba(25, 25, 25, .7);
                width: 75%;
                text-align: center;
                ">
                <img src="cid:tmLogo" alt="Talent Metrics logo" style="height: 125px">
                <br>
                <br>
                <section style="text-align: justify;">
                    <p>Hi, ${ name }</p>
                    <p>You have been selected to participate in a short survey regarding the culture within your organization. If you would, please take a few moments and use the unique link below, update any incorrect personal information, then complete the short survey.</p>
                </section>
                <br>
                <a
                    href="${ webUrl + id }"
                    style="
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: lighter;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    color: black;
                    font-size: 24pt;
                    padding: 24px;
                    border: 1px solid black;
                    display: inline-block;
                    width: 250px;
                    background-color: #fff;
                ">Start Survey</a>
                </div>
            </div>
        `
    }
}

// transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ', info.response);
//     }
// });

module.exports.mail = (req, res) => {
    const personalInfo = req.body.personalInfo;
    const surveyInfo = req.body.surveyInfo;

    let to = personalInfo.email;
    let id = req.body._id;
    let name = personalInfo.firstName + ' ' + personalInfo.lastName;

    outlookTransporter.sendMail(surveyNotification(to, id, name), function(error, info) {
        if (error) {
            res.send(error);
        } else {
            res.json(info);
        }
    });
}