### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを〇に〇ブロックいどうさせる||``

``||agent.エージェントに〇をはかいさせる||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        } else {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.move(FORWARD, 1)
        } else {
            hiragana_agent.destroy(DOWN)
            hiragana_agent.move(FORWARD, 1)
        }
    }
})
```