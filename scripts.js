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
    const analysisBtn = document.querySelector('.analysis-btn');
    if (analysisBtn) {
        analysisBtn.addEventListener('click', function() {
            if (this.hasAttribute('onclick')) return; // 如果有onclick屬性，則不執行alert
            alert('分析前提說明將在未來版本推出，敬請期待！');
        });
    }
    
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
        
        // 鼠標懸停效果 - 只對文字框應用
        card.addEventListener('mouseenter', function() {
            // 只為文字名稱添加陰影效果
            this.querySelector('.tool-name').style.boxShadow = '3px 3px 8px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            // 恢復文字名稱的原始陰影
            this.querySelector('.tool-name').style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });

    // 聯絡我們點擊事件
    const contactLink = document.querySelector('.contact-us');
    if(contactLink) {
        contactLink.addEventListener('click', function(event) {
            // 目前使用默認的mailto行為
            // 如果需要自定義行為，可以在這裡添加代碼
        });
    }
    
    // 更新日誌彈出視窗功能
    const changelogLinks = document.querySelectorAll('.changelog-link');
    const changelogPopup = document.getElementById('changelog-popup');
    const closePopup = document.querySelector('.close-popup');
    
    // 點擊更新日誌鏈接時打開彈出視窗
    if (changelogLinks.length > 0 && changelogPopup) {
        changelogLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                changelogPopup.style.display = 'block';
            });
        });
        
        // 點擊關閉按鈕時關閉彈出視窗
        if (closePopup) {
            closePopup.addEventListener('click', function() {
                changelogPopup.style.display = 'none';
            });
        }
        
        // 點擊彈出視窗外部時關閉
        window.addEventListener('click', function(event) {
            if (event.target == changelogPopup) {
                changelogPopup.style.display = 'none';
            }
        });
    }
});
