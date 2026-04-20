
document.addEventListener('DOMContentLoaded', function () {
    // Hover effect on detail cards
    const detailCards = document.querySelectorAll('.detail-card');
    detailCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.opacity = '1';
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.opacity = '1';
            this.style.transform = 'translateY(0)';
        });
    });
});
