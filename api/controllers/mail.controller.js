const nodemailer = require('nodemailer');
const surveyUrl = process.env.WEB_URL + '/survey/';

const outlookTransporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PW
    }
}
);

function surveyNotification(to, id, name) {
    //console.log(process.env);
    return {
        from: process.env.EMAIL_NAME,
        to: to,
        subject: 'Please complete your Talent-metrics survey',
        attachments: [{
            filename: 'logo.svg',
            path: __dirname + '/logo.svg',
            cid: 'logo'
        }],
        text: `Your survey is available at ${ surveyUrl + id }`,
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
                <img src="cid:logo" alt="Talent Metrics logo" style="height: 60px; width:109px">
                <br>
                <br>
                <section style="text-align: justify;">
                    <p>Hi, ${ name }</p>
                    <p>You have been selected to participate in a short survey regarding the culture within your organization. If you would, please take a few moments and use the unique link below, update any incorrect personal information, then complete the short survey.</p>
                    <p>This assessment is best taken on a desktop computer or laptop, and not a mobile device.</p>
                    <p>If you have any issues, please contact support at survey@talent-metrics.com</p>
                </section>
                <br>
                <a
                    href="${ surveyUrl + id }"
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
            </div>`
    };
}

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
};