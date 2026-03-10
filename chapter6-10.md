### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに〇へおかせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            hiragana_agent.move(UP, 1)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            hiragana_agent.move(UP, 1)
            if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
                hiragana_agent.place(FORWARD)
            }
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
    }
})
```