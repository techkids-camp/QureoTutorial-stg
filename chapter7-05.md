### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントの向きを〇にかえる||``
``||agent.エージェントの〇のブロック||``
``||logic.もし〇〇なら||``
``||logic.=||``
``||blocks.丸石||``
``||blocks.レンガブロック||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 15; index++) {
        hiragana_agent.move(FORWARD, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 15; index++) {
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