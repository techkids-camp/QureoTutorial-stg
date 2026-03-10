### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇へおかせる||``
``||agent.エージェントを〇に〇ブロックいどうさせる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {
        if (hiragana_agent.detect(AgentDetection.Block, UP) == true) {
            break;
        }
    }
})
```

```ghost
while (true) {
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(UP, 1)
    if (hiragana_agent.detect(AgentDetection.Block, UP) == true) {
        break;
    }
}

```