### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを〇に〇ブロックいどうさせる||``
``||agent.エージェントに〇をはかいさせる||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
        }
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == BRICKS) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
            hiragana_agent.move(UP, 1)
            hiragana_agent.move(FORWARD, 2)
            hiragana_agent.move(DOWN, 1)
        }
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == BRICKS) {
            hiragana_agent.destroy(FORWARD)
        }
    }
})

```