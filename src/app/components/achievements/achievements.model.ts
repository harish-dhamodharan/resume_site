export class Card {
    id: string;
    icon: string;
    award: Award;
    constructor(id: string, icon: string, award: Award) {
        this.id = id;
        this.icon = icon;
        this.award = award;
    }
}

export class Award {
    name: string;
    date: string;
    info: string;
    constructor(name: string, date: string, info: string) {
        this.name = name;
        this.date = date;
        this.info = info;
    }
}