### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯へおかせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

``||agent.エージェントの前にブロックがある||``

``||logic.もし◯なら||``
``||logic.=||``
``||logic.真||``

``||loop.くりかえしを終わる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {

    }
})
```

```ghost
while (true) {
    hiragana_agent.place(FORWARD)
    hiragana_agent.place(BACK)
    hiragana_agent.place(LEFT)
    hiragana_agent.place(RIGHT)
    hiragana_agent.move(UP, 1)
    if (hiragana_agent.detect(AgentDetection.Block, UP) == true) {
        break;
    }
}

```