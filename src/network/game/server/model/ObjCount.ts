import ZoneMessage from '#/network/game/server/ZoneMessage.js';

export default class ObjCount extends ZoneMessage {
    constructor(
        readonly coord: number,
        readonly obj: number,
        readonly oldCount: number,
        readonly newCount: number
    ) {
        super(coord);
    }
}
