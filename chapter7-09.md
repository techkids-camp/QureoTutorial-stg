### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを〇に〇ブロックいどうさせる||``
``||agent.エージェントに〇をはかいさせる||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == COBBLESTONE) {
        }
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == BRICKS) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == COBBLESTONE) {
            hiragana_agent.move(RIGHT, 1)
            hiragana_agent.move(UP, 2)
            hiragana_agent.move(LEFT, 1)
        }
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == BRICKS) {
            hiragana_agent.destroy(UP)
        }
    }
})
```