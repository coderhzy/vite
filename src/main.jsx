import { sum,mul } from './utils/math'
import _ from 'lodash-es'
import {  formatPrice } from './ts/format'
import './css/style.css'
import './css/normal.less'
import App from './vue/App.vue'
import { createApp } from 'vue'

import ReactApp from './react/App'
import ReactDOM from 'react-dom/client'
import React from 'react'

const message = 'Hello World!'
console.log(message);

const foo = () => {
    console.log('foo');
}
foo()

console.log(sum(1, 2));
console.log(mul(1, 2));

console.log(_.join(['a', 'b', 'c'], '~'));

console.log(formatPrice(1000));

const titleEl = document.createElement('h2')
titleEl.innerHTML = 'Hello World'
titleEl.className = 'title'
document.body.appendChild(titleEl)

const app = createApp(App);
app.mount('#app')

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<ReactApp />)