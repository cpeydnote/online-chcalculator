// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有需要操作的DOM元素
    const rcPlateBtn = document.getElementById('rc-plate-btn');
    const rcBeamBtn = document.getElementById('rc-beam-btn');
    const steelPlateBtn = document.getElementById('steel-plate-btn');
    const t99AsdBtn = document.getElementById('t99-asd-btn');
    const aiscBtn = document.getElementById('aisc-btn');
    
    const rcPlateContent = document.getElementById('rc-plate-content');
    const rcBeamContent = document.getElementById('rc-beam-content');
    const steelPlateContent = document.getElementById('steel-plate-content');
    
    const steelPipeSpec = document.getElementById('steel-pipe-spec');
    const steelPipeSpecBeam = document.getElementById('steel-pipe-spec-beam');
    
    // 移動版選單相關
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // 設定初始值
    updatePipeSpecValues('A36');
    updatePipeSpecValuesBeam('A36');
    
    // 標籤按鈕點擊事件
    rcPlateBtn.addEventListener('click', function() {
        setActiveContent('rc-plate-content');
        setActiveTab('rc-plate-btn');
    });
    
    rcBeamBtn.addEventListener('click', function() {
        setActiveContent('rc-beam-content');
        setActiveTab('rc-beam-btn');
    });
    
    steelPlateBtn.addEventListener('click', function() {
        setActiveContent('steel-plate-content');
        setActiveTab('steel-plate-btn');
    });
    
    t99AsdBtn.addEventListener('click', function() {
        setActiveRightTab('t99-asd-btn');
    });
    
    aiscBtn.addEventListener('click', function() {
        setActiveRightTab('aisc-btn');
    });
    
    // 鋼管規格選擇變更事件
    steelPipeSpec.addEventListener('change', function() {
        updatePipeSpecValues(this.value);
    });
    
    steelPipeSpecBeam.addEventListener('change', function() {
        updatePipeSpecValuesBeam(this.value);
    });
    
    // 移動版選單開關
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('show');
        });
    }
    
    // 登入按鈕點擊事件
    document.querySelectorAll('.login-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('登入功能將在未來版本推出，敬請期待！');
        });
    });
    
    // 訂閱按鈕點擊事件
    document.querySelectorAll('.subscribe-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('訂閱功能將在未來版本推出，敬請期待！');
        });
    });
    
    // 聯絡我們點擊事件
    document.querySelectorAll('.contact-us').forEach(function(link) {
        link.addEventListener('click', function(event) {
            if (!link.hasAttribute('href')) {
                event.preventDefault();
                window.location.href = 'mailto:cpeydnote@gmail.com';
            }
        });
    });
    
    // 函數：根據選定的鋼管規格更新RC板頁面的參數值
    function updatePipeSpecValues(specType) {
        let specA, specB, specC;
        
        if (specType === 'A36') {
            specA = '2.4';
            specB = '4.86';
            specC = '0.25';
        } else if (specType === 'STK500') {
            specA = '3.5';
            specB = '4.86';
            specC = '0.25';
        }
        
        // 更新顯示值
        document.getElementById('spec-a').textContent = specA;
        document.getElementById('spec-b').textContent = specB;
        document.getElementById('spec-c').textContent = specC;
        document.getElementById('b-dimension-value').textContent = specB;
        document.getElementById('c-dimension-value').textContent = specC;
    }
    
    // 函數：根據選定的鋼管規格更新RC梁頁面的參數值
    function updatePipeSpecValuesBeam(specType) {
        let specA, specB, specC;
        
        if (specType === 'A36') {
            specA = '2.4';
            specB = '4.86';
            specC = '0.25';
        } else if (specType === 'STK500') {
            specA = '3.5';
            specB = '4.86';
            specC = '0.25';
        }
        
        // 更新顯示值
        document.getElementById('spec-a-beam').textContent = specA;
        document.getElementById('spec-b-beam').textContent = specB;
        document.getElementById('spec-c-beam').textContent = specC;
        document.getElementById('b-dimension-value-beam').textContent = specB;
        document.getElementById('c-dimension-value-beam').textContent = specC;
    }
    
    // 函數：切換主要內容區域
    function setActiveContent(contentId) {
        // 隱藏所有內容
        const contents = document.querySelectorAll('.calculator-content');
        contents.forEach(function(content) {
            content.classList.add('hidden');
        });
        
        // 顯示選定的內容
        document.getElementById(contentId).classList.remove('hidden');
    }
    
    // 函數：設置左側活動標籤
    function setActiveTab(tabId) {
        // 左側標籤的活動狀態處理
        const leftTabs = [rcPlateBtn, rcBeamBtn, steelPlateBtn];
        leftTabs.forEach(function(tab) {
            if (tab.id === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    
    // 函數：設置右側標籤的活動狀態
    function setActiveRightTab(tabId) {
        const rightTabs = [t99AsdBtn, aiscBtn];
        rightTabs.forEach(function(tab) {
            if (tab.id === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    
    // 添加輸入值變更監聽器，即時進行計算
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        input.addEventListener('input', updateCalculations);
    });
    
    // 函數：更新計算結果
    function updateCalculations() {
        // 這裡可以添加根據輸入值進行計算的邏輯
        // 例如計算大引間隔與支撐間距的關係等
        
        // 由於沒有明確的計算公式，這裡只做一個簡單的示例
        
        if (rcPlateContent.classList.contains('hidden')) {
            // RC梁頁面的計算
            const supportHeight = document.getElementById('support-height-beam').value;
            const loadSupportCount = document.getElementById('load-support-count').value;
            
            if (supportHeight && loadSupportCount) {
                // 示例：計算支撐排數
                const resultE = Math.ceil(parseInt(supportHeight) / 90);
                const resultElements = document.querySelectorAll('#rc-beam-content .check-formula .formula-value');
                if (resultElements.length > 0) {
                    resultElements[0].textContent = resultE.toString();
                }
            }
        } else {
            // RC板頁面的計算
            const beamInterval = document.getElementById('beam-interval').value;
            const supportHeight = document.getElementById('support-height').value;
            
            if (beamInterval && supportHeight) {
                // 示例：計算某個值
                const resultE = (parseInt(beamInterval) / 100).toFixed(1);
                const resultElement = document.querySelector('#rc-plate-content .check-formula .formula-value:first-child');
                if (resultElement) {
                    resultElement.textContent = resultE;
                }
            }
        }
    }
});
