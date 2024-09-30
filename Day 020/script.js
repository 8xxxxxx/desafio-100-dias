paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '49.90' // Preço do produto
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Obrigado pelo seu pagamento, ' + details.payer.name.given_name + '!');
            // Aqui você pode redirecionar ou exibir uma confirmação
        });
    },
    onCancel: function(data) {
        alert('Pagamento cancelado.');
    },
    onError: function(err) {
        console.error('Erro no pagamento', err);
    }
}).render('#paypal-button-container'); // Renderiza o botão do PayPal dentro do div
