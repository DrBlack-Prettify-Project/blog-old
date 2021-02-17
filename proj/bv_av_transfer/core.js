//改写自https://mrhso.github.io/IshisashiWebsite/BVwhodoneit/
'use strict';

const table = [...'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'];
const s = [11, 10, 3, 8, 4, 6];
const xor = 177451812;
const add = 8728348608;

const av2bv = (av) => {
    let num = NaN;
    if (Object.prototype.toString.call(av) === '[object Number]') {
        num = av;
    } else if (Object.prototype.toString.call(av) === '[object String]') {
        num = parseInt(av.replace(/[^0-9]/gu, ''));
    };
    if (isNaN(num) || num <= 0) {
        return '分析错误！';
    };

    num = (num ^ xor) + add;
    let result = [...'BV1  4 1 7  '];
    let i = 0;
    while (i < 6) {
        result[s[i]] = table[Math.floor(num / 58 ** i) % 58];
        i += 1;
    };
    return result.join('');
};

const bv2av = (bv) => {
    let str = '';
    if (bv.length === 12) {
        str = bv;
    } else if (bv.length === 10) {
        str = `BV${bv}`;
    // 根据官方 API，BV 号开头的 BV1 其实可以省略
    // 不过单独省略个 B 又不行（
    } else if (bv.length === 9) {
        str = `BV1${bv}`;
    } else {
        return '分析错误！';
    };
    if (!str.match(/[Bb][Vv][fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF]{10}/gu)) {
        return '分析错误！';
    };

    let result = 0;
    let i = 0;
    while (i < 6) {
        result += table.indexOf(str[s[i]]) * 58 ** i;
        i += 1;
    };
    return `av${result - add ^ xor}`;
};

const av = () => {
    let result = av2bv(document.getElementById('av').value);
    if (result !== '分析错误！') {
        document.getElementById('result').innerHTML = `结果：<a href="https://www.bilibili.com/video/${result}">${result}</a>`;
    } else {
        document.getElementById('result').innerHTML = `结果：${result}`;
    };
};

const bv = () => {
    let result = bv2av(document.getElementById('bv').value);
    if (result !== '分析错误！') {
        document.getElementById('result').innerHTML = `结果：<a href="https://www.bilibili.com/video/${result}">${result}</a>`;
    } else {
        document.getElementById('result').innerHTML = `结果：${result}`;
    };
};