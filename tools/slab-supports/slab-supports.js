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
    
    // 新增：取得下拉選單元素
    const typeDropdown = document.getElementById('type-dropdown');
    const standardDropdown = document.getElementById('standard-dropdown');
    
    const steelPipeSpec = document.getElementById('steel-pipe-spec');
    const materialLabel = document.getElementById('material-label');
    const beamInterval = document.getElementById('beam-interval');
    const valueE = document.getElementById('value-e');
    const valueF = document.getElementById('value-f');
    
    // 移動版選單相關
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // 設定初始值
    updatePipeSpecValues('A36');
    
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
        // 未來可能會更新計算方式，影響(F)值
    });
    
    aiscBtn.addEventListener('click', function() {
        setActiveRightTab('aisc-btn');
        // 未來可能會更新計算方式，影響(F)值
    });
    
    // 新增：類型下拉選單變更事件
    if (typeDropdown) {
        typeDropdown.addEventListener('change', function() {
            const selectedType = this.value;
            
            // 根據選擇的值切換內容
            if (selectedType === 'rc-plate') {
                setActiveContent('rc-plate-content');
                setActiveTab('rc-plate-btn');
            } else if (selectedType === 'rc-beam') {
                setActiveContent('rc-beam-content');
                setActiveTab('rc-beam-btn');
            } else if (selectedType === 'steel-plate') {
                setActiveContent('steel-plate-content');
                setActiveTab('steel-plate-btn');
            }
        });
    }
    
    // 新增：規範下拉選單變更事件
    if (standardDropdown) {
        standardDropdown.addEventListener('change', function() {
            const selectedStandard = this.value;
            
            // 根據選擇的值切換規範
            if (selectedStandard === 't99-asd') {
                setActiveRightTab('t99-asd-btn');
            } else if (selectedStandard === 'aisc') {
                setActiveRightTab('aisc-btn');
            }
        });
    }
    
    // 鋼管規格選擇變更事件
    steelPipeSpec.addEventListener('change', function() {
        updatePipeSpecValues(this.value);
    });
    
    // 監聽大引間隔輸入
    beamInterval.addEventListener('input', function() {
        updateResultValues();
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
    
    // 函數：根據選定的鋼管規格更新參數值
    function updatePipeSpecValues(specType) {
        let specA, specB, specC, materialText;
        
        if (specType === 'A36') {
            specA = '2.5';
            specB = '4.86';
            specC = '0.25';
            materialText = 'A36';
        } else if (specType === 'STK500') {
            specA = '3.5';
            specB = '4.86';
            specC = '0.25';
            materialText = 'STK500';
        }
        
        // 更新顯示值
        document.getElementById('spec-a').textContent = specA;
        document.getElementById('spec-b').textContent = specB;
        document.getElementById('spec-c').textContent = specC;
        document.getElementById('b-dimension-value').textContent = specB;
        document.getElementById('c-dimension-value').textContent = specC;
        materialLabel.textContent = materialText;  // 更新材料標籤
    }
    
    // 函數：更新結果值
    function updateResultValues() {
        // 當用戶輸入大引間隔時，更新(E)的值
        if (beamInterval.value) {
            valueE.textContent = beamInterval.value;
        } else {
            valueE.textContent = '(E)';
        }
        
        // 設定F的臨時固定值，未來可能會改為計算的值
        valueF.textContent = '80';  // 假設為80，實際上應根據計算公式或用戶設定
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
        
        // 同步下拉選單的值（如果存在）
        if (typeDropdown) {
            if (contentId === 'rc-plate-content') {
                typeDropdown.value = 'rc-plate';
            } else if (contentId === 'rc-beam-content') {
                typeDropdown.value = 'rc-beam';
            } else if (contentId === 'steel-plate-content') {
                typeDropdown.value = 'steel-plate';
            }
        }
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
        
        // 同步下拉選單的值（如果存在）
        if (standardDropdown) {
            if (tabId === 't99-asd-btn') {
                standardDropdown.value = 't99-asd';
            } else if (tabId === 'aisc-btn') {
                standardDropdown.value = 'aisc';
            }
        }
    }
    
    // 初始化執行
    updateResultValues();
});
