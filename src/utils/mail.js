import Mailgen from "mailgen";
import nodemailer from "nodemailer";

//configuration 
const sendmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://mailgen.js/"
        }
    });

    var emailtext = mailGenerator.generate(options.MailGenContent);
    var emailhtml = mailGenerator.generateHtml(options.mailGenContent);


    // create a transporter
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user 
            pass: process.env.MAIL_PASS, // generated ethereal password
        }
    });
     
    const mail = {
        from: `"Task Manager" <${process.env.MAIL_USER}>`, // sender address
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: emailtext, // plain text body
        html: emailhtml, // html body
    };

    //try catch for error handling
    try {
        await transporter.sendMail(mail);
    } catch (error) {
        console.error("Error sending email:", error);
    }

}

const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body: {
        name: username,
        intro: 'Welcome to the App! We\'re very excited to have you on board.',
        action: {
            instructions: 'To get started, please click here:',
            button: {
                color: '#22BC66',
                text: 'Verify your email',
                link: verificationUrl,
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
}
}

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
    return {
        body: {
        name: username,
        intro: 'We got a request to reset your password.',
        action: {
            instructions: 'To change your password, please click here:',
            button: {
                color: '#22BC66',
                text: 'Reset your password',
                link: passwordResetUrl,
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
}
}

sendmail({
    email: user.email,
    subject: "aaaa",
    mailGenContent: emailVerificationMailGenContent(
        user.name, 
        ``
    )
});
