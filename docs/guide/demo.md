# 示例

## 示例JS

``` js
export default {
  name: 'Test'
}
```

## 示例HTML

``` html {6}
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```