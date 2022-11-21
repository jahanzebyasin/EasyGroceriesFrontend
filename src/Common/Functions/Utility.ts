export default {
    formatCurrency(amount:number) {
        return (Math.round(amount * 100) / 100).toFixed(2);
    }
}