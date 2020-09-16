import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { withRouter } from 'react-router-dom';

class Paypal extends React.Component {

    render() {
        const { location, history } = this.props;
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment succeeded!", payment);
            history.push('/payconfirmed');
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            history.push('/');
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!");
            history.push('/payfailed');
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.toPay;
        // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: 'AdiZ5j664xh53jWe3p7b2QfAYOGYLo6OLoMqPAiAwqSWamfAo4jLwCkg3xNhmZsSe2t6EmZDk6a8aTH1',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn
                style={{
                    size: 'small',
                    color: 'black',
                    shape: 'rect',
                    label: 'checkout',
                    tagline: 'true'
                }}
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel} />
        );
    }
}

export default withRouter(Paypal);