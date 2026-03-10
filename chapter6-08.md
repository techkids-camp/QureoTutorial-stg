### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに〇へおかせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
            hiragana_agent.place(FORWARD)
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        hiragana_agent.move(LEFT, 1)
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == false) {
            hiragana_agent.place(FORWARD)
        }
    }
})
```