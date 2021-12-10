# 介绍

### Introduce <Badge text="haha" />

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

::: tip
这是一个提示
:::

``` js
export default {
  name: 'Test'
}
```

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