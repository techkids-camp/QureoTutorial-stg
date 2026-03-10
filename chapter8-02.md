### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇をはかいさせる||``
``||agent.エージェントを〇に〇ブロックいどうさせる|``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 5; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == true) {
        } else {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 5; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == true) {
            hiragana_agent.destroy(DOWN)
            hiragana_agent.move(FORWARD, 1)
        } else {
            hiragana_agent.move(FORWARD, 1)
        }
    }
})
```