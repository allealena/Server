function renderTpl (tpl, colorItem) {
    var container = tpl;
    container = container.replace(/color:/g, colorItem);
    return container;
}