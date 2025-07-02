// 定义外部条件变量
let externalConditions = {
    socialExpectations: 50,
    groupPressure: 50,
    materialEnvironment: 50
};

// 更新变量函数
function updateCondition(key, value) {
    externalConditions[key] = value;
    console.log("外部条件更新：", externalConditions);
}

// 控制下一节点函数（保留您的原逻辑）
function controlNextNode() {
    alert('下一个节点已触发');
    console.log("当前外部条件：", externalConditions);
}
