// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取桌面版按鈕
    const rcPlateBtn = document.getElementById('rc-plate-btn');
    const rcBeamBtn = document.getElementById('rc-beam-btn');
    const steelPlateBtn = document.getElementById('steel-plate-btn');
    const t99AsdBtn = document.getElementById('t99-asd-btn');
    const aiscBtn = document.getElementById('aisc-btn');
    
    // 獲取移動版下拉選單
    const mobileTypeDropdown = document.getElementById('mobile-type-dropdown');
    const mobileStandardDropdown = document.getElementById('mobile-standard-dropdown');
    
    const rcPlateContent = document.getElementById('rc-plate-content');
    const rcBeamContent = document.getElementById('rc-beam-content');
    const steelPlateContent = document.getElementById('steel-plate-content');
    
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
    
    // 桌面版標籤按鈕點擊事件
    if (rcPlateBtn) {
        rcPlateBtn.addEventListener('click', function() {
            setActiveContent('rc-plate-content');
            setActiveTab('rc-plate-btn');
        });
    }
    
    if (rcBeamBtn) {
        rcBeamBtn.addEventListener('click', function() {
            setActiveContent('rc-beam-content');
            setActiveTab('rc-beam-btn');
        });
    }
    
    if (steelPlateBtn) {
        steelPlateBtn.addEventListener('click', function() {
            setActiveContent('steel-plate-content');
            setActiveTab('steel-plate-btn');
        });
    }
    
    if (t99AsdBtn) {
        t99AsdBtn.addEventListener('click', function() {
            setActiveRightTab('t99-asd-btn');
        });
    }
    
    if (aiscBtn) {
        aiscBtn.addEventListener('click', function() {
            setActiveRightTab('aisc-btn');
        });
    }
    
    // 移動版下拉選單變更事件
    if (mobileTypeDropdown) {
        mobileTypeDropdown.addEventListener('change', function() {
            const selectedType = this.value;
            
            if (selectedType === 'rc-plate') {
                setActiveContent('rc-plate-content');
                if (rcPlateBtn) setActiveTab('rc-plate-btn');
            } else if (selectedType === 'rc-beam') {
                setActiveContent('rc-beam-content');
                if (rcBeamBtn) setActiveTab('rc-beam-btn');
            } else if (selectedType === 'steel-plate') {
                setActiveContent('steel-plate-content');
                if (steelPlateBtn) setActiveTab('steel-plate-btn');
            }
        });
    }
    
    if (mobileStandardDropdown) {
        mobileStandardDropdown.addEventListener('change', function() {
            const selectedStandard = this.value;
            
            if (selectedStandard === 't99-asd') {
                if (t99AsdBtn) setActiveRightTab('t99-asd-btn');
            } else if (selectedStandard === 'aisc') {
                if (aiscBtn) setActiveRightTab('aisc-btn');
            }
        });
    }
    
    // 鋼管規格選擇變更事件
    if (steelPipeSpec) {
        steelPipeSpec.addEventListener('change', function() {
            updatePipeSpecValues(this.value);
        });
    }
    
    // 監聽大引間隔輸入
    if (beamInterval) {
        beamInterval.addEventListener('input', function() {
            updateResultValues();
        });
    }
    
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
    
    // 更新日誌按鈕點擊事件
    document.querySelectorAll('.changelog-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const changelogPopup = document.getElementById('changelog-popup');
            if (changelogPopup) {
                changelogPopup.style.display = 'block';
            }
        });
    });
    
    // 關閉彈出視窗按鈕點擊事件
    const closePopup = document.querySelector('.close-popup');
    if (closePopup) {
        closePopup.addEventListener('click', function() {
            const changelogPopup = document.getElementById('changelog-popup');
            if (changelogPopup) {
                changelogPopup.style.display = 'none';
            }
        });
    }
    
    // 點擊彈出視窗外部時關閉
    window.addEventListener('click', function(event) {
        const changelogPopup = document.getElementById('changelog-popup');
        if (event.target == changelogPopup) {
            changelogPopup.style.display = 'none';
        }
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
        const specAElement = document.getElementById('spec-a');
        const specBElement = document.getElementById('spec-b');
        const specCElement = document.getElementById('spec-c');
        const bDimensionValue = document.getElementById('b-dimension-value');
        const cDimensionValue = document.getElementById('c-dimension-value');
        
        if (specAElement) specAElement.textContent = specA;
        if (specBElement) specBElement.textContent = specB;
        if (specCElement) specCElement.textContent = specC;
        if (bDimensionValue) bDimensionValue.textContent = specB;
        if (cDimensionValue) cDimensionValue.textContent = specC;
        if (materialLabel) materialLabel.textContent = materialText;
    }
    
    // 函數：更新結果值
    function updateResultValues() {
        // 當用戶輸入大引間隔時，更新(E)的值
        if (beamInterval && beamInterval.value && valueE) {
            valueE.textContent = beamInterval.value;
        } else if (valueE) {
            valueE.textContent = '(E)';
        }
        
        // 設定F的臨時固定值，未來可能會改為計算的值
        if (valueF) valueF.textContent = '80';
    }
    
    // 函數：切換主要內容區域
    function setActiveContent(contentId) {
        // 隱藏所有內容
        const contents = document.querySelectorAll('.calculator-content');
        contents.forEach(function(content) {
            content.classList.add('hidden');
        });
        
        // 顯示選定的內容
        const activeContent = document.getElementById(contentId);
        if (activeContent) activeContent.classList.remove('hidden');
        
        // 同步移動版下拉選單
        if (mobileTypeDropdown) {
            if (contentId === 'rc-plate-content') {
                mobileTypeDropdown.value = 'rc-plate';
            } else if (contentId === 'rc-beam-content') {
                mobileTypeDropdown.value = 'rc-beam';
            } else if (contentId === 'steel-plate-content') {
                mobileTypeDropdown.value = 'steel-plate';
            }
        }
    }
    
    // 函數：設置左側活動標籤
    function setActiveTab(tabId) {
        const leftTabs = document.querySelectorAll('.left-tab-buttons .tab-btn');
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
        const rightTabs = document.querySelectorAll('.right-tab-buttons .tab-btn');
        rightTabs.forEach(function(tab) {
            if (tab.id === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // 同步移動版規範下拉選單
        if (mobileStandardDropdown) {
            if (tabId === 't99-asd-btn') {
                mobileStandardDropdown.value = 't99-asd';
            } else if (tabId === 'aisc-btn') {
                mobileStandardDropdown.value = 'aisc';
            }
        }
    }
    
    // 初始化執行
    updateResultValues();
});
