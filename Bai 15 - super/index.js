// su dung super lap trinh huong doi tuong trong javascript

class Hero{
    constructor(name, hp, damage){
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage){
        this.hp -= damage;
    }

    attack(enemy){
        enemy.applyDamage(this.damage);
    }
}


class RangeHero extends Hero{
    constructor(name, hp, damage, range){
        //super được sử dụng để gọi các hàm trên đối tượng cha.
        super(name, hp, damage);
        this.range = range;
    }

    attack(enemy){
        super.attack(enemy);
        this.hp += this.damage;
    }
}

const a = new RangeHero("A", 100, 10);
const b = new Hero("B", 200, 50);
console.log({a, b});
a.attack(b);
console.log({a, b});
