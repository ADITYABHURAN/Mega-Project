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

    var emailtext = mailGenerator.generate(options);
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