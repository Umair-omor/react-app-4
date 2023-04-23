const FormatPrice = ({price}) => {
    return Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 3,
        // maximumSignificantDigits: 2

    }).format(price / 10000);
}

export default FormatPrice
