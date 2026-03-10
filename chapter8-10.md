### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇をはかいさせる||``

``||agent.エージェントを〇に〇ブロックいどうさせる||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
        } else {
        }
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
            hiragana_agent.move(UP, 1)
            hiragana_agent.move(FORWARD, 2)
            hiragana_agent.move(DOWN, 1)
        } else {
            hiragana_agent.destroy(FORWARD)
        }
    }
})
```