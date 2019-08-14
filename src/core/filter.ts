// 过滤器
export default {
    'comma': (val: string) => {
        let local: Array<string> = val.split('');
        local.unshift('"');
        local.push('"');
        return local.join('');
    }
}