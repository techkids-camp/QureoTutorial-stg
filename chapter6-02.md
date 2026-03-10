### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに〇をはかいさせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
    }
})
```
```ghost
player.onChat("run", function () {
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
        hiragana_agent.destroy(FORWARD)
    }
})
```