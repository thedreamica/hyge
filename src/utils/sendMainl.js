import Mailjet from 'node-mailjet'

const sendMail = ({
    fromMail,
    fromName,
    content
}) => {
    const mailjet = Mailjet.apiConnect(
        process.env.REACT_APP_MJ_APIKEY_PUBLIC,
        process.env.REACT_APP_MJ_APIKEY_PRIVATE,
    );
    
    const request = mailjet
            .post('send', { version: 'v3.1' })
            .request({
              Messages: [
                {
                  From: {
                    Email: fromMail,
                    Name: fromName
                  },
                  To: [
                    {
                      Email: "admin@hyge.in",
                      Name: "Admin"
                    }
                  ],
                  Subject: "Regarding hyge",
                  TextPart: content,
                  }
              ]
            })
    
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
}

export default sendMail
