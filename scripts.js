// 當頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 登入按鈕點擊事件
    const loginBtns = document.querySelectorAll('.login-btn');
    if(loginBtns.length > 0) {
        loginBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                alert('登入功能將在未來版本推出，敬請期待！');
            });
        });
    }
    
    // 訂閱按鈕點擊事件
    const subscribeBtns = document.querySelectorAll('.subscribe-btn');
    if(subscribeBtns.length > 0) {
        subscribeBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                alert('訂閱功能將在未來版本推出，敬請期待！');
            });
        });
    }
    
    // 分析前提按鈕點擊事件
    const analysisBtns = document.querySelectorAll('.analysis-btn');
    if(analysisBtns.length > 0) {
        analysisBtns.forEach(function(btn) {
            if(!btn.hasAttribute('onclick')) {
                btn.addEventListener('click', function() {
                    alert('分析前提說明將在未來版本推出，敬請期待！');
                });
            }
        });
    }
    
    // 工具卡片點擊動畫效果
    const toolCards = document.querySelectorAll('.tool-card');
    if(toolCards.length > 0) {
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
                const toolName = this.querySelector('.tool-name');
                if(toolName) {
                    toolName.style.boxShadow = '3px 3px 8px rgba(0, 0, 0, 0.2)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                // 恢復文字名稱的原始陰影
                const toolName = this.querySelector('.tool-name');
                if(toolName) {
                    toolName.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
                }
            });
        });
    }

    // 聯絡我們點擊事件
    const contactLinks = document.querySelectorAll('.contact-us');
    if(contactLinks.length > 0) {
        contactLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                // 目前使用默認的mailto行為
                // 如果需要自定義行為，可以在這裡添加代碼
            });
        });
    }
    
    // 更新日誌彈出視窗功能
    const changelogLinks = document.querySelectorAll('.changelog-link');
    if(changelogLinks.length > 0) {
        changelogLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // 阻止默認行為
                const changelogPopup = document.getElementById('changelog-popup');
                if(changelogPopup) {
                    changelogPopup.style.display = 'block';
                }
            });
        });
    }
    
    // 關閉彈出視窗按鈕
    const closePopup = document.querySelector('.close-popup');
    if(closePopup) {
        closePopup.addEventListener('click', function() {
            const changelogPopup = document.getElementById('changelog-popup');
            if(changelogPopup) {
                changelogPopup.style.display = 'none';
            }
        });
    }
    
    // 點擊彈出視窗外部區域關閉
    window.addEventListener('click', function(event) {
        const changelogPopup = document.getElementById('changelog-popup');
        if(changelogPopup && event.target === changelogPopup) {
            changelogPopup.style.display = 'none';
        }
    });
    
    // 移動版選單相關
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if(menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('show');
        });
    }
});
