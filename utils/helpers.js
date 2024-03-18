module.exports = {
    format_date: date => {
        // Check if date is valid
        if (!date || isNaN(new Date(date))) {
            return 'Invalid Date';
        }
        // Format date using toLocaleDateString()
        return new Date(date).toLocaleDateString('en-US');
    }
}
