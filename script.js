// 公共获取URL参数
function getParam(key) {
    const params = new URLSearchParams(location.search);
    return params.get(key) || "";
}

// 用于所有滑动条同步数值显示
function bindSlider(id, callback) {
    const slider = document.getElementById(id);
    const display = document.getElementById(id + "Val");
    slider.oninput = () => {
        display.innerText = slider.value;
        if (callback) callback();
    };
}

// 总分与动能实时计算（示例，视页面结构补充参数）
function calculateTotals() {
    const outerVals = ["social", "material", "appearance"].map(id => parseInt(document.getElementById(id).value));
    const innerVals = ["ti", "fi", "ni"].map(id => parseInt(document.getElementById(id).value));

    const outerTotal = Math.round(outerVals.reduce((a, b) => a + b) / outerVals.length);
    const innerTotal = Math.round(innerVals.reduce((a, b) => a + b) / innerVals.length);
    const dynamics = Math.round((outerTotal + innerTotal) / 2);

    document.getElementById("outerTotal").innerText = outerTotal;
    document.getElementById("innerTotal").innerText = innerTotal;
    document.getElementById("dynamics").innerText = dynamics;
}

// 设置变动目标并记录历史
function recordGoal(targetValueId, timeSelectId, historyListId) {
    const value = document.getElementById(targetValueId).value;
    const time = document.getElementById(timeSelectId).value;
    const date = new Date().toLocaleDateString();
    const item = `${date} Lei设定目标调整至${value}，周期：${time}天`;

    const li = document.createElement("li");
    li.innerText = item;
    document.getElementById(historyListId).appendChild(li);
}
