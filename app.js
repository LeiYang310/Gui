// 多用户数据结构
window.userData = {};
window.currentUser = '';

// 宇宙信息接口 - 标准预留
window.universeInterface = {
    scanEntity: function (entityName) {
        console.log(`[探测请求] 目标：${entityName}，已提交至宇宙信息层`);

        // 真实探测逻辑位置，现阶段返回模拟值
        return {
            socialExpectations: 75,
            groupPressure: 50,
            materialEnvironment: 65,
            ni: 60,
            ti: 55,
            te: 70,
            root: 50,
            energy: 80
        };
    }
};

// 用户切换
function switchUser() {
    const selector = document.getElementById('userSelector');
    window.currentUser = selector.value;
    alert('已切换至：' + window.currentUser);
}

// 创建新用户
function createNewUser() {
    const newId = document.getElementById('newUserId').value.trim();
    if (newId === '' || window.userData.hasOwnProperty(newId)) {
        alert('名字不能为空或用户已存在'); return;
    }
    const baseline = {
        socialExpectations: Number(document.getElementById('b_socialExpectations').value),
        groupPressure: Number(document.getElementById('b_groupPressure').value),
        materialEnvironment: Number(document.getElementById('b_materialEnvironment').value),
        ni: Number(document.getElementById('b_ni').value),
        ti: Number(document.getElementById('b_ti').value),
        te: Number(document.getElementById('b_te').value),
        root: Number(document.getElementById('b_root').value),
        energy: Number(document.getElementById('b_energy').value)
    };
    window.userData[newId] = { baseline: baseline, dynamic: { ...baseline } };
    const selector = document.getElementById('userSelector');
    const option = document.createElement('option');
    option.value = newId; option.text = newId;
    selector.appendChild(option); selector.value = newId;
    window.currentUser = newId;
    alert('已创建并切换至：' + newId);
}

// 智能探测
function simulateScan() {
    const name = document.getElementById('scanInput').value.trim();
    if (name === '') { alert('请输入目标名称'); return; }
    
    const result = window.universeInterface.scanEntity(name);

    document.getElementById('b_socialExpectations').value = result.socialExpectations;
    document.getElementById('b_groupPressure').value = result.groupPressure;
    document.getElementById('b_materialEnvironment').value = result.materialEnvironment;
    document.getElementById('b_ni').value = result.ni;
    document.getElementById('b_ti').value = result.ti;
    document.getElementById('b_te').value = result.te;
    document.getElementById('b_root').value = result.root;
    document.getElementById('b_energy').value = result.energy;

    alert('宇宙信息反馈已更新，请确认');
}

// 模块跳转
function goToExternal() { window.location.href = 'external_conditions.html'; }
function goToInternal() { window.location.href = 'internal_functions.html'; }
function goToRoot() { window.location.href = 'root_layer.html'; }

// 总控输出
function controlNextNode() {
    console.log("当前用户：", window.currentUser);
    console.log("用户数据：", window.userData[window.currentUser]?.dynamic);
    alert('下一节点已触发，数据已打印');
}
