### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇をはかいさせる||``

``||agent.エージェントを〇に〇ブロックいどうさせる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {
        if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
            break;
        }
    }
})
```

```ghost
while (true) {
    hiragana_agent.destroy(FORWARD)
    hiragana_agent.move(FORWARD, 1)
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}
```