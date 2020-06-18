# 无障碍属性实测各类问题

[TOC]

## 无障碍RN官方文档

<https://reactnative.dev/docs/accessibility#__docusaurus>

## 无障碍RN各类属性实测问题

### `accessible`

基本支持

### `accessibilityLabel`

基本支持，使用的时候需要配合`accessible`一起使用

### `accessibilityHint`

暂不支持

### `accessibilityRole`

基本支持，在新版本中，不再支持accessibilityTraits，accessibilityComponentType属性了，代码中保留accessibilityTraits，accessibilityComponentType仅仅是为了支持旧版App可以使用

### `accessibilityState`

基本支持，但是iOS的中文提示语音有问题（role=button的情况下）

1. disabled：选中中文提示“变暗”，无选中不提示
2. selected：选中中文提示“已选择”，无选中不提示
3. checked：无中文提示，选中为“checked”，没选中提示“not checked“
4. busy：无中文，选中提示为“busy”，没选中没提示--汉化：正忙/无提示
5. expanded：无中文，选中时“expanded”，没选中提示“collapsed”--汉化：已展开/已收起

安卓role=button的情况下，button本身的提示就是“button”，不支持中文

1. selected：选中中文提示“已选择”，无选中不提示
2. disabled：选中提示“已禁用”，无选中不提示
3. busy：无中文，选中提示“busy”，无选中不提示
4. expanded：无中文，选中时“expanded”，没选中提示“collapsed”
5. checked：有中文提示，选中为“已选中”，没选中提示“未选中“

### `accessibilityRole`

无障碍的role在安卓上是没有翻译成中文的，所以在这种情况下，我们在安卓上会使用iOS的翻译

1. none：不会有朗读，这个元素即使设置成了accessible也会被忽略，直接穿透读取子元素
2. **button**：按钮，安卓自带Hint，双击以激活
3. **link**：链接
4. **search**：  统一：搜索栏，安卓自带Hint，双击以输入文本
5. **image**：iOS：图像，**安卓**：无标签，图像，
6. **keyboardkey**：iOS：没有朗读，**安卓**：不朗读，
7. **text**：没有朗读，**安卓**会穿透，读取子元素
8. **adjustable**：iOS：可调，用一个手指上下轻扫来调整值，**安卓**：滑块
9. **imagebutton**：iOS：按钮，图像  **安卓**：图像按钮
10. **header**：iOS：标题 。**安卓**：会穿透，直接读取子元素
11. **summary**：iOS：没有朗读   **安卓**：摘要
12. **alert**：alert--汉化：提醒
13. **checkbox**：checkbox--汉化：复选框
14. **combobox**：ios：弹出式按钮  **安卓**：下拉列表框
15. **menu**：menu--汉化：菜单
16. **menubar**：汉化：菜单栏
17. **menuitem**：menu item--汉化：菜单项
18. **progressbar**：progress bar--汉化：进度指示器
19. **radio**：radio button--汉化：单选按钮
20. **radiogroup**：radio group--汉化：单选按钮组
21. **scrollbar**：scroll bar--汉化：滚动条
22. **spinbutton**：spin button--汉化：微调按钮
23. **switch**：切换按钮，轻点两下来切换设置 安卓：开关
24. **tab**：tab--汉化：标签页
25. **tablist**：tab list--汉化：标签列表
26. **timer**：timer—汉化：定时器
27. **toolbar**：tool bar--汉化：工具栏

### `accessibilityElementsHidden`

iOS基本支持

### `importantForAccessibility`

安卓基本支持，但是基本只使用`yes`和`no-hide-descendants`这两个属性，因为需要和iOS保持一致

