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

    //% blockId=hiragana_agent_turn_direction
    //% block="$direction"
    //% direction.defl=HiraganaTurnDirection.Left
    export function turnDirection(direction: HiraganaTurnDirection): number {
        return direction;
    }

    export enum Bool {
        //% block="しん"
        Shin = 1,
        //% block="ぎ"
        Gi = 0
    }

    //% blockId=hiragana_boolean
    //% block="$bool"
    //% bool.defl=Bool.Shin
    export function shingi(bool: Bool): boolean {
        return bool === Bool.Shin;
    }

    //% blockId=hiragana_agent_moshi
    //% block="もし $hoge なら"
    //% handlerStatement=true
    //% hoge.defl=Bool.Shin
    //% topblock=false
    export function moshi(hoge: Bool, handler: () => void): void {
        if (hoge === Bool.Shin) handler();
    }

    //% blockId=hiragana_agent_initial
    //% block="はじめに"
    export function initial(handler: () => void): void {
        handler();
    }

    //% blockId=hiragana_agent_repeat
    //% block="くりかえし $times 回"
    //% times.defl=4
    //% handlerStatement=true
    //% topblock=false
    export function repeat(times: number, body: () => void): void {
        for (let i = 0; i < times; i++) {
            body();
        }
    }

    //% blockId=hiragana_agent_chat
    //% block="チャットコマンド $aaa をにゅうりょくしたとき"
    export function chatCommand(aaa: string, handler: () => void): void {
        player.onChat(aaa, handler);
    }

    //% blockId=hiragana_agent_teleport_to_player
    //% block="エージェントをじぶんのいちにもどす"
    export function teleportToPlayer(): void {
        agent.teleportToPlayer();
    }

    //% blockId=hiragana_agent_inspect
    //% block="エージェントの $direction の　$kind  "
    export function inspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=hiragana_agent_detect
    //% block="エージェントの  $direction　に　$kind  がある"
    export function detect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }

    //% blockId=hiragana_agent_teleport
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

    //% blockId=hiragana_agent_set_slot
    //% block="スロットばんごう $slot をセットする"
    export function setSlot(slot: number): void {
        return agent.setSlot(slot);
    }

    //% blockId=hiragana_agent_destroy
    //% block=" エージェントに $direction をはかいさせる"
    export function destroy(direction: SixDirection): void {
        agent.destroy(direction);
    }

    //% blockId=hiragana_agent_place
    //% block="エージェントに $direction へおかせる"
    export function place(direction: SixDirection): void {
        agent.place(direction);
    }

    //% blockId=hiragana_agent_turn
    //% block="エージェントのむきを $direction にかえる"
    export function turn(direction: TurnDirection): void {
        agent.turn(direction);
    }

    //% blockId=hiragana_agent_move
    //% block="エージェントを $direction に $blocks ブロックいどうさせる"
    //% blocks.defl=1
    export function move(direction: SixDirection, blocks: number): void {
        agent.move(direction, blocks);
    }

    //% blockId=hiragana_agent_place_minecart
    //% block="エージェントにトロッコをおかせる"
    export function placeMineCart(): void {
        player.execute("execute @c ~~~ summon minecart");
    }
}