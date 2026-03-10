### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに〇をはかいさせる|``ブロックをつかうよ！


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == BRICKS) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == BRICKS) {
            hiragana_agent.destroy(FORWARD)
        }
    }
})
```