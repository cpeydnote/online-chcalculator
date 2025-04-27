// 當頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 登入按鈕點擊事件
    document.querySelector('.login-btn').addEventListener('click', function() {
        alert('登入功能將在未來版本推出，敬請期待！');
    });
    
    // 訂閱按鈕點擊事件
    document.querySelector('.subscribe-btn').addEventListener('click', function() {
        alert('訂閱功能將在未來版本推出，敬請期待！');
    });
    
    // 工具卡片點擊動畫效果
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});
