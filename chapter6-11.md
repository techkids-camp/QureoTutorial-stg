### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントの向きを〇にかえる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
    	
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, LEFT) == false) {
            hiragana_agent.turn(LEFT_TURN)
        }
        if (hiragana_agent.detect(AgentDetection.Block, RIGHT) == false) {
            hiragana_agent.turn(RIGHT_TURN)
        }
        hiragana_agent.move(FORWARD, 1)
    }
})

```