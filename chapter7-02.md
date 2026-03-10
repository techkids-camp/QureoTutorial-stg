### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントの向きを〇にかえる||``ブロックをつかうよ！
みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 14; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 14; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.turn(LEFT_TURN)
        }
    }
})
```