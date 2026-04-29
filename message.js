document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表单默认提交行为
    // 这里添加表单提交的代码，例如使用fetch API发送数据到服务器
    // 假设提交成功后，显示提示信息
    alert('感谢你的留言，我会尽快回复你！');
    // 重置表单
    this.reset();
});
function showAlert() {
    alert("你在这里留言过8条消息啦！");
}


function clearForm() {
    // 获取表单元素
    var form = document.getElementById('myForm');
    // 遍历表单中的所有字段
    for (var i = 0; i < form.elements.length; i++) {
        var field = form.elements[i];
        // 根据字段类型进行清空
        switch(field.type) {
            case 'text':
            case 'textarea':
            case 'password':
            case 'email':
            case 'number':
            case 'tel':
                field.value = ''; // 清空文本输入字段
                break;
            case 'checkbox':
            case 'radio':
                field.checked = false; // 取消选择复选框和单选按钮
                break;
            case 'select':
            case 'select-one':
            case 'select-multiple':
                field.selectedIndex = -1; // 重置选择框
                break;
        }
    }
}
