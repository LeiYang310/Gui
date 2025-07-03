// 多用户总数据结构
window.userData = {
    'user001': {
        externalConditions: { socialExpectations: 50, groupPressure: 50, materialEnvironment: 50 },
        internalFunctions: { ni: 50, ti: 50, te: 50 },
        rootLayer: { root: 50, energy: 50 }
    },
    'user002': {
        externalConditions: { socialExpectations: 60, groupPressure: 40, materialEnvironment: 70 },
        internalFunctions: { ni: 80, ti: 65, te: 55 },
        rootLayer: { root: 75, energy: 90 }
    }
};

// 当前操作用户身份
window.currentUser = 'user001';

// 外部条件初始化
if (typeof window.userData[window.currentUser].externalConditions === 'undefined') {
    window.userData[window.currentUser].externalConditions = {
        socialExpectations: 50,
        groupPressure: 50,
        materialEnvironment: 50
    };
}

// 内部功能初始化
if (typeof window.userData[window.currentUser].internalFunctions === 'undefined') {
    window.userData[window.currentUser].internalFunctions = {
        ni: 50,
        ti: 50,
        te: 50
    };
}

// 根层结构初始化
if (typeof window.userData[window.currentUser].rootLayer === 'undefined') {
    window.userData[window.currentUser].rootLayer = {
        root: 50,
        energy: 50
    };
}

// 总控函数
function controlNextNode() {
    const data = window.userData[window.currentUser];
    console.log("外部条件：", data.externalConditions);
    console.log("内部功能：", data.internalFunctions);
    console.log("根层结构：", data.rootLayer);
    alert('下一节点已触发，数据已打印');
}
