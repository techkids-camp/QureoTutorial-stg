### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯をはかいさせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

``||agent.エージェントの前にブロックがある||``

``||logic.もし〇なら〜でなければ〜||``
``||logic.=||``
``||logic.真|``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
            hiragana_agent.destroy(FORWARD)
            hiragana_agent.move(UP, 1)
        } else {
            hiragana_agent.move(UP, 1)
        }
    }
})
```