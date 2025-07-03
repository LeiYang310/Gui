// 外部条件初始化
if (typeof window.externalConditions === 'undefined') {
    window.externalConditions = {
        socialExpectations: 50,
        groupPressure: 50,
        materialEnvironment: 50
    };
}

// 内部功能初始化
if (typeof window.internalFunctions === 'undefined') {
    window.internalFunctions = {
        ni: 50,
        ti: 50,
        te: 50
    };
}

// 根层结构初始化
if (typeof window.rootLayer === 'undefined') {
    window.rootLayer = {
        root: 50,
        energy: 50
    };
}

// 总控函数，打印所有变量
function controlNextNode() {
    console.log("外部条件：", window.externalConditions);
    console.log("内部功能：", window.internalFunctions);
    console.log("根层结构：", window.rootLayer);
    alert('下一节点已触发，数据已打印');
}
