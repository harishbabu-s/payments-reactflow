export const initialNodes = [
        {
        id: 'payment-options',
        position: { x: 100, y: 100 },
        data: {
                label: 'Payment Options',
                options: [
                    { label: 'Apple Pay', value: 'Apple Pay' },
                    { label: 'Google Pay', value: 'Google Pay' },
                    { label: 'Stripe', value: 'Stripe' },
                    { label: 'PayPal', value: 'PayPal' },
                    { label: 'Samsung Pay', value: 'Samsung Pay' },
                    { label: 'Paytm', value: 'Paytm' },
                ],
            },
        type: 'paymentOption',
        },
        {
        id: 'payment-amount',
        position: { x: -100, y: 300 },
        data: {
        label: 'Payment Amount',
        
        selectedValue: 'option1',
        onSelect: (event) => console.log(event.target.value),
        },
        type: 'paymentAmount',
        },
        {
        id: 'country-us',
        position: { x: 200, y: 300 },
        data: {
        label: 'America',
        },
        type: 'country',
        },
        {
        id: 'country-uk',
        position: { x: 200, y: 400 },
        data: {
        label: 'United Kingdom',
        },
        type: 'country',
        },
        {
        id: 'country-ind',
        position: { x: 200, y: 500 },
        data: {
        label: 'India',
        },
        type: 'country',
        },
    ];
