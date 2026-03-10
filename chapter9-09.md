### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||loop.もし真ならくりかえし||``

``||agent.エージェントに〇へおかせる||``

``||agent.エージェントを〇に〇ブロックいどうさせる||``

``||agent.エージェントの前にブロックがある||``

``||logic.もし〇なら||``
``||logic.=||``
``||logic.真||``
``||logic.偽||``

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
    hiragana_agent.destroy(FORWARD)
    hiragana_agent.destroy(DOWN)
    hiragana_agent.move(FORWARD, 1)
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}


```