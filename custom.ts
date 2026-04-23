/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf1e6" block="エージェント"
namespace hiragana_agent {
    export enum HiraganaTurnDirection {
        //% block="ひだり"
        Left = 2,
        //% block="みぎ"
        Right = 3
    }

    
    //% blockId=hiragana_agent_15
    //% block="$direction"
    //% direction.defl=2
    export function turnDirection(direction: HiraganaTurnDirection): number {
        return direction;
    }

    export enum Bool {
        //% block="しん"
        Shin = 1,
        //% block="ぎ"
        Gi = 0
    }


    //% blockId=hiragana_shingi
    //% block="$bool"
    //% bool.defl=true
    //% shim=TD_ID
    export function shingi(bool: Bool): boolean {
        return bool === Bool.Shin;
    }

    //% blockId=hiragana_agent_13
    //% block="もし $hoge なら"
    //% handlerStatement=true
    //% hoge.shadow=hiragana_shingi
    //% topblock=false
    export function moshi(hoge: boolean, handler: () => void): void {
        if (hoge) handler();
    }    

    //% blockId=hiragana_agent_11
    //% block="はじめに"
    export function initial(handler: () => void): void {
        handler();
    }

    //% blockId=hiragana_agent_10
    //% block="くりかえし $times 回"
    //% times.defl=4
    //% handlerStatement=true
    //% topblock=false
    export function repeat(times: number, body: () => void): void {
        for (let i = 0; i < times; i++) {
            body();
        }
    }

    //% blockId=hiragana_agent_9
    //% block="チャットコマンド $aaa をにゅうりょくしたとき"
    export function chatCommand(aaa: string, handler: () => void): void {
        player.onChat(aaa, handler);
    }

    //% blockId=hiragana_agent_8
    //% block="エージェントをじぶんのいちにもどす"
    export function teleportToPlayer(): void {
        agent.teleportToPlayer();
    }

    //% blockId=hiragana_agent_7
    //% block="エージェントの $direction の　$kind  "
    export function inspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=hiragana_agent_6
    //% block="エージェントの  $direction　に　$kind  がある"
    export function detect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }

    //% blockId=hiragana_agent_5
    //% block="エージェントをいまのいちから %t_pos=minecraftCreatePosition にテレポートさせる"
    export function teleport(t_pos: Position): void {
        let agentTrune: CompassDirection
        let agentOrient = agent.getOrientation()
        if (agentOrient == 0) {
            agentTrune = SOUTH
        } else if (agentOrient == -180) {
            agentTrune = NORTH
        } else if (agentOrient == -90) {
            agentTrune = EAST
        } else if (agentOrient == 90) {
            agentTrune = WEST
        } else {
            agentTrune = SOUTH
        }
        agent.teleport(positions.add(agent.getPosition(), t_pos), agentTrune);
    }

    //% blockId=hiragana_agent_4
    //% block="スロットばんごう $slot をセットする"
    export function setSlot(slot: number): void {
        return agent.setSlot(slot);
    }

    //% blockId=hiragana_agent_3
    //% block=" エージェントに $direction をはかいさせる"
    export function destroy(direction: SixDirection): void {
        agent.destroy(direction);
    }

    //% blockId=hiragana_agent_2
    //% block="エージェントに $direction へおかせる"
    export function place(direction: SixDirection): void {
        agent.place(direction);
    }

    //% blockId=hiragana_agent_1
    //% block="エージェントのむきを $direction にかえる"
    export function turn(direction: TurnDirection): void {
        agent.turn(direction);
    }


    //% blockID=hiragana_agent_0
    //% block="エージェントを $direction に $blocks ブロックいどうさせる"
    //% blocks.defl=1
    export function move(direction: SixDirection, blocks: number): void {
        agent.move(direction, blocks);
    }

    //% blockID=hiragana_agent_999
    //% block="エージェントにトロッコをおかせる"
    export function placeMineCart(): void {
        player.execute("execute @c ~~~ summon minecart");
    }
}