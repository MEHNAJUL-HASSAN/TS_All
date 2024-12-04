var _a;
// symbol is used for creating unique key for object properties to avoid property name colision.
var ukey = Symbol("ukey");
var per = (_a = {},
    _a[ukey] = "Hassan",
    _a);
console.log(per[ukey]);
