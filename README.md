###  bable-jest 
```
冲突，设置env
```

### @storybook/addon-essentials
```
代替action包
```


create-react-app  yourProjectName --template typescript

npx -p @storybook/cli sb init --type react_scripts

actions插件文档地址https://github.com/storybookjs/storybook/tree/master/addons/actions

links插件用来在各个故事书中进行跳转，相当于a标签一样，是个很常用的插件。

links插件文档地址https://github.com/storybookjs/storybook/tree/master/addons/links

除了这几个，还有些比较常用而且好用的插件：

viewport插件，用来自由调整视口大小。

插件文档地址https://github.com/storybookjs/storybook/tree/master/addons/viewport

knob插件，用来调整输入范例。

插件文档地址https://github.com/storybookjs/storybook/tree/master/addons/knobs

docs插件，用来制作文档。

插件文档地址https://github.com/storybookjs/storybook/tree/master/addons/docs

a11y插件，用来自动检测组件是否支持视障人士等规范的。

插件文档地址https://github.com/storybookjs/storybook/tree/master/addons/a11y

source插件，故事书上的源码映射。

插件文档地址https://github.com/storybookjs/storybook/tree/master/addons/storysource





include：指定要编译的目录。
exclude：指定不编译的目录。node_modules 和 __tests__ 只是在开发阶段使用，构建阶段无需编译。

