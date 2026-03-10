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
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
            break;
        }
    }
})

```

```ghost
while (true) {
    hiragana_agent.destroy(UP)
    hiragana_agent.move(UP, 1)
    if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```