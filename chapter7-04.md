### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントの向きを〇にかえる||``ブロックをつかうよ！
みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        }
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == BRICKS) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.turn(LEFT_TURN)
        }
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == BRICKS) {
            hiragana_agent.turn(RIGHT_TURN)
        }
    }
})
```