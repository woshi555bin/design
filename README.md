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



target：编译之后生成的 JavaScript 文件需要遵循的标准，可选值："ES3"（默认），"ES5"，"ES6"/"ES2015"，"ES2016"，"ES2017"或"ESNext"。我们选择了 es5 为了使包具有更好的浏览器兼容性。
module：指定生成哪个模块系统代码，默认值：target === "ES3" or "ES5" ? "CommonJS" : "ES6"。
declaration：是否生成对应的声明文件，默认值：false。在构建包时，应该设置为 true，这样 TypeScript 会将生成的声明文件和对应编译后的 JavaScript 代码一起导出，以便包可以在 TypeScript 和 JavaScript 项目中同时使用。本项目中生成的声明文件是 /lib/index.d.ts。
outDir：指定输出目录。编译后的 JavaScript 代码会在与 tsconfig.json 同级的 lib 文件夹中。
strict：是否启用所有严格类型检查选项，默认值：false。
lib：编译需要的库文件，例如你指定的 target 是 ES5，但是在代码中使用了 ES6 特性，就需要在 lib 中加上 ES6。默认值：如果 lib 没有指定默认注入的库的列表，默认注入的库为：

target ES5：DOM，ES5，ScriptHost。
target ES6：DOM，ES6，DOM.Iterable，ScriptHost。


include：指定要编译的目录。
exclude：指定不编译的目录。node_modules 和 __tests__ 只是在开发阶段使用，构建阶段无需编译。

