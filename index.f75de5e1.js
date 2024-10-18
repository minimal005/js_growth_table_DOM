"use strict";
document.addEventListener("click", (e)=>{
    const target = e.target.closest(".button");
    if (!target) return;
    changeTable(target);
});
function changeTable(elem) {
    const table = document.querySelector(".field");
    const addRow = elem.closest(".append-row");
    const addColumn = elem.closest(".append-column");
    const removeRow = elem.closest(".remove-row");
    const removeColumn = elem.closest(".remove-column");
    switch(elem){
        case addRow:
            const cloneElem = table.rows[0].cloneNode(true);
            table.append(cloneElem);
            if (table.rows.length === 10) addAttribute(addRow);
            break;
        case removeRow:
            table.rows[table.rows.length - 1].remove();
            if (table.rows.length === 2) addAttribute(removeRow);
            break;
        case addColumn:
            [
                ...table.rows
            ].forEach((el)=>{
                const td = document.createElement("td");
                el.append(td);
            });
            if (table.rows[0].cells.length === 10) addAttribute(addColumn);
            break;
        case removeColumn:
            [
                ...table.rows
            ].forEach((el)=>{
                el.cells[el.cells.length - 1].remove();
            });
            if (table.rows[0].cells.length === 2) addAttribute(removeColumn);
            break;
        default:
            break;
    }
    check();
}
function addAttribute(el) {
    el.setAttribute("disabled", "true");
}
function removeAttribute(el) {
    el.removeAttribute("disabled");
}
// checking table sizes and activating inactive buttons
function check() {
    const table = document.querySelector(".field");
    const rowRemove = document.querySelector(".remove-row");
    const rowAdd = document.querySelector(".append-row");
    const columnAdd = document.querySelector(".append-column");
    const columnRemove = document.querySelector(".remove-column");
    if (table.rows.length > 2 && rowRemove.hasAttribute("disabled")) removeAttribute(rowRemove);
    else if (table.rows.length < 10 && rowAdd.hasAttribute("disabled")) removeAttribute(rowAdd);
    else if (table.rows[0].cells.length > 2 && columnRemove.hasAttribute("disabled")) removeAttribute(columnRemove);
    else if (table.rows[0].cells.length < 10 && columnAdd.hasAttribute("disabled")) removeAttribute(columnAdd);
}

//# sourceMappingURL=index.f75de5e1.js.map
