export default function personage( { name, health }) {
    let life;
    let health;
    if (health > 50) {
        life = 'healthy';
    }
    else if (health <= 50 && health >= 15){
        life ='wounded';
    }
    else if (health < 15) {
         life = 'critical';
    }
    return life;
}

const userLife = personage({name:'Маг', health: 90});