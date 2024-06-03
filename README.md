# 分享你的学校或修改现有的学校

> [!WARNING]
> 本项目的目的是为了帮助学生更好地了解学校，所以请确保你的分享是真实的，不要提供虚假信息

> 贡献前，建议学习一下[markdown语法](https://www.runoob.com/markdown/md-tutorial.html)和[git的使用](https://www.liaoxuefeng.com/wiki/896043488029600)

## 方法一：通过 git 提交（推荐）

1. Fork [本项目](https://github.com/Riceneeder/university-wiki)
2. 在`universities`目录下找到你的学校，如果没有请新建一个，文件名为学校的中文名，例如`清华大学.md`
3. 复制模板到文件中，填写你的学校信息
4. 在`public/universityList.json`中查看你的学校是否已经存在，如果没有请添加，格式为

````json
[
    {
        "universityName": "清华大学",
        "location": "北京市",
        "level": "本科",
        "otherInfo": ["985", "211", "双一流"] // 其他信息
    },
    ...... // 其他学校
    {
        "universityName": "中国人民大学",
        "location": "北京市",
        "level": "本科",
        "otherInfo": []
    }
]
````

5. 提交PR

## 方法二：通过issue提交

1. 到本项目的仓库点击右上角的`Issues`
2. 点击`New issue`
3. 标题填写`分享学校信息：学校中文名`或`分享学校信息：学校中文名`
4. 在内容中填写你的学校信息

## 方法三：通过邮件提交

发送邮件到`845541909@qq.com`，标题为`分享学校信息：学校中文名`或`分享学校信息：学校中文名`

## 模板

```markdown
---
isUniversity: true  // 这一项请不要修改
title: 学校中文名
logo: 学校logo的链接
---
### 学校地图

<Imgs :imgs="[
`https://tse2-mm.cn.bing.net/th/id/OIP-C.X2yZqpHXfcovmZ6Mrw5UvQHaIN?rs=1&pid=ImgDetMain`,
......
]"/>

### 宿舍
<Imgs :imgs="[
`https://pica.zhimg.com/80/v2-367c5eb079ac7a824932993b1ace4ae2_720w.webp?source=1def8aca`,
'https://picx.zhimg.com/80/v2-8717d26e7a45ffbbaf20a8419a0a8310_720w.webp?source=1def8aca',
......
]"/>
<Tags :tags="[`🛏️本科生六人间/研究生四人间`,`❄️空调`,`🧻独立卫生间`,`🚿独立浴室`,`☕24H开水房`,
`💧洗衣房/洗衣机`,`💴住宿费1200元/年`,`时段热水`,`门禁-男生11:30-女生11:00-研究生无`]"/>

### 食堂

### 图书馆

### 体育馆

### 交通

### 附近环境

> 以上内容仅供参考
```

## 注意事项

`title`和`logo`是必填项，其他内容可以根据你的需求填写，但是请不要删除`---`之间的内容

`public/assets/`目录可以存放你的图片，如果你的图片链接不是网络链接，可以将图片上传到这个目录，然后在`学校.md`中引用，但是请不要上传过大的图片，并且推荐webp格式的图片,请规范命名

`<Imgs>`组件可以接受一个图片数组，用于展示多张图片，`<Tags>`组件可以接受一个标签数组，用于展示标签，用法在模板中有示例
