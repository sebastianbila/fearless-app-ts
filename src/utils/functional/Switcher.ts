import {ISwitchType} from "../interfaces/IRegistrationScreen";

export class Switcher {
    newObjects: ISwitchType[] = []
    objects: ISwitchType[] = []

    constructor(objects: ISwitchType[]) {
        this.objects = objects
    }

    switch(id: number) {
        this.objects.map((item: ISwitchType) => {
            item.selected = item.id === id
            this.newObjects.push(item)
        })
        return this.newObjects
    }
}

