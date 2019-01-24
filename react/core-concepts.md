# 核心概念

### 转换[Transformation]
**UI 是数据的一种表现形式**

### 抽象[Abstraction]
**所有的UI都是一些可重用的块资源**
> 因为一个方法很难适应复杂的UI，所以大多的做法是在一个方法里面调用另外一些方法（可以重复的组件），例如：一个button就可以作为一个组件，需要的时候去调用。

### 组件容器[Container]
> 实现真正意义上的重用特性，需要构建一些组件封装成容器，用的时候直接调用。
```
function FancyBox(children) {
  return {
    borderStyle: '1px solid blue',
    children: children
  };
}

function UserBox(user) {
  return FancyBox([
    'Name: ',
    NameBox(user.firstName + ' ' + user.lastName)
  ]);
}
```
### 数据状态[State]
> We thread functions through that can update props as a single atom at the top.



> 参考[react-base](https://github.com/reactjs/react-basic)
