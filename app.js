// 系统多用户结构
window.userData = {};
window.currentUser = '';

// 切换用户
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

// 智能探测功能
function simulateScan() {
    const input = document.getElementById('scanInput').value.trim();
    if (input === '') { alert('请输入关键词'); return; }
    let result = { socialExpectations: 50, groupPressure: 50, materialEnvironment: 50, ni: 50, ti: 50, te: 50, root: 50, energy: 50 };
    if (input.includes('外貌好')) result.socialExpectations = 80;
    if (input.includes('经济差')) result.materialEnvironment = 30;
    if (input.includes('逻辑强')) result.ti = 70;
    if (input.includes('群体压力大')) result.groupPressure = 70;
    if (input.includes('能量弱')) result.energy = 40;
    document.getElementById('b_socialExpectations').value = result.socialExpectations;
    document.getElementById('b_groupPressure').value = result.groupPressure;
    document.getElementById('b_materialEnvironment').value = result.materialEnvironment;
    document.getElementById('b_ni').value = result.ni;
    document.getElementById('b_ti').value = result.ti;
    document.getElementById('b_te').value = result.te;
    document.getElementById('b_root').value = result.root;
    document.getElementById('b_energy').value = result.energy;
    alert('探测完成，已生成推荐值，请确认或微调');
}

// 其他跳转
function goToExternal() { window.location.href = 'external_conditions.html'; }
function goToInternal() { window.location.href = 'internal_functions.html'; }
function goToRoot() { window.location.href = 'root_layer.html'; }

// 总控启动
function controlNextNode() {
    console.log("外部条件：", window.userData[window.currentUser]?.dynamic);
    alert('下一节点已触发，所有变量已打印');
}
