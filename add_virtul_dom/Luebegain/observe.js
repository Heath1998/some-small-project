function observe(data) {  //data就是new出来的data对象
    if (!data || typeof data !== 'object') {
        return
    }
    return new Observe(data)
}

function Observe (data) {
    this.data = data
    this.walk(data)
}

Observe.prototype = {
    walk: function (data) {
        var me = this
        Object.keys(data).forEach(function (key) {
            me.convert(key, data[key])
        })
    },
    convert: function (key, val) {
        this.defineReactive(this.data, key, val)
    },
    defineReactive: function (data, key, val) {  //要绑定get和set的对象data
        var dep = new Dep();
        var childObj = observe(val)
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function () {
                if (Dep.target) {
                    dep.depend();
                }
                return val
            },
            set: function (newVal) {
                if (val == newVal) {
                    return 
                }
                val =newVal
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        })
    }
}

var uid = 0

function Dep () {
    this.id = uid++
    this.subs = [] 
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub)
    },

    depend:function() {
        Dep.target.addDep(this)
    },

    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update()
        })
    }
}

Dep.target = null;