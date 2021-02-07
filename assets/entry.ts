const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    onLoad () {
        cc.debug.setDisplayStats(true)
    }

    start () {
    }
}
