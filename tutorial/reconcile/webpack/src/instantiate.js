let {
    updateDomProperties
} = require('./updateDomProperties.js');
function instantiate(element) {
    const {
        type,
        props = {}
    } = element;
    // 判断内置标签
    const isDomElement = typeof type === 'string';
    // 判断自定义标签 也就是组件  如果是组件的话那原型链会有isReactComponent
    const isClassElement = !!(type.prototype && type.prototype.isReactComponent);
    // 内置标签的分支
    if (isDomElement) {
        console.log(element)
        // 创建dom 这里判断是文本节点还是元素节点 例如元素节点会是{type:'div'} 文本节点为{type:'TEXT_ELEMENT'}
        const isTextElement = type === 'TEXT_ELEMENT';
        console.log(isTextElement);
        // 如果是文本节点将对象转为空字符串'' 如果是元素节点将对象转为<div></div>
        const dom = isTextElement ? document.createTextNode('') : document.createElement(type);
        console.log(dom)
        // 设置dom的事件、数据属性
        updateDomProperties(dom, [], element.props);
        // 如果有子元素赋值给children，否则赋值空数组
        const children = props.children || [];
        // 遍历children所有的子元素并进行处理
        // 这一句非常关键会一层层遍历对象，div.props.children -> p.props.children -> "TEXT_ELEMENT".props.children
        // 遍历到最底层的时候再沿路往上返回 return {element,dom,childInstances} 对象回到div
        const childInstances = children.map(instantiate);
        console.log(childInstances)
        // 遍历childInstances下所有的dom属性
        const childDoms = childInstances.map(childInstance => childInstance.dom);
        console.log(childDoms)
        // 拼接到根元素节点上
        childDoms.forEach(childDom => dom.appendChild(childDom));
        const instance = {
            // 每个子节点对象
            element,
            // 子节点生成尚未挂载的虚拟DOM
            dom,
            // 每个子节点下的所有子节点instance信息
            childInstances
        };
        return instance;
    }
    // 自定义标签(组件)的分支
    else if (isClassElement) {
        const instance = {};
        // 实例化组件类
        const publicInstance = createPublicInstance(element, instance);
        console.log(publicInstance)
        // 获取组件的JSX对象
        const childElement = publicInstance.render();
        // 转化JSX对象为虚拟DOM
        const childInstance = instantiate(childElement);
        console.log(childElement)
        Object.assign(instance, {
            // 组件的结构本质就是解析子节点标签的元素节点
            dom: childInstance.dom,
            element,
            // 组件只有一个根节点，所以这里的childInstance不是数组，只是一个对象
            childInstance,
            // 这个属性组件独有的
            publicInstance
        });
        return instance;
    } else {
        const childElement = type(element.props);
        const childInstance = instantiate(childElement);
        const instance = {
            dom: childInstance.dom,
            element,
            childInstance
        };
        return instance;
    }
}

// 这里主要是实例化组件，并且继承props值
function createPublicInstance(element, instance) {
    // 自定义标签(组件)是没有children的
    const {
        type,
        props
    } = element;
    console.log(element)
    // 把组件实例化 new App(props)
    // 并把所有的props传进组件实例
    const publicInstance = new type(props);
    // 新增一个属性值__internalInstance存放instance
    // 方便我们在后面的setState触发reconcile的时候可以直接获取props和state的值进行DOM更新
    publicInstance.__internalInstance = instance;
    return publicInstance;
}

module.exports = {
    instantiate
}