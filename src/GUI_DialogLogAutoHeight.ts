/**
 * 对话记录
 */
class GUI_DialogLogAutoHeight extends GUI_DialogLog {}

// 记录原函数
// @ts-ignore 忽略处理
const GUI_DialogLogAutoHeight_refreshList = GUI_DialogLog.prototype.refreshList
// 重写该函数
// @ts-ignore 忽略处理
GUI_DialogLog.prototype.refreshList = function () {
  // 执行旧的函数，作用域和参数保证是当前调用的，可以任意修改调用的顺序，或者不执行该行时表示不执行任何旧逻辑
  GUI_DialogLogAutoHeight_refreshList.apply(this, arguments)
  // 获取对话记录
  const dialogRecords = WorldData.dialogRecords
  if (!dialogRecords || dialogRecords.length == 0) {
    this.dialogRecordList.items = []
    return
  }
  let _y = 0
  let _height = 0
  for (let i = 0; i < dialogRecords.length; i++) {
    const item = this.dialogRecordList.getItemUI(i)
    if (i > 0) {
      // @ts-ignore 忽略处理
      item._y = _y + _height + this.dialogRecordList.spaceY
      // @ts-ignore 忽略处理
      _y = item._y
    }
    // @ts-ignore 忽略处理
    else { item.y = 0 }
    // @ts-ignore 忽略处理
    _height = item.dialogContent.textHeight
  }
  // 滚动到最底下
  this.dialogRecordList.scrollTo(99999)
}
