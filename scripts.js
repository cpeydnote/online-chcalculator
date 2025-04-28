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
    
    // 分析前提按鈕點擊事件
    document.querySelector('.analysis-btn').addEventListener('click', function() {
        alert('分析前提說明將在未來版本推出，敬請期待！');
    });
    
    // 工具卡片點擊動畫效果
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // 如果頁面還未準備好，顯示提示訊息並阻止導航
            if(!card.href || card.href.endsWith('#')) {
                event.preventDefault();
                alert('此功能正在開發中，敬請期待！');
                return;
            }
            
            // 點擊動畫效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
        
        // 鼠標懸停效果增強
        card.addEventListener('mouseenter', function() {
            this.querySelector('.tool-icon').style.boxShadow = '3px 3px 8px rgba(0, 0, 0, 0.2)';
            this.querySelector('.tool-name').style.boxShadow = '3px 3px 8px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.tool-icon').style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
            this.querySelector('.tool-name').style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });

    // 聯絡我們點擊事件 (可選)
    const contactLink = document.querySelector('.contact-us');
    if(contactLink) {
        contactLink.addEventListener('click', function(event) {
            // 如果您想添加點擊聯絡我們的特殊處理，可以在這裡編寫代碼
            // 例如，如果郵件客戶端無法打開，可以提供備用選項
            // event.preventDefault();
            // 自定義處理...
        });
    }
});
