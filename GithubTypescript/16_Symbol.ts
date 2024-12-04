// symbol is used for creating unique key for object properties to avoid property name colision.
let ukey:symbol = Symbol("ukey");
let per = {
    [ukey]:"Hassan"
}

console.log(per[ukey]);